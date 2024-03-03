import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from '../theme/dark'; // Adjust the import path to where your theme is defined

import HeroImage from "./ui/hero-image";
import ComingSoon from './ui/coming-soon';


export default function Home() {
  return (
    <div className="heroImgBg">

    <main className="flex flex-col items-center justify-between p-8">
      <ThemeProvider theme={darkTheme}>
        {/* <HeroImage /> */}
          <ComingSoon />
      </ThemeProvider>


    </main>
    </div>

  );
}
