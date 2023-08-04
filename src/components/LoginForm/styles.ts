import styled from 'styled-components'

export const InputForm = styled.input`
    width: 13.0625rem;
    height: 2rem;
    padding-left: 1rem;
    margin-bottom: 0.81rem;

    border-radius: 0.5rem;
    border: 1px solid #C5C6CA;

    &::placeholder {
        color: #999;
        font-size: 0.75rem;
    }
`

export const LinkForgotPassword = styled.a`
    font-size: 0.5625rem;
    color: #2E7BB4;

    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`
