"use client";

import { createTheme, ThemeProvider } from '@mui/material/styles';

// Create a custom theme.
export const darkTheme = createTheme({
  palette: {
    mode: 'dark', // Switches the theme to dark mode
    primary: {
      main: '#007bff', // Example blue color for primary actions and elements
    },
    background: {
      default: '#1e1f2f;', // A dark grey for the default background
      paper: '#1e1f2f;', // A slightly lighter grey for elements like cards and dialogs
    },
    text: {
      primary: '#DADADA', // Ensures text is primarily white for readability
      secondary: '#aaaaaa', // A lighter grey for secondary text
    },
    // Add other color customizations here
  },
  // You can also customize typography, breakpoints, and other aspects here
});
