
import { CardContent, Box } from "@mui/material";
import StyledCard from "../components/styled-card";



const About:React.FC = () => {

    return (
        <Box className="flex flex-col items-center">
            <StyledCard title="About Us">
                <CardContent>Welcome to the future of racing with NikkiRacing.com! As EV racing emerges as the forefront of motorsports, we're proud to lead the charge with our innovative approach.</CardContent>
                <CardContent>Our vision is simple: clean, fast, and reliable racing that excites without the drawbacks.</CardContent>
                <CardContent>Say goodbye to the days of noise complaints from race track neighbors and the hassles of blown engines and transmission rebuilds.</CardContent>
                <CardContent>At NikkiRacing.com, we're introducing Nikki, a groundbreaking project utilizing Tesla Model 3 motors and batteries, meticulously engineered to be lighter and more agile than its street car counterpart. With our cutting-edge technology, we've crafted a vehicle that promises unparalleled performance while minimizing environmental impact.</CardContent>
                <CardContent>Safety is paramount, which is why our roll cage structure has been rigorously tested and engineered for maximum protection. Rest assured, our safety measures meet and exceed the standards set by both US and Canadian race sanctioning bodies.</CardContent>
                <CardContent>Join us in shaping the future of motorsports. Contact us today to learn more about Nikki and how you can be a part of the electric revolution on the racetrack!</CardContent>
            </StyledCard>
        </Box>
    )


}


export default About;
