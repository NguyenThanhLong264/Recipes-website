import express from "express";
import { getRandomRecipes, searchRecipes, getRecipeInformation } from "../servieces/spoonacular.js";

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

// Get recipe information by ID
router.get("/:id/information", async (req, res) => {
    const recipeId = req.params.id;
    try {
        console.log(`Processing request for recipe ID: ${recipeId}`);
        const recipe = await getRecipeInformation(recipeId);
        if (!recipe) {
            return res.status(404).json({ message: "Recipe not found" });
        }
        res.json(recipe);
    } catch (error) {
        console.error("Recipe information error:", {
            id: recipeId,
            error: error.message,
            response: error.response?.data
        });
        const statusCode = error.response?.status || 500;
        res.status(statusCode).json({ 
            message: error.response?.data?.message || "Error fetching recipe information",
            error: error.message
        });
    }
});

export default router;
