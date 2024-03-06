
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SubscribeForm from "./subscribe-form";
import styles from "./coming-soon.module.css";


export default function ComingSoon() {
    return (
        <Card className={styles.box}>
            <CardContent sx={{ 
                letterSpacing: { xs: '2px', sm: '5px' }, 
                textAlign: 'center',
                fontSize: { xs: '1.25rem', sm: '1.5rem' },
            }}
            >
                {/* <h1 className="titleFont">NIKKI RACING</h1> */}
                <h2>COMING SOON</h2>
                <CardContent 
                    sx={{
                        letterSpacing: '2px',
                        color: '#007bff',
                        fontSize: '14px',
                        textAlign: 'center'
                    }}
                > 
                    The future of racing
                </CardContent>
            </CardContent>

            <CardContent>
                <div>Subscribe to receive key updates on the Nikki Racing build process, including insights on parts selection and more.</div>
            </CardContent>
            <CardContent style={{width:'100%'}}>
                <SubscribeForm />
            </CardContent>
            <CardContent sx={{fontStyle: 'italic', fontSize:'80%', textAlign: 'center'}}>
                This site is currently under construction.
            </CardContent>
        </Card>
    )
}