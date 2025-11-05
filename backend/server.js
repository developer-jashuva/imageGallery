import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Connect MongoDB
mongoose.connect("mongodb://localhost:27017/imagegallery")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// ✅ Schema + Model
const imageSchema = new mongoose.Schema({
  filename: String,
  url: String
});
const Image = mongoose.model("Image", imageSchema);

// ✅ Route to fetch all images
app.get("/images", async (req, res) => {
  const images = await Image.find();
  res.json(images);
});

// ✅ Start server
app.listen(5000, () => console.log("Server running on port 5000"));
