import styled from 'styled-components'

export const ContainerUserCard = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 13rem;
    height: 34.0625rem;
    border-radius: 0.5rem;
    padding: 0 0.5rem;

    background-color: ${props => props.theme.primaryBgCards};
    color: ${props => props.theme.linkFontColor}
`

export const UserImg = styled.img`
    width: 8.46006rem;
    height: 8.125rem;

    border-radius: 9.8125rem;
`

export const ContainerUserName = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    margin-top: 1.13rem;
`
export const UserName = styled.h1`
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
`
export const UserDescription = styled.h2`
    color: #999;
    font-size: 0.75rem;
    font-weight: 400;
    line-height:  1.009rem
`

export const ContainerUserInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    width: 100%;

    margin-top: 1rem;
`

export const ContainerUserOrganizations = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    width: 100%;

    margin-top: 1.81rem;
`

export const UserOrganizationsTitle = styled.span`
    margin-bottom: 1rem;

    font-size: 1rem;
    font-weight: 700;
    
    color: #999;
`
