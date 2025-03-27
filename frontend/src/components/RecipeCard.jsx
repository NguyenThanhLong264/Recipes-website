"use client";
import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function RecipeCard({ recipe }) {
    const router = useRouter();

    return (
        <Card 
            sx={{ 
                width: '300px',
                height: '350px',
                margin: '0 auto',
                cursor: 'pointer',
                '&:hover': {
                    transform: 'scale(1.02)',
                    transition: 'transform 0.2s ease-in-out'
                }
            }}
            onClick={() => router.push(`/recipes/${recipe.id}`)}
        >
            <CardMedia
                component="img"
                height="200"
                image={recipe.image}
                alt={recipe.title}
                sx={{ objectFit: 'cover' }}
            />
            <CardContent>
                <Typography 
                    variant="h6" 
                    component="div"
                    sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        lineHeight: '1.5',
                        height: '3em'
                    }}
                >
                    {recipe.title}
                </Typography>
            </CardContent>
        </Card>
    );
}
