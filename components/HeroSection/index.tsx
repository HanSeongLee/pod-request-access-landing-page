import React from "react";
import styles from './style.module.scss';
import Container from "../Container";
import PartnerContainer from "../../containers/PartnerContainer";
import RequestAccessContainer from "../../containers/RequestAccessContainer";

const HeroSection: React.FC = () => {
    return (
        <section className={styles.heroSection}>
            <Container className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>
                    <span className={styles.highlight}>
                        Publish your podcasts
                    </span>
                        everywhere.
                    </h2>
                    <p className={styles.description}>
                        Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify,
                        Apple Podcasts, Google Podcasts, Pocket Casts and more!
                    </p>

                    <div className={styles.bottomContainer}>
                        <PartnerContainer className={styles.partnerContainer}/>
                        <RequestAccessContainer className={styles.requestAccessContainer} />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default HeroSection;
