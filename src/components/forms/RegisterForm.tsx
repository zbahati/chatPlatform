import { SubmitHandler, useForm } from "react-hook-form";
import { Button, InputContainer, InputField, InputLabel } from "../../utils/styles"
import styles from './index.module.scss'
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
                {errors.email && <span>Email is required</span>}
            </InputContainer>

            <section className={styles.formFieldRow}>
                <InputContainer>
                    <InputLabel htmlFor="Firstname">First Name</InputLabel>
                    <InputField {...register('firstname', {required: true, minLength: 3})} type="text" id="Firstname" />
                    {errors.firstname && <span>First name is required and minimun is 3</span>}
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="Lastname">Last Name</InputLabel>
                    <InputField {...register('lastname', {required: true, minLength: 3})} type="text" id="Lastname" />
                    {errors.lastname && <span>Last name is required and minimun is 3</span>}
                </InputContainer>
            </section>
            <InputContainer>
                <InputLabel htmlFor="Password">Password</InputLabel>
                <InputField {...register('password',{required: true, minLength: 8, maxLength: 30})} type="password" id="Password" />
                {errors.password && <span>Password is required, minimun is 8 and Maximum is 30 </span>}

            </InputContainer>

            <Button type="submit">
                Create account
            </Button>
        </form>
    )
}


