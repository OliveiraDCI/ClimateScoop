const mongoose = require("mongoose");

const { Schema } = mongoose;

const articleSchema = new Schema(
  {
    topic: { type: String },
    region: { type: String },
    title: { type: String },
    img: { type: String },
    imgDescription: { type: String },
    article: { type: String },
    references: { type: String },
    likes: [String],
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Article", articleSchema);
