import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Container, Box } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from '../theme/dark'; // Adjust the import path to where your theme is defined
import { NavBar } from './components/navbar';
import Footer from "./components/footer"; 
import { BACKGROUND_IMAGE } from "./common/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Nikki Racing",
    description: "Nikki Racing",
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                
                <ThemeProvider theme={darkTheme}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}>
                        <NavBar />
                        <Box component="main" sx={{
                            backgroundImage: `url(${BACKGROUND_IMAGE})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat', 
                            minHeight: '87vh',                           
                        }}>
                            <Container component="div">
                                {children}
                            </Container>

                        </Box>
                        <Footer />
                        
                    </Box>
                </ThemeProvider>
            </body>
        </html>
    );
}
