import styled from 'styled-components'

export const ContainerCardFollow = styled.div`
    width: 19.5rem;
    height: 20rem;

    padding: 1rem;
    margin-bottom: 1rem;

    border-radius: 0.5rem;
    background: ${props => props.theme.primaryBgCards};
`

export const ContainerTitleCardFollow = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
`

export const TitleCardFollow = styled.h1`
    margin-right: 0.2rem;

    color: #333;
    font-family: Rubik;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const NumberTitleCardFollow = styled.h1`
    color: #2E7BB4;
    font-family: Rubik;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
export const ContainerImgFollow = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    margin-top: 0.66rem;
`

export const ImgFollow = styled.img`
    width: 5.2105rem;
    height: 6.40463rem;

    margin-top: 0.3rem;
`
export const LinkCardFollow = styled.a`
    display: block;
    margin-top: 1.5rem;

    font-size: 0.875rem;
    font-weight: 700;
    color: ${props => props.theme.linkFontColor};

    &:hover{
        cursor: pointer;
        text-decoration: underline;
    }
`
