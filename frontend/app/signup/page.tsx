'use client';
import CardContent from '@mui/material/CardContent';
import { Box, Typography } from '@mui/material';
import SubscribeForm from '../components/subscribe-form';
import StyledCard from '../components/styled-card';
import { useAuth } from '../auth/auth-context';


export default function SignUp() {

    const { auth } = useAuth();

    return (
        <Box className="flex flex-col items-center">
            <StyledCard title="Sign Up" subtitle="The future of racing" >
                {auth.token? (
                    <CardContent>Thank you for signing up!</CardContent>
                    ) : (
                    <>
                        <CardContent>
                            <CardContent>
                                Subscribe to receive key updates on the Nikki Racing build process, including insights on parts selection and more.
                            </CardContent>
                            <CardContent>
                                To sign up simply fill out the form below and complete your registration by sending a $15 Interac e-transfer to <Typography component="span" fontWeight="bold">speedfanatics@hotmail.com</Typography> 
                            </CardContent>
        
                            <CardContent>Start your engines and join us on this adventure!</CardContent>
                        </CardContent>
                        <CardContent style={{width:'100%'}}>
                            <SubscribeForm />
                        </CardContent>
                    </>
                    ) 
                }

            </StyledCard>
        </Box>
    )



    // return (
    //     <Card className='box'>
    //         <CardContent sx={{ 
    //             letterSpacing: { xs: '2px', sm: '5px' }, 
    //             textAlign: 'center',
    //             fontSize: { xs: '1.25rem', sm: '1.5rem' },
    //         }}
    //         >
    //             {/* <h1 className="titleFont">NIKKI RACING</h1> */}
    //             <h2>SIGN UP</h2>
    //             <CardContent 
    //                 sx={{
    //                     letterSpacing: '2px',
    //                     color: '#007bff',
    //                     fontSize: '14px',
    //                     textAlign: 'center'
    //                 }}
    //             > 
    //                 The future of racing
    //             </CardContent>
    //         </CardContent>

    //         <CardContent>
    //             <div>Subscribe to receive key updates on the Nikki Racing build process, including insights on parts selection and more.</div>
    //         </CardContent>
    //         <CardContent style={{width:'100%'}}>
    //             <SubscribeForm />
    //         </CardContent>
    //         <CardContent sx={{fontStyle: 'italic', fontSize:'80%', textAlign: 'center'}}>
    //             This site is currently under construction.
    //         </CardContent>
    //     </Card>
    // )


}