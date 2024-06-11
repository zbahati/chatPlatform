import { SubmitHandler, useForm } from "react-hook-form";
import { Button, InputContainer, InputField, InputLabel } from "../../utils/styles"
import styles from './index.module.scss'
import { Link } from "react-router-dom";
export const RegisterForm = () => {

    interface IFormInput {
        email: string;
        firstname: string;
        lastname: string;
        password: string;
    }

    const {register , handleSubmit, formState: {errors}} = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
     console.log(data)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <InputContainer>
                <InputLabel htmlFor="email">Email</InputLabel>
                <InputField {...register('email', {required: true}) }type="email" id="email" />
                {errors.email && <span className={styles.spanMessage}>Email is required</span>}
            </InputContainer>

            <section className={styles.formFieldRow}>
                <InputContainer>
                    <InputLabel htmlFor="Firstname">First Name</InputLabel>
                    <InputField {...register('firstname', {required: true, minLength: 3})} type="text" id="Firstname" />
                    {errors.firstname && <span className={styles.spanMessage}>First name is required and minimun is 3</span>}
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="Lastname">Last Name</InputLabel>
                    <InputField {...register('lastname', {required: true, minLength: 3})} type="text" id="Lastname" />
                    {errors.lastname && <span className={styles.spanMessage}>Last name is required and minimun is 3</span>}
                </InputContainer>
            </section>
            <InputContainer>
                <InputLabel htmlFor="Password">Password</InputLabel>
                <InputField {...register('password',{required: true, minLength: 8, maxLength: 30})} type="password" id="Password" />
                {errors.password && <span className={styles.spanMessage}>Password is required, minimun is 8 and Maximum is 30 </span>}

            </InputContainer>

            <Button type="submit">
                Create account
            </Button>
            <div className={styles.existingUser}>
                <span>Already have any account? if yes, </span>
                <Link to='/login' className={styles.loginLink}>
                    <span>Login</span>
                </Link>
            </div>
        </form>
    )
}


