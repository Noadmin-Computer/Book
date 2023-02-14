import mongoose, { Mongoose } from "mongoose";

export const MainSchema = new mongoose.Schema({
  name: String,
  pic: String,
  author: mongoose.SchemaTypes.ObjectId,
  price: Number,
  description: String,
});

export default mongoose.model("MAIN", MainSchema);
