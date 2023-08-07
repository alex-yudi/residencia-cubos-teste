import { FormContainer, FormTitle, ContainerInputs, Button } from './style'
import { ReactElement } from 'react'

interface PropsContainerForm {
    title: ReactElement | string;
    buttonText: string;
    children: any;
    handleSubmitComponent: any;
}

export function ContainerForm (props: PropsContainerForm) {
  return (
        <FormContainer onSubmit={props.handleSubmitComponent}>
            <FormTitle>
            {props.title}
            </FormTitle>

            <ContainerInputs>
                {props.children}
            </ContainerInputs>

            <Button type="submit">
                {props.buttonText}
            </Button>
        </FormContainer>
  )
}
