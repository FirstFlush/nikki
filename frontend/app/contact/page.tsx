import StyledCard from "../components/styled-card"
import { Typography, Box } from "@mui/material";


const Contact:React.FC = () => {

    return (
        <Box className="flex flex-col items-center">
            <StyledCard title="Contact">
                <Box>
                    For all inquiries related to the Nikki Racing project, please don't hesitate to reach out to us at 
                    <Box sx={{margin:'1rem 0', textAlign:'center'}}>
                        <Typography sx={{
                            letterSpacing: '2px',
                            color: '#007bff',
                            // fontSize: '14px',
                            textAlign: 'center'
                    }}>
                        foo@bar.ca</Typography>
                    </Box>
                    Whether you have questions, suggestions, or just want to express your support, we're eager to hear from you. Your interest and feedback are what drive this project forward. Thank you for your support!
                </Box>
            </StyledCard>
        </Box>

    )
}

export default Contact;