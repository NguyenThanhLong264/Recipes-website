import express from "express";
import { getRandomRecipes } from "./services/spoonacular.js";

const router = express.Router();

router.get("/random", async (req, res) => {
    try {
        const recipes = await getRandomRecipes();
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: "Error fetching recipes", error });
    }
});

export default router;
