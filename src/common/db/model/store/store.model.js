import mongoose from "mongoose";

export const StoreSchema = new mongoose.Schema({
  name: String,
  pic: String,
  price: Number,
  author: String,
  description: String,
});

export default mongoose.model("STORE", StoreSchema);
