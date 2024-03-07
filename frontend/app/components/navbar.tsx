"use client";
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem } from "@mui/material";
import React, { useState } from 'react';
import { NavLink } from "./nav-link";
import { DropdownMenu } from "./dropdown-menu";
import Link from "next/link";


export const NavBar:React.FC = () => {

    return (
        <AppBar position="static" component="nav">
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
                    link="/blog" 
                    text="Blog"
                />
                <NavLink 
                    link="/contact" 
                    text="Contact"
                />


            </Toolbar>
        </AppBar>
    );
}
