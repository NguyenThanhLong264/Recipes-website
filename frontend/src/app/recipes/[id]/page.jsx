"use client";
import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, CircularProgress, Paper, Grid2 } from '@mui/material';

export default function RecipePage({ params }) {
    const resolvedParams = React.use(params);
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/recipes/${resolvedParams.id}/information`, {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setRecipe(data);
            } catch (error) {
                console.error("❌ Fetch error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipe();
    }, [resolvedParams.id]);

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
                <CircularProgress />
            </Box>
        );
    }

    if (!recipe) {
        return (
            <Container>
                <Typography variant="h5" textAlign="center">
                    Recipe not found
                </Typography>
            </Container>
        );
    }

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Grid2 container spacing={4}>
                {/* Recipe Title and Image */}
                <Grid2 item xs={12}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        {recipe.title}
                    </Typography>
                </Grid2>
                <Grid2 item xs={12} md={6}>
                    <img 
                        src={recipe.image} 
                        alt={recipe.title}
                        style={{ 
                            width: '100%', 
                            borderRadius: '8px',
                            maxHeight: '400px',
                            objectFit: 'cover'
                        }}
                    />
                </Grid2>

                {/* Recipe Details */}
                <Grid2 item xs={12} md={6}>
                    <Paper elevation={3} sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Ready in {recipe.readyInMinutes} minutes
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Servings: {recipe.servings}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Health Score: {recipe.healthScore}
                        </Typography>
                        {recipe.diets && recipe.diets.length > 0 && (
                            <>
                                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                                    Diets:
                                </Typography>
                                <Typography variant="body1">
                                    {recipe.diets.join(', ')}
                                </Typography>
                            </>
                        )}
                    </Paper>
                </Grid2>

                {/* Instructions */}
                <Grid2 item xs={12}>
                    <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                        Instructions
                    </Typography>
                    <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
                </Grid2>

                {/* Ingredients */}
                <Grid2 item xs={12}>
                    <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                        Ingredients
                    </Typography>
                    <Grid2 container spacing={2}>
                        {recipe.extendedIngredients?.map((ingredient, index) => (
                            <Grid2 item xs={12} sm={6} md={4} key={index}>
                                <Paper elevation={1} sx={{ p: 2 }}>
                                    <Typography variant="body1">
                                        {ingredient.original}
                                    </Typography>
                                </Paper>
                            </Grid2>
                        ))}
                    </Grid2>
                </Grid2>
            </Grid2>
        </Container>
    );
}