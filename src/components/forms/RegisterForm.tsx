import { Button, InputContainer, InputField, InputLabel } from "../../utils/styles"
import styles from './index.module.scss'
export const RegisterForm = () => {
    return (
        <form className={styles.form}>
            <InputContainer>
                <InputLabel htmlFor="email">Email</InputLabel>
                <InputField type="email" id="email" />
            </InputContainer>

            <section className={styles.formFieldRow}>
                <InputContainer>
                    <InputLabel htmlFor="Firstname">First Name</InputLabel>
                    <InputField type="text" id="Firstname" />
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="Lastname">Last Name</InputLabel>
                    <InputField type="text" id="Lastname" />
                </InputContainer>
            </section>
            <InputContainer>
                <InputLabel htmlFor="Password">Password</InputLabel>
                <InputField type="password" id="Password" />
            </InputContainer>

            <Button type="submit">
                Create account
            </Button>
        </form>
    )
}


