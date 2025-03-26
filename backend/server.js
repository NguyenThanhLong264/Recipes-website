import express from 'express';
import connectDB from './config/db.js'; // Import the async function
import dotenv from 'dotenv';
import recipesRouter from "./routes/recipes.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors()); // Allow frontend requests

// Connect to Database
(async () => {
    await connectDB(); // ✅ Ensure DB connects before running server
})();

app.use("/api/recipes", recipesRouter);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
