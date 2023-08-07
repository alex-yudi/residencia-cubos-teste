import styled from 'styled-components'

export const RepositoryInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 35.8125rem;
    height: 3.94rem;
    
    border-bottom: 0.0625rem solid #f4f4f4;
    
    background-color: ${props => props.theme.bgPage};
    &:first-of-type{
        border-radius: 0.5rem 0.5rem 0 0;
    }
    &:last-of-type{
        border-radius: 0 0 0.5rem 0.5rem;
    }
`

export const ContainerRepositoryInfoValues = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 1rem;
`
export const IconImg = styled.img`

`

export const NameRepository = styled.span`
    display: flex;
    align-items: center;

    margin-bottom: 0.25rem;

    font-size: 0.75rem;
    font-weight: 700;
    text-align: center;
    color: ${props => props.theme.linkFontColor};

    &:hover{
        cursor: pointer;
        text-decoration: underline;
    }
`
export const DescriptionRepository = styled.span`
    font-size: 0.7rem;
    font-weight: 400;
    color: #999;
`

export const FavoriteRepositorie = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    width: 4rem;
    height: 1.625rem;
    
    padding: 0.19rem;
    margin-right: 1rem;
    border-radius: 0.5rem;
    
    font-size: 0.75rem;
    font-weight: 400;
    
    background: #6F92BB;
    color: #FFF;

    &:hover{
        cursor: pointer;
        opacity: 0.9;
    }
`
