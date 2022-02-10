import mongoose from "mongoose";
const url =
  "mongodb+srv://admin:ilovecoding@cluster0.nhtkl.mongodb.net/bookstore?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB connected :${conn.connection.host}`);
  } catch (error) {
    console.log(`Error:${error.message}`);
    process.exit(1);
  }
};
export default connectDB;
