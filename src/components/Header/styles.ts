import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 3rem;
  padding: 0.44rem 8rem;

  background: ${(props) => props.theme.headerBgColor};
  color: ${(props) => props.theme.headerFontColor};
`

export const LogoImg = styled.img`
  width: 5.5rem;
  height: 2.125rem;
  
  margin-right: 1.5rem;
`

export const HeaderMenu = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
`

export const HeaderMenuItems = styled.li`
  margin: 0 1rem;

  &:hover{
    cursor: pointer;
    text-decoration: underline;
  }

  &:first-of-type{
    font-weight: 700;
  }
`
export const HeaderMenuItemsDivider = styled.div`
  width: 0.05rem;
  height: 0.9rem;

  background: #5292C1;
`

export const HeaderLogoutAndSearch = styled.div`
  display: flex;
  align-items: center;
`
export const LogoutLink = styled.a`
  margin: 0 1rem;

  &:hover{
    cursor: pointer;
    text-decoration: underline;
  }
`
export const ContainerSearchBox = styled.div`
  display: flex;
  align-items: center;

  width: 13rem;
  height: 2.125rem;
  padding: 0.1rem 1rem;

  border-radius: 2.125rem;

  color: ${(props) => props.theme.headerFontColor};
  background: #5579A1;
`

export const InputSearchBox = styled.input`
  all: unset;

  width: 8rem;
  margin-left: 0.5rem;
  margin-right: 0.8rem;

  font-size: 0.8rem;
  color: ${(props) => props.theme.headerFontColor};
  background: #5579A1;

  &::placeholder{
    font-size: 0.8rem;
    color: ${(props) => props.theme.headerFontColor};
  }
`
