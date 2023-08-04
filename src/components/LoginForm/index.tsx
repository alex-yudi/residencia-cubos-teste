import { ContainerForm } from "../ContainerForm";
import { InputForm, LinkForgotPassword } from "./styles";

import { zodResolver } from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import * as z from 'zod'

const loginFormSchema = z.object({
    email: z.string().trim().toLowerCase(),
    password: z.string()
})

type LoginFormInputs = z.infer<typeof loginFormSchema>



export function LoginForm(){

    const {
        register,
        handleSubmit
        } = useForm<LoginFormInputs>({
                resolver: zodResolver(loginFormSchema)
             })

    const titleText = () => {
        return (
            <>
                Acesse o <strong>login</strong> <br/>com seu usuário do Github
            </>
        )
    }

    return(
        <>
            <ContainerForm
                title={titleText()}
                buttonText = {'Login'}
                handleSubmitComponent={handleSubmit((data: LoginFormInputs) => {console.log(data)})}
            >
                
                    <InputForm 
                        {...register('email')}
                        type="text"
                        placeholder='Digite seu e-mail'
                        required 
                    />
                    <InputForm 
                        {...register('password')}
                        type="password"
                        placeholder='Digite sua senha'
                        required 
                    />

                    <LinkForgotPassword>
                        Esqueceu a senha?
                    </LinkForgotPassword>
                
            </ContainerForm>
        </>
    )
}