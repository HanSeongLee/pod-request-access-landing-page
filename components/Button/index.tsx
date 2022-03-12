import React, {ButtonHTMLAttributes} from "react";
import styles from './style.module.scss';

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
    return (
        <button className={styles.button}
                {...props}
        >
            {children}
        </button>
    );
};

export default Button;
