"use client";
import { AppBar, Toolbar, IconButton, Typography, Box, useTheme } from "@mui/material";
import React, { useState } from 'react';
import { NavLink } from "./nav-link";
import { darken } from "@mui/material/styles";
import { DropdownMenu } from "./dropdown-menu";
import Link from "next/link";
import { useAuth } from "../auth/auth-context";


export const signOut = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
};


export const NavBar:React.FC = () => {
    const { auth } = useAuth();
    const theme = useTheme();

    const handleSignOut = () => {
        signOut();
        window.location.reload();

    };
    return (
        <AppBar position="static" component="nav">
            <Box sx={{
                    textAlign:'end',
                    padding: '0 1.5rem',
                    backgroundColor: darken('#333442', 0.6)
                }}
            >
            {auth.token ? (
                <>
                    <Typography
                        onClick={handleSignOut}
                        color={theme.palette.text.secondary}
                        sx={{
                            "&:hover": {
                                color: "inherit",
                                cursor: "pointer",
                            },
                        }}
                        >
                        Sign out
                    </Typography>

                </>
            ) : (
                <>
                    <NavLink link="/" text="Sign up" hide={false} />
                    <Typography component="span" sx={{ margin: '0 0.5rem', userSelect: 'none' }}>|</Typography>
                    <NavLink link="/sign-in" text="Sign in" hide={false} />
                </>
            )}
            </Box>
            <Toolbar sx={{ gap: '1rem' }}>
                
                <DropdownMenu />
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        flexGrow: 1,
                        letterSpacing: '5px', //{ xs: '2px', sm: '5px' }, 
                        fontFamily: "NikkiFont",

                    }}
                >
                    <Link href="/">
                        Nikki Racing
                    </Link>
                </Typography>
                <NavLink 
                    link="/gallery" 
                    text="Gallery"
                />
                <NavLink 
                    link="https://medium.com/@firstflush" 
                    text="Blog"
                    external={true}
                />
                <NavLink
                    link="/about"
                    text="About Us"
                />
                <NavLink 
                    link="/contact" 
                    text="Contact"
                />


            </Toolbar>
        </AppBar>
    );
}
