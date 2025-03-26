"use client";
import React, { useEffect, useState } from "react";

export default function RecipeList() {
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        fetchRecipes(); // Default fetch on load
    }, []);

    const fetchRecipes = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/recipes/random", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log("✅ Recipes fetched:", data);
            setRecipes(data)
            return data;
        } catch (error) {
            console.error("❌ Fetch error:", error);
        }
    };

    const handleSearch = () => {
        fetchRecipes(query);
    };

    return (
        <div>
            <h2>Recipes</h2>
            <input
                type="text"
                placeholder="Search for recipes..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            <div>
                {recipes.length > 0 ? (
                    <ul>
                        {recipes.map((recipe) => (
                            <li key={recipe.id}>{recipe.title}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No recipes found.</p>
                )}
            </div>
        </div>
    );
}
