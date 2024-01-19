import mongoose from "mongoose";

const querySchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Please provide a name"],
    },
    email: {
      type: String,
      required: [true, "Please provide a email"],
    },
    message: {
      type: String,
      required: [true, "Please provide a email"],
    },
  },
  { timestamps: true }
);

const Query = mongoose.models.querys || mongoose.model("querys", querySchema);

export default Query;
