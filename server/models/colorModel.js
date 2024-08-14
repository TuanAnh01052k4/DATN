import mongoose, { Schema } from "mongoose";

const colorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    background: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);
export default mongoose.model("colors", colorSchema);
