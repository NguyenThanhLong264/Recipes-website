"use client";
import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  CircularProgress,
  Paper,
  Grid2,
} from "@mui/material";

export default function RecipePage({ params }) {
  const resolvedParams = React.use(params);
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/recipes/${resolvedParams.id}/information`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );

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
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
      >
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
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        maxWidth: "100%",
        width: "100%",
        p: 4,
      }}
    >
      {/* Left Section (3/4) */}
      <Box
        sx={{
          p: 4,
          width: "75%",
          bgcolor: "#F5E1C0",
        }}
      >
        {/* Title */}
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ color: "#FF9800" }}
        >
          {recipe.title}
        </Typography>

        {/* Main Image */}
        <Box sx={{ mb: 4 }}>
          <img
            src={recipe.image}
            alt={recipe.title}
            style={{
              width: "100%",
              borderRadius: "8px",
              maxHeight: "500px",
              objectFit: "cover",
            }}
          />
        </Box>

        {/* Instructions */}
        <Typography variant="h5" gutterBottom sx={{ mt: 4, color: "#FF9800" }}>
          Instructions
        </Typography>

        {recipe.analyzedInstructions?.[0]?.steps?.map((step, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Typography variant="body1">
              <strong>{index + 1}. </strong>
              {step.step}
            </Typography>
          </Box>
        ))}

        {/* Ingredients */}
        <Typography variant="h5" gutterBottom sx={{ mt: 4, color: "#FF9800" }}>
          Ingredients
        </Typography>
        <Grid2 container spacing={2}>
          {recipe.extendedIngredients?.map((ingredient, index) => (
            <Grid2 item xs={12} sm={6} key={index}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  "&:hover": {
                    borderColor: "#FF9800",
                    borderWidth: 1,
                    borderStyle: "solid",
                  },
                }}
              >
                <img
                  src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                  alt={ingredient.name}
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "cover",
                    borderRadius: "4px",
                  }}
                />
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    {ingredient.name}
                  </Typography>
                  <Typography variant="body2">
                    {ingredient.amount} {ingredient.unit}
                  </Typography>
                </Box>
              </Paper>
            </Grid2>
          ))}
        </Grid2>
      </Box>

      {/* Right Section (1/4) */}
      <Box
        sx={{
          p: 4,
          bgcolor: "#F5E1C0",
          width: "25%",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 3,
            position: "static",
            top: 20,
            borderTop: 3,
            borderColor: "#FF9800",
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ color: "#FF9800" }}>
            Recipe Details
          </Typography>

          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle2" color="text.secondary">
              Cooking Time
            </Typography>
            <Typography variant="body1">
              {recipe.readyInMinutes} minutes
            </Typography>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle2" color="text.secondary">
              Servings
            </Typography>
            <Typography variant="body1">{recipe.servings} people</Typography>
          </Box>

          {recipe.dishTypes && recipe.dishTypes.length > 0 && (
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2" color="text.secondary">
                Dish Type
              </Typography>
              <Typography variant="body1">
                {recipe.dishTypes.join(", ")}
              </Typography>
            </Box>
          )}

          {recipe.diets && recipe.diets.length > 0 && (
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2" color="text.secondary">
                Diets
              </Typography>
              <Typography variant="body1">{recipe.diets.join(", ")}</Typography>
            </Box>
          )}
        </Paper>
      </Box>
    </Box>
  );
}
