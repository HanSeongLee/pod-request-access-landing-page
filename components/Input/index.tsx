import React, {InputHTMLAttributes} from "react";
import styles from './style.module.scss';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: string | undefined;
}


const Input: React.FC<IProps> = ({ error, ...props }) => {
    return (
        <div className={styles.inputWrapper}>
            <input className={styles.input}
                   {...props}
            />
            {error && (
                <div className={styles.error}>
                    {error}
                </div>
            )}
        </div>

    );
};

export default Input;
