import { Card, CardContent, Typography, Box } from "@mui/material"


interface StyledCardProps {
    title?: string;
    subtitle?: string;
    children: React.ReactNode;
}


const StyledCard:React.FC<StyledCardProps> = ({ title, subtitle, children }) => {


    return (
        <Box>
            <Card
                sx={{
                    filter: 'opacity(0.95)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    maxWidth: '600px',
                    minWidth: '300px',
                    padding: '1rem',
                    margin: '3rem 0',
                    backgroundImage: 'linear-gradient(to bottom, hsl(236, 22%, 15%),hsl(236, 22%, 20%)'
                }}
            
            >
                {title && <CardContent>
                    <Typography 
                        color="text.secondary" 
                        gutterBottom
                        sx={{ 
                            letterSpacing: { xs: '2px', sm: '5px' }, 
                            textAlign: 'center',
                            fontSize: { xs: '1.25rem', sm: '1.5rem' },
                        }}
                    >
                        {title}
                    </Typography>
                    {subtitle && <Typography 
                    sx={{
                        letterSpacing: '2px',
                        color: '#007bff',
                        fontSize: '14px',
                        textAlign: 'center'
                    }}
                    > 
                        {subtitle}
                    </Typography>
                    }
                </CardContent>
                }
                

                <CardContent>
                    <Typography variant="body2">
                        {children}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default StyledCard;