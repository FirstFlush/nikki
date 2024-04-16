import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/material';
import SignInForm from '../components/signin-form';
import StyledCard from '../components/styled-card';
// import dynamic from 'next/dynamic';


// const SignInForm = dynamic(() => import('../components/signin-form'), { ssr: false });


const SignIn:React.FC = () => {

    return (
        <Box className="flex flex-col items-center">
            <StyledCard title="Sign In" subtitle="Enter your login details below" >
                <CardContent style={{width:'100%'}}>
                    <SignInForm />
                </CardContent>
            </StyledCard>
        </Box>
    )
}

export default SignIn;