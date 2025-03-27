"use client";
import React, { useEffect, useState } from "react";
import { Container, TextField, Button, Box, Grid2, Typography } from "@mui/material";
import RecipeCard from "../../components/RecipeCard";

export default function RecipesPage() {
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        fetchRandomRecipes();
    }, []);

    const fetchRandomRecipes = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/recipes/random", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            setRecipes(data);
        } catch (error) {
            console.error("❌ Fetch error:", error);
        }
    };

    const searchRecipes = async (searchQuery) => {
        try {
            const response = await fetch(`http://localhost:5000/api/recipes?q=${searchQuery}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            setRecipes(data);
        } catch (error) {
            console.error("❌ Search error:", error);
        }
    };

    const handleSearch = () => {
        if (query.trim()) {
            searchRecipes(query);
        } else {
            fetchRandomRecipes();
        }
    };

    return (
        <Container maxWidth="xl" sx={{ py: 4 }}>
            <Box sx={{ mb: 4, display: 'flex', gap: 2 }}>
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Search for recipes..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <Button 
                    variant="contained" 
                    onClick={handleSearch}
                    sx={{ minWidth: '100px' }}
                >
                    Search
                </Button>
            </Box>

            <Grid2 container spacing={3} justifyContent="center">
                {recipes.length > 0 ? (
                    recipes.map((recipe) => (
                        <Grid2 item key={recipe.id} xs={3}>
                            <RecipeCard recipe={recipe} />
                        </Grid2>
                    ))
                ) : (
                    <Grid2 item xs={12}>
                        <Typography variant="h6" textAlign="center">
                            No recipes found.
                        </Typography>
                    </Grid2>
                )}
            </Grid2>
        </Container>
    );
}
