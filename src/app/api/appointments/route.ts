// import { NextRequest, NextResponse } from 'next/server';
// import mongoose from 'mongoose';
// import Appointment from '@/models/Appointment';

// const connectDB = async () => {
//   if (mongoose.connections[0].readyState) return;
//   await mongoose.connect(process.env.MONGODB_URI!);
// };

// export async function POST(request: NextRequest) {
//   await connectDB();

//   try {
//     const { service, date, time, name, email, phone, message } = await request.json();

//     const requiredFields = ['service', 'date', 'time', 'name', 'email', 'phone', 'message'];
//     const missingFields = requiredFields.filter(field => !request.body[field]);

//     if (missingFields.length > 0) {
//       console.error(`Validation failed: Missing fields: ${missingFields.join(', ')}`);
//       return NextResponse.json(
//         { success: false, error: 'Required fields are missing', missing: missingFields },
//         { status: 400 }
//       );
//     }

//     const appointment = new Appointment({
//       service,
//       date,
//       time,
//       name,
//       email,
//       phone,
//       message,
//     });n

//     await appointment.save();
//     console.log('Appointment saved successfully');

//     return NextResponse.json({ success: true, message: 'Appointment created successfully.' }, { status: 201 });
//   } catch (err) {
//     console.error('Error saving appointment:', err);
//     return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
//   }
// }