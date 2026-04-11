const mongoose = require('mongoose');
const AppointmentSchema = new mongoose.Schema({
  service: {
  type: [Object],
  required: true,
},
  date:
  {type: String,
    required: true,
  },
  time:
  {type: String,
    required: false,
    default: "",
  },
  name: 
  {type: String,
    required: true,
  },
  email: 
  {type: String,
    required: true,
  },
  phone: 
  {type: String,
    required: true,
  },
  message: 
  {type: String,
     required: true,
  },
//   payment: String,

});
module.exports = mongoose.model('Appointment', AppointmentSchema);
