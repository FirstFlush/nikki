import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from '../theme/dark'; // Adjust the import path to where your theme is defined
import ComingSoon from './components/coming-soon';
import { NavBar } from './components/navbar';

export default function Home() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div>
        

        <NavBar />
        <div className="heroImgBg">

          <main className="flex flex-col items-center justify-between p-8">
                <ComingSoon />

          </main>
        </div>
      </div>
    </ThemeProvider>

  );
}
