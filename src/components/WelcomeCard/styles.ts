import styled from 'styled-components'

export const ContainerWelcomeCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 38.625rem;
    height: 11.75rem;

    padding: 1.5rem;
    border-radius: 0.5rem;

    background-color: ${(props) => props.theme.primaryBgCards};
`

export const TitleWelcomeCard = styled.h1`
    color: #333;
    font-size: 1.75rem;
    font-weight: 400;
`

export const PhraseOfLuck = styled.span`
    color: #999;
    font-size: 0.75rem;
`

export const ContainerUserDataInfo = styled.div`
    display: flex;
    justify-content: space-between;

    width: 25rem;
`

export const UserDataCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    width: 4.5rem;
    height: 2rem;
    padding-right: 0px;
    
    gap: 0.1875rem;
`
export const UserDataInfoTitle = styled.span`
    color: #5A5A5A;
    font-family: Rubik;
    font-size: 0.75rem;
    font-style: italic;
    font-weight: 400;
    line-height: normal;
`

export const UserDataInfoContainerValues = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
`

export const UserDataInfoContainerValuesImg = styled.img`
    margin-right: 0.1rem;
`

export const UserDataInfoValues = styled.span`
    color: ${props => props.theme.linkFontColor};
    font-family: Rubik;
    font-size: 0.875rem;
    font-style: italic;
    font-weight: 400;
    line-height: normal;

    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`
