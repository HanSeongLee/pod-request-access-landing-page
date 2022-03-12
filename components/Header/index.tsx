import React from "react";
import styles from './style.module.scss';
import Container from "../Container";
import Logo from "../Logo";

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <Container className={styles.container}>
                <h1>
                    <Logo/>
                </h1>
            </Container>
        </header>
    );
};

export default Header;
