"use client";
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem } from "@mui/material";
import React, { useState } from 'react';
// import MenuIcon from "@mui/icons-material/Menu"; 

// import styles from "./navbar.module.css";
import { NavLink } from "./nav-link";
import { DropdownMenu } from "./dropdown-menu";

// export default function NavBar() {
export const NavBar:React.FC = () => {
    // const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    // const open = Boolean(anchorEl);
    // const handleMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    //     setAnchorEl(e.currentTarget)
    // }
    // const handleClose = () => {
    //     setAnchorEl(null);
    // };

    return (
        <AppBar position="static">
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
                    Nikki Racing
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
