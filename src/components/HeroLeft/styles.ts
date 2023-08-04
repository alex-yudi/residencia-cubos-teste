import styled from 'styled-components'

export const ContainerHeroLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 46.1875rem;
    height: 23rem;
    margin-right: 0.75rem;

    border-radius: 0.5rem;
    background: #FFF;
`

export const ImgHeroLeft = styled.img`
    width: 9.375rem;
    height: 8.16575rem;

    margin-bottom: 2.65rem;
`

export const ContainerTextHero = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    font-size: 0.75rem;
    font-style: normal;
    line-height: normal;
`

export const HighlightWord = styled.span`
    font-weight: 700;
    color: ${(props) => props.theme['highligthFontColor']}
`