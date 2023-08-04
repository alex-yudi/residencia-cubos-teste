import styled from 'styled-components'

export const InputForm = styled.input`
    width: 13.0625rem;
    height: 2rem;
    padding-left: 1rem;
    margin-bottom: 0.5rem;

    border-radius: 0.5rem;
    border: 1px solid #C5C6CA;

    &::placeholder {
        color: #999;
        font-size: 0.75rem;
    }
`

export const LinkForgotPassword = styled.a`
    font-size: 0.6rem;
    color: #2E7BB4;
    margin-bottom: 0.3rem;

    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`
