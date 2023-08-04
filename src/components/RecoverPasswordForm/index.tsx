import { ContainerForm } from "../ContainerForm";
import {InputForm} from './styles'

import { zodResolver } from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import * as z from 'zod'

import { useNavigate } from "react-router-dom";

const recoverPasswordSchema = z.object({
    email: z.string()
})

type RecoverPasswordInput = z.infer<typeof recoverPasswordSchema>


export function RecoverPasswordForm() {

    const {
        reset,
        register,
        handleSubmit
        } = useForm<RecoverPasswordInput>({
                resolver: zodResolver(recoverPasswordSchema)
             })
    
    const navigateTo = useNavigate()

    const titleText = () => {
        return (
            <>
                Recupere o acesso ao <strong>login</strong> <br/>com o e-mail cadastrado
            </>
        )
    }

    const handleRecoverPassword = (data: RecoverPasswordInput) => {
        console.log(data); 
        navigateTo('/new-password')
        reset()
    }

    return (
        <ContainerForm
            title={titleText()}
            buttonText='Enviar'
            handleSubmitComponent={handleSubmit(handleRecoverPassword)}
        >
            <InputForm 
                {...register('email')}
                type='email'
                placeholder="Digite seu e-mail"
                required 
            />
        </ContainerForm>
    )
}