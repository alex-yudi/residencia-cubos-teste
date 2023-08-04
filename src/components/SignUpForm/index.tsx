import { ContainerForm } from "../ContainerForm";
import {InputForm} from './styles'

import { zodResolver } from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import * as z from 'zod'

const signUpSchema = z.object({
    email: z.string().trim().toLowerCase(),
    password: z.string(),
    passwordConfirmation: z.string(),
    githubUser: z.string(),
    nickname: z.string()
}).required()

type SignUpFormInputs = z.infer<typeof signUpSchema>


export function SignUpForm() {

    const {
        reset,
        register,
        handleSubmit
        } = useForm<SignUpFormInputs>({
                resolver: zodResolver(signUpSchema)
             })

    const titleText = () => {
        return (
            <>
                Acesse o <strong>login</strong> <br/>com seu usuário do Github
            </>
        )
    }

    return(
        <ContainerForm
            title={titleText()}
            buttonText = {'Cadastrar'}
            handleSubmitComponent={handleSubmit((data: SignUpFormInputs) => {console.log(data); reset()})}
        >

            <InputForm 
                {...register('email')}
                type='email'
                placeholder="Digite seu e-mail"
                required 
            />

            <InputForm 
                {...register('password')}
                type='password'
                placeholder="Digite sua senha"
                required 
            />

            <InputForm 
                {...register('passwordConfirmation')}
                type='password'
                placeholder="Repita sua senha"
                required 
            />

            <InputForm 
                {...register('githubUser')}
                type='text'
                placeholder="Digite seu usuário Github"
                required 
            />

            <InputForm 
                {...register('nickname')}
                type='text'
                placeholder="Digite seu apelido"
                required 
            />
        
        </ContainerForm>
    )
}