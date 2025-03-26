import express from 'express';
import db from './config/db.js';
import dotenv from 'dotenv';
import { getRandomRecipes, searchRecipes } from "./servieces/spoonacular.js";

dotenv.config();
const app = express();
app.use(express.json());

// Route to fetch random recipes
app.get("/api/recipes/random", async (req, res) => {
    const recipes = await getRandomRecipes();
    res.json(recipes);
});

// Route to search recipes by keyword
app.get("/api/recipes/search", async (req, res) => {
    const { query } = req.query;
    if (!query) return res.status(400).json({ error: "Query is required" });

    const recipes = await searchRecipes(query);
    res.json(recipes);
});
// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
