import { ContainerHeroLeft, ContainerTextHero,ImgHeroLeft, HighlightWord } from "./styles"
import avatarHeroLeft from '../../assets/avatar-hero-left.svg'

export function HeroLeft () {
    return(
        <ContainerHeroLeft>
            <ImgHeroLeft src={avatarHeroLeft} alt="Desenho de pessoa mexendo em um computador." />

            <ContainerTextHero>
                <p>
                    <HighlightWord>
                        Siga
                    </HighlightWord> amigos e outros devs do seu interesse usando o botão seguir    
                </p>
                <p>
                    <HighlightWord>
                        Conheça
                    </HighlightWord> novos devs e repositórios através da aba explorar
                </p>
                <p>
                    <HighlightWord>
                        Compartilhe
                    </HighlightWord> ideias e soluções em um só lugar
                </p>
            </ContainerTextHero>
        </ContainerHeroLeft>
    )
}