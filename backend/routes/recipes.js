import express from "express";
import { getRandomRecipes, searchRecipes } from "../servieces/spoonacular.js"; // Fixed import path

const router = express.Router();

// Get random recipes
router.get("/random", async (req, res) => {
    try {
        const recipes = await getRandomRecipes();
        res.json(recipes);
    } catch (error) {
        console.error("Server error:", error);
        res.status(500).json({ message: "Error fetching recipes" });
    }
});

// Search recipes by query
router.get("/", async (req, res) => {
    const query = req.query.q || "pasta"; // Default query if not provided
    try {
        const recipes = await searchRecipes(query);
        res.json(recipes);
    } catch (error) {
        console.error("Server error:", error);
        res.status(500).json({ message: "Error searching recipes" });
    }
});

export default router;
