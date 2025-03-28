import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const SPOONACULAR_API_KEY = process.env.SPOONACULAR_API_KEY;
const BASE_URL = "https://api.spoonacular.com/recipes";

if (!SPOONACULAR_API_KEY) {
    console.error("Error: Missing SPOONACULAR_API_KEY in .env file");
    process.exit(1); // Exit process if API key is missing
}

// Fetch random recipes
export const getRandomRecipes = async (count = 10) => {
    try {
        const response = await axios.get(`${BASE_URL}/random`, {
            params: { number: count, apiKey: SPOONACULAR_API_KEY },
        });
        return response.data.recipes || [];
    } catch (error) {
        console.error("Error fetching random recipes:", error.response?.data || error.message);
        return [];
    }
};

// Search recipes by ingredient or keyword
export const searchRecipes = async (query) => {
    try {
        const response = await axios.get(`${BASE_URL}/complexSearch`, {
            params: { query, number: 10, apiKey: SPOONACULAR_API_KEY },
        });
        return response.data.results || [];
    } catch (error) {
        console.error("Error searching recipes:", error.response?.data || error.message);
        return [];
    }
};

export const getRecipeInformation = async (id) => {
    try {
        console.log(`Fetching recipe ${id} from Spoonacular...`);
        const response = await axios.get(`${BASE_URL}/${id}/information`, {
            params: {
                apiKey: SPOONACULAR_API_KEY
            }
        });
        console.log('Recipe data received:', response.data ? 'success' : 'empty');
        return response.data;
    } catch (error) {
        console.error("Spoonacular API Error Details:", {
            endpoint: `${BASE_URL}/${id}/information`,
            status: error.response?.status,
            data: error.response?.data,
            message: error.message
        });
        throw error;
    }
};
