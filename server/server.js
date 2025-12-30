import express from "express";
import cors from "cors";
import Quotes from "./routes/quotes.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/quotes', Quotes)

app.get("/", (req, res) => {
  res.send("Server is live");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
