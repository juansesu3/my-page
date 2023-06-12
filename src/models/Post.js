import mongoose, { model, models,  Schema } from "mongoose";
const postSchema = new Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    content: { type: String, required: true },
    username: { type: String, required: true },
  },
  { timestamps: true }
);

export const Post = models.Post || model('Post', postSchema);
