import styled from 'styled-components'

export const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;

    min-width: 100%;
    min-height: 100vh;
    padding: 13rem 9.5rem;

    background: ${props => props.theme.bgPage};
    color: ${props => props.theme.primaryFontColor};

    @media(max-width: 420px) {
        padding: 0.94rem;
    }
`

export const BodyContainer = styled.div`
    display: flex;

    @media(max-width: 490px) {
        flex-direction: column;
    }
`
