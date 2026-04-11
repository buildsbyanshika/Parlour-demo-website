import mongoose, { Document, Schema } from 'mongoose';

export interface IAppointment extends Document {
  service: object[]; // Assuming array of objects
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

const AppointmentSchema: Schema = new Schema({
  service: {
    type: [Object],
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Appointment || mongoose.model<IAppointment>('Appointment', AppointmentSchema);