import { ContainerForm } from "../ContainerForm";
import { InputForm, LinkForgotPassword } from "./styles";

import { zodResolver } from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import * as z from 'zod'
import { api } from "../../lib/axios";
import { useNavigate } from "react-router-dom";

const loginFormSchema = z.object({
    githubUser: z.string(),
    password: z.string()
})

type LoginFormInputs = z.infer<typeof loginFormSchema>


export function LoginForm(){

    const {
        reset,
        register,
        handleSubmit
        } = useForm<LoginFormInputs>({
                resolver: zodResolver(loginFormSchema)
             })
    
    const navigateTo = useNavigate()

    const titleText = () => {
        return (
            <>
                Acesse o <strong>login</strong> <br/>com seu usuário do Github
            </>
        )
    }

    const handleSubmitForm = async(data: LoginFormInputs) => {
        try {
            const {githubUser} = data

            const {data: responseApi} = await api.get(`/${githubUser}`);
            
            localStorage.setItem('githubUser', githubUser)

            reset()
        } catch (error:any) {
            if(error.response.data.message === 'Not Found'){
                alert('Usuário informado não encontrado.')
            } else {
                alert('Houve um erro inesperado, por favor tente novamente mais tarde.')
            }
        }
    }

    return(
        <ContainerForm
            title={titleText()}
            buttonText = {'Login'}
            handleSubmitComponent={handleSubmit(handleSubmitForm)}
        >
                
            <InputForm 
                {...register('githubUser')}
                type="text"
                placeholder='Digite seu usuário do Github'
                required 
            />
            <InputForm 
                {...register('password')}
                type="password"
                placeholder='Digite sua senha'
                required 
            />

            <LinkForgotPassword onClick={() => navigateTo('/recover-pass')}>
                Esqueceu a senha?
            </LinkForgotPassword>
                
        </ContainerForm>
    )
}