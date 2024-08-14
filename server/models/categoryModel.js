import mongoose, { Schema } from "mongoose";

const categoriesSchema = new Schema(
    {
        name: {
            type: String,
        },
        slug: {
            type: String,
            unique: true,
            lowercase: true,
        },
        status:{
            type:String,
        },
    },
    { timestamps: true, versionKey: false }
);
export default mongoose.model("Categories", categoriesSchema);
