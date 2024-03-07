import { IconButton, Menu, Box } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { DropdownMenuItem } from "./dropdown-menu-item";


export const DropdownMenu: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
            >
                <MenuIcon />
            </IconButton>
            <Menu
                sx={{
                    "& .MuiPaper-root": {
                        // Targeting the Paper component inside Menu
                        width: "10rem", // Adjust width as needed
                        padding: "0.2rem", // Add padding if desired
                    },
                }}
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                keepMounted
                open={open}
                onClose={handleClose}
            >
                <DropdownMenuItem link='/' text='Home' onClick={handleClose} />
                <DropdownMenuItem link='gallery/' text='Gallery' onClick={handleClose} />
                <DropdownMenuItem link='blog/' text='Blog' onClick={handleClose} />
                <DropdownMenuItem link='contact/' text='Contact' onClick={handleClose} />
            </Menu>
        </Box>
    );
};
