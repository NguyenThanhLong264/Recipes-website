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

                    <Box>
                        <Button color="inherit" component={Link} href="/login">
                            Login
                        </Button>
                        <Button color="inherit" component={Link} href="/signup">
                            Signup
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar /> {/* This empty Toolbar acts as a spacer */}
        </>
    );
}
