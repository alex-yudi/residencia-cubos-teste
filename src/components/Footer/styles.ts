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

    @media(min-width: 421px) and (max-width: 1180px) {
        min-width: 30rem;
        padding: 0.438rem 1rem;
    }

    @media(min-width: 1181px){
        max-width: 70rem;
    } 

    @media(max-width: 490px) {
        flex-wrap: wrap;

        min-width: 17rem;
        max-width: 22rem;
        height: 3.5rem;
        padding: 0.438rem 1rem;
        margin-bottom: 5rem;
    } 
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