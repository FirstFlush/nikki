import StyledCard from "../components/styled-card"
import { Typography, Box, CardContent } from "@mui/material";


const Contact:React.FC = () => {

    return (
        <Box className="flex flex-col items-center">
            <StyledCard title="Contact">
                <Box>
                    <Typography>
                        For all inquiries related to the Nikki Racing project, please don't hesitate to reach out to us.
                    </Typography>
                    <Box sx={{margin:'1rem 0', textAlign:'center'}}>
                        <Typography sx={{
                            letterSpacing: '2px',
                            color: '#007bff',
                            // fontSize: '14px',
                            textAlign: 'center'
                        }}>
                            speedfanatics@hotmail.com
                        </Typography>
                    </Box>
                    <Typography>
                        Whether you have questions, suggestions, or just want to express your support, we're eager to hear from you. Your interest and feedback are what drive this project forward. Thank you for your support!
                    </Typography>
                </Box>
            </StyledCard>
        </Box>

    )
}

export default Contact;