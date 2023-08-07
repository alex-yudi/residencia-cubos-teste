import styled from 'styled-components'

export const ContainerSelectAction = styled.div`    
    width: 38.625rem;
    height: 9.0625rem;

    margin-top: 1.95rem;
    padding: 2rem 1.5rem;

    background-color: ${props => props.theme.primaryBgCards};
`
export const SelectActionTitle = styled.h1`
    font-size: 1.125rem;
    font-weight: 400;
`

export const ContainerActionOption = styled.div`
    display: flex;
    width: 100%;
    gap: 0.8rem;
    margin-top: 1.19rem;
    
    text-align: center;

    overflow: hidden;
`

export const ActionOptions = styled.div`
    display: flex;
    padding: 0.5625rem 0.9rem;
    align-items: flex-start;
    border-radius: 0.5rem;
    
    font-size: 0.75rem;

    color: ${props => props.theme.linkFontColor};
    background: #D9E6F6;

    &:hover{
        cursor: pointer;
        color: ${props => props.theme.white100};
        background-color: #6F92BB;
    }
`
