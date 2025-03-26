import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const SPOONACULAR_API_KEY = process.env.SPOONACULAR_API_KEY;
const BASE_URL = "https://api.spoonacular.com/recipes";

// Fetch random recipes
export const getRandomRecipes = async (count = 10) => {
    try {
        const response = await axios.get(`${BASE_URL}/random`, {
            params: {
                number: count,
                apiKey: SPOONACULAR_API_KEY,
            },
        });
        return response.data.recipes; // Returns an array of recipes
    } catch (error) {
        console.error("Error fetching random recipes:", error);
        return [];
    }
};

// Search recipes by ingredient
export const searchRecipes = async (query) => {
    try {
        const response = await axios.get(`${BASE_URL}/complexSearch`, {
            params: {
                query: query,
                number: 10,
                apiKey: SPOONACULAR_API_KEY,
            },
        });
        return response.data.results; // Returns an array of recipes
    } catch (error) {
        console.error("Error searching recipes:", error);
        return [];
    }
};
