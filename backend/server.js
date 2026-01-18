const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Appointment = require('./models/Appointment');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.Mongodb_URL, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('connected', () => {
  console.log('MongoDB connected successfully');
});
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});


app.post('/api/appointments', async (req, res) => {
  const { service, date, time, name, email, phone, message  } = req.body;

  const requiredFields = [ 'service', 'date', 'time', 'name', 'email', 'phone' ,'message'];
  const missingFields = requiredFields.filter(field => !req.body[field]);

  if (missingFields.length > 0) {
    console.error(`Validation failed: Missing fields: ${missingFields.join(', ')}`);
    return res.status(400).json({ 
      success: false, 
      error: 'Required fields are missing', 
      missing: missingFields 
    });
  }

  try {
    const appointment = new Appointment({
      service,
      date,
      time,
      name,
      email,
      phone,
      message, 
    });
    await appointment.save();
    console.log("Appointment saved successfully");
    res.status(201).json({ success: true, message: 'Appointment created successfully.' });
  } catch (err) {
    console.error("Error saving appointment:", err);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.listen(5000, '0.0.0.0', () => console.log("Server running on port 5000"));

