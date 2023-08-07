import styled from 'styled-components'

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    min-width: 23rem;
    height: 23rem;

    border-radius: 0.5rem;
    background: ${(props) => props.theme.bgForm};

    @media(max-width: 1180px) {
        min-width: 45%;
    }

    @media(max-width: 490px) {
        width: 21.5625rem;
        height: 22.875rem;
    }
`
export const FormTitle = styled.p`
    margin-top: 2rem;
    margin-bottom: 1rem;

    text-align: center;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  
    color: ${(props) => props.theme.titleFormColor};
`

export const ContainerInputs = styled.div`
    display: flex;
    flex-direction: column;

    margin-bottom: 0.5rem;
`

export const Button = styled.button`
    display: flex;
    width: 13.0625rem;
    height: 2.0625rem;
    padding: 0.1875rem 0.6875rem;
    justify-content: center;
    align-items: center;

    border-radius: 0.5rem;
    border: 1px solid #2E7BB4;
    background: #2E7BB4;
    color: #fff;

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`
