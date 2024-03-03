
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SubscribeForm from "./subscribe-form";
import styles from "./coming-soon.module.css";


export default function ComingSoon() {
    return (
        <Card className={styles.box}>
            <CardContent>
                <h1 className={styles.titleFont}>NIKKI RACING</h1>
                <div className={styles.subtitle}> The future of racing</div>
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