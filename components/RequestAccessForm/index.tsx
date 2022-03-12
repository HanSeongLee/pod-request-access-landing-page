import React from 'react';
import styles from './style.module.scss';
import Input from "../Input";
import Button from "../Button";
import {Controller, SubmitHandler, useForm} from "react-hook-form";

type IFormInput = {
    email: string;
};

type IProps = {
    onSubmit: SubmitHandler<IFormInput>;
};

const RequestAccessForm: React.FC<IProps> = ({ onSubmit }) => {
    const { control, handleSubmit, formState: { errors } } = useForm<IFormInput>();

    return (
        <form className={styles.requestAccessForm}
              onSubmit={handleSubmit(onSubmit)}
        >
            <Controller name={'email'}
                        control={control}
                        rules={{
                            required: 'This field is required',
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: 'Oops! Please check your email',
                            },
                        }}
                        render={({ field }) => (
                            <Input type={'email'}
                                   placeholder={'Email address'}
                                   error={errors?.email?.message}
                                   {...field}
                            />
                        )}
            />

            <Button type={'submit'}>
                Request Access
            </Button>
        </form>
    );
};

export default RequestAccessForm;
