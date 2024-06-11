import { SubmitHandler, useForm } from "react-hook-form";
import { Button, InputContainer, InputField, InputLabel } from "../../utils/styles"
import styles from './index.module.scss'
import { Link } from "react-router-dom";
export const LoginForm = () => {

    interface IFormInput {
        email: string;
        password: string;
    }

    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <InputContainer>
                <InputLabel htmlFor="email">Email</InputLabel>
                <InputField {...register('email', { required: true })} type="email" id="email" />
                {errors.email && <span className={styles.spanMessage}>Email is required</span>}
            </InputContainer>
            <InputContainer>
                <InputLabel htmlFor="Password">Password</InputLabel>
                <InputField {...register('password', { required: true, minLength: 8, maxLength: 30 })} type="password" id="Password" />
                {errors.password && <span className={styles.spanMessage}>Password is required, minimun is 8 and Maximum is 30 </span>}

            </InputContainer>
            <Button type="submit">
                Login
            </Button>
            <div className={styles.existingUser}>
                <span>Already have any account? if no,</span>
                <Link to='/register' className={styles.loginLink}>
                    <span>create an account</span>
                </Link>
            </div>
        </form>
    )
}


