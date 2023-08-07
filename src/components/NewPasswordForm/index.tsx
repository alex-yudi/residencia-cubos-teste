import { ContainerForm } from '../ContainerForm'
import { InputForm } from './styles'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { useNavigate } from 'react-router-dom'

const newPasswordSchema = z.object({
  password: z.string(),
  passwordConfirmation: z.string()
}).required()

type NewPasswordFormInputs = z.infer<typeof newPasswordSchema>

export function NewPasswordForm () {
  const {
    reset,
    register,
    handleSubmit
  } = useForm<NewPasswordFormInputs>({
    resolver: zodResolver(newPasswordSchema)
  })

  const navigateTo = useNavigate()

  const titleText = () => {
    return (
            <>
                Cadastre uma nova senha
            </>
    )
  }

  const handleNewPassword = (data: NewPasswordFormInputs) => {
    console.log(data)
    navigateTo('/login')
    reset()
  }

  return (
        <ContainerForm
            title={titleText()}
            buttonText = 'Login'
            handleSubmitComponent={handleSubmit(handleNewPassword)}
        >

            <InputForm
                {...register('password')}
                type='password'
                placeholder="Digite a nova senha"
                required
            />

            <InputForm
                {...register('passwordConfirmation')}
                type='password'
                placeholder="Repita a nova senha"
                required
            />

        </ContainerForm>
  )
}
