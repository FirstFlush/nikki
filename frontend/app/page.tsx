import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import HeroImage from "./ui/hero-image";
import ComingSoon from './ui/coming-soon';


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-12">
      <HeroImage />
      <ComingSoon />



    </main>
  );
}
