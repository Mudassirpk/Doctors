import mongoose, { Schema, model } from "mongoose";

const appointmentSchema = new Schema({
  pName: String,
  pAge: Number,
  symptoms: String,
  date: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  doctor: {
    type: Schema.Types.ObjectId,
    ref: "Doctor",
  },
  time: String,
});

export const Review = new Schema({
  commentorId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  commentorName: String,
  message: String,
});

export const Appointment =
  mongoose.models.User || model("Appointment", appointmentSchema);

const doctorSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  qualification: String,
  description: String,
  mapCoordinate: String,
  location: String,
  specialization: String,
  experience: String,
  appointments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Appointment",
    },
  ],
  reviews: [Review],
});

export const Doctor = mongoose.models.Doctor || model("Doctor", doctorSchema);

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  phone: {
    type: String,
    unique: true,
  },
  password: String,
  address: String,
  appointments: [appointmentSchema],
});
export const User = mongoose.models.User || model("User", userSchema);
