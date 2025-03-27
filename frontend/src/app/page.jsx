"use client";
import React from 'react';
import { Box, Typography, Container, Grid, Paper, Button } from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GroupIcon from '@mui/icons-material/Group';
import Link from 'next/link';

export default function HomePage() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: '#F5E1C0',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom sx={{ color: '#FF9800', fontWeight: 'bold' }}>
            Discover Delicious Recipes
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            Join our community of food lovers and explore thousands of amazing recipes!
          </Typography>
          <Button
            variant="contained"
            size="large"
            component={Link}
            href="/recipes"
            sx={{
              mt: 4,
              bgcolor: '#FF9800',
              '&:hover': { bgcolor: '#F57C00' },
            }}
          >
            Explore Recipes
          </Button>
        </Container>
      </Box>

      {/* Features Section */}
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                p: 4,
                textAlign: 'center',
                height: '100%',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  transition: 'transform 0.3s ease-in-out',
                },
              }}
              elevation={2}
            >
              <RestaurantIcon sx={{ fontSize: 48, color: '#FF9800', mb: 2 }} />
              <Typography variant="h5" component="h2" gutterBottom sx={{ color: '#FF9800' }}>
                Diverse Recipes
              </Typography>
              <Typography color="text.secondary">
                Explore a wide variety of recipes from different cuisines around the world.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                p: 4,
                textAlign: 'center',
                height: '100%',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  transition: 'transform 0.3s ease-in-out',
                },
              }}
              elevation={2}
            >
              <FavoriteIcon sx={{ fontSize: 48, color: '#FF9800', mb: 2 }} />
              <Typography variant="h5" component="h2" gutterBottom sx={{ color: '#FF9800' }}>
                Save Favorites
              </Typography>
              <Typography color="text.secondary">
                Create your personal collection of favorite recipes for quick access.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                p: 4,
                textAlign: 'center',
                height: '100%',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  transition: 'transform 0.3s ease-in-out',
                },
              }}
              elevation={2}
            >
              <GroupIcon sx={{ fontSize: 48, color: '#FF9800', mb: 2 }} />
              <Typography variant="h5" component="h2" gutterBottom sx={{ color: '#FF9800' }}>
                Join Community
              </Typography>
              <Typography color="text.secondary">
                Connect with other food enthusiasts and share your culinary experiences.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box
        sx={{
          bgcolor: '#F5E1C0',
          py: 6,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#FF9800' }}>
            Ready to Start Cooking?
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" paragraph>
            Sign up now to access all features and join our cooking community!
          </Typography>
          <Button
            variant="contained"
            size="large"
            component={Link}
            href="/signup"
            sx={{
              bgcolor: '#FF9800',
              '&:hover': { bgcolor: '#F57C00' },
            }}
          >
            Sign Up Now
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
