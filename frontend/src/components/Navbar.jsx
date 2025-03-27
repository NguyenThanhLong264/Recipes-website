"use client";
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import Link from "next/link";

export default function NavBar() {
    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component={Link}
                        href="/"
                        sx={{
                            textDecoration: 'none',
                            color: 'inherit',
                            marginRight: 4,
                            '&:hover': {
                                cursor: 'pointer'
                            }
                        }}
                    >
                        Recipe Hub
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: "flex", gap: 2 }}>
                        <Button color="inherit" component={Link} href="/">
                            Home
                        </Button>
                        <Button color="inherit" component={Link} href="/recipes">
                            Recipes
                        </Button>
                        <Button color="inherit" component={Link} href="/favorites">
                            Favorites
                        </Button>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button
                            variant="outlined"
                            component={Link}
                            href="/login"
                            sx={{
                                color: '#F5E1C0',
                                borderColor: '#F5E1C0',
                                '&:hover': {
                                    borderColor: '#FFF3E0',
                                    backgroundColor: 'rgba(245, 225, 192, 0.04)',
                                },
                            }}
                        >
                            Login
                        </Button>
                        <Button
                            variant="contained"
                            component={Link}
                            href="/signup"
                            sx={{
                                backgroundColor: '#FF9800',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: '#F57C00',
                                },
                            }}
                        >
                            Sign Up
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar /> {/* This empty Toolbar acts as a spacer */}
        </>
    );
}
