import styled from 'styled-components'

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;

    min-width: 55rem;
    height: 1.6875rem;
    padding: 0.438rem 13.5rem;
    margin-top: 0.625rem;
    border-radius: 0.5rem;


    background: ${(props) => props.theme['footerColor']};

    font-size: 0.75rem;
    line-height: normal;
`

export const LinkFooter = styled.a`
    text-align: center;
    font-size: 0.75rem;
    font-style: normal;
    line-height: normal;

    color: ${(props) => props.theme['linkFontColor']};

    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`