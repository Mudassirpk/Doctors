import mongoose from "mongoose";

const connection_uri = process.env.MONGODB_URI;

export async function connect_database() {
  console.log('connecting db')
  if (connection_uri) {
    const response = await mongoose.connect(connection_uri);
    if (response.connections[0].readyState === 1) {
      console.log("database connected successfully");
    } else {
      console.log("database connection failed");
    }
  } else {
    console.log("database connection uri not provided");
  }
}
