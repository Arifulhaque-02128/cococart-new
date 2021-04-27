import React from 'react';
import { useForm } from 'react-hook-form'
import styles from './SignInAndSignUp.module.css';
import TextField from '@material-ui/core/TextField';

const SignIn = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        console.log(data)
        e.target.reset()
    };
    return (
        <div className={styles.container}>
            <div>
                <h1>Login</h1>
                <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
                    <TextField className={styles.textField} type="email" {...register("email", { required: true })} label="Email" />
                    {errors.email && <span className={styles.requiredMsg}>This field is required</span>} <br/> 
                    <TextField className={styles.textField} type="password" label="Password" {...register("password", { required: true })} />
                    {/* <input type="password" {...register("password", { required: true })} /> */}
                    {errors.password && <span className={styles.requiredMsg}>This field is required</span>}

                    <p className={styles.forgotPW}>forget password?</p> <br/>

                    <input className={styles.loginBtn} type="submit" value="LOG IN"/>
                </form>
            </div>
        </div>
    );
};

export default SignIn;