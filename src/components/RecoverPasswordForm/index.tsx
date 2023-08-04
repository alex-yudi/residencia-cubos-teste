import { ContainerForm } from "../ContainerForm";
import {InputForm} from './styles'

import { zodResolver } from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import * as z from 'zod'

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

    const titleText = () => {
        return (
            <>
                Recupere o acesso ao <strong>login</strong> <br/>com o e-mail cadastrado
            </>
        )
    }

    return (
        <ContainerForm
            title={titleText()}
            buttonText='Enviar'
            handleSubmitComponent={handleSubmit((data: RecoverPasswordInput) => {console.log(data); reset()})}
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