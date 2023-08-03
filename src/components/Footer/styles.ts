import styled from 'styled-components'

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    align-self: center;

    width: 1110px;
    height: 27px;
    padding: 7px 216px;
    border-radius: 8px;


    background: ${(props) => props.theme['footerColor']};

    text-align: center;
    font-family: Rubik;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const LinkFooter = styled.a`
    text-align: center;
    font-family: Rubik;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    color: ${(props) => props.theme['linkFontColor']};

    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`