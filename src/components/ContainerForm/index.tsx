import { zodResolver } from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import * as z from 'zod'
import { FormContainer, FormTitle,ContainerInputs, InputForm, LinkForgotPassword, Button } from './style'

const loginFormSchema = z.object({
    email: z.string().trim().toLowerCase(),
    password: z.string()
})

type LoginFormInputs = z.infer<typeof loginFormSchema>

export function ContainerForm() {
    const {
        reset, 
        register,
        handleSubmit
        } = useForm<LoginFormInputs>({
                resolver: zodResolver(loginFormSchema)
             })

    const handleDoLogin = (data: LoginFormInputs) => {
        console.log('Deu certo')
    } 

    return(
        <FormContainer onSubmit={handleSubmit(handleDoLogin)}>
            <FormTitle>
            Acesse o login <br/>
            com seu usuário do Github
            </FormTitle>

            <ContainerInputs>
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
            </ContainerInputs>

            <Button type="submit">
                Login
            </Button>
        </FormContainer>
    )
}