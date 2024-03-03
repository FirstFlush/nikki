
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SubscribeForm from "./subscribe-form";
import styles from "./coming-soon.module.css";


export default function ComingSoon() {
    return (
        <Card className={styles.box}>
            <CardContent>
                <h1 className={styles.titleFont}>NIKKI RACING</h1>
            </CardContent>
            <CardContent>
                The future of racing
            </CardContent>
            <CardContent style={{width:'100%'}}>
                <SubscribeForm />
            </CardContent>
        </Card>
    )
}