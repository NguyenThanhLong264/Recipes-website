"use client";
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import Link from "next/link";

export default function NavBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                {/* Left Side - Navigation Links */}
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

                {/* Right Side - Authentication */}
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
    );
}
