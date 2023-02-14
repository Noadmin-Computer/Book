import mongoose from "mongoose";

export const SearchSchema = new mongoose.Schema({
  "name": String,
  "author" : String,
});

export default mongoose.model("SEARCH", SearchSchema);
