import Image from "next/image";
import styles from './hero-image.module.css';


export default function HeroImage() {
    const imgPath = "/images/hero.jpg";

    return (

        <div className={styles.bleh}>
            <Image
                src={imgPath}
                alt="Nikki Racing coming soon"
                className={styles.heroImg}
                fill={true}

            />
        </div>
    );
}
