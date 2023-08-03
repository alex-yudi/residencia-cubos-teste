import {FooterContainer, LinkFooter} from './styles'

export function Footer() {
    return (
        <FooterContainer>
            © 2022 Login - &nbsp; 
            <LinkFooter> Sobre o login </LinkFooter>
            &nbsp;-&nbsp;
            <LinkFooter> Centro de segurança </LinkFooter>
            &nbsp;-&nbsp;
            <LinkFooter> Termos </LinkFooter>
            &nbsp;-&nbsp;
            <LinkFooter> Contato </LinkFooter>
        </FooterContainer>
    )
}