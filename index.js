import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    email: "tonycypher0@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https//github.com/tonycypher",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
