import { SubmitHandler, useForm } from "react-hook-form";
import { Button, InputContainer, InputField, InputLabel } from "../../utils/styles"
import styles from './index.module.scss'
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
                {errors.email && <span>Email is required</span>}
            </InputContainer>
            <InputContainer>
                <InputLabel htmlFor="Password">Password</InputLabel>
                <InputField {...register('password', { required: true, minLength: 8, maxLength: 30 })} type="password" id="Password" />
                {errors.password && <span>Password is required, minimun is 8 and Maximum is 30 </span>}

            </InputContainer>

            <Button type="submit">
                Login
            </Button>
        </form>
    )
}


