import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box } from "@mui/material";

import ComingSoon from "./components/coming-soon";
import SignUp from "./signup/page";


export default function Home() {


    return (
        <Box component="main" className="flex flex-col items-center">
            {/* <ComingSoon /> */}
            <SignUp />
        </Box>
        
    );
}
