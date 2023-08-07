import {
  HeaderContainer,
  LogoImg,
  HeaderMenu,
  HeaderMenuItems,
  HeaderMenuItemsDivider,
  HeaderLogoutAndSearch,
  LogoutLink,
  ContainerSearchBox,
  InputSearchBox
} from './styles'

import logo from '../../assets/logo.svg'

import { MagnifyingGlass } from 'phosphor-react'

export function Header () {
  return (
  <HeaderContainer>

    <HeaderMenu>
      <LogoImg src={logo} alt="Logo da Rede Social" />

      <HeaderMenuItems>
        Início
      </HeaderMenuItems>

      <HeaderMenuItemsDivider/>

      <HeaderMenuItems>
        Pull Requests
      </HeaderMenuItems>

      <HeaderMenuItemsDivider/>

      <HeaderMenuItems>
        Issues
      </HeaderMenuItems>

      <HeaderMenuItemsDivider/>

      <HeaderMenuItems>
        Marketplace
      </HeaderMenuItems>

      <HeaderMenuItemsDivider/>

      <HeaderMenuItems>
        Explore
      </HeaderMenuItems>

    </HeaderMenu>

    <HeaderLogoutAndSearch>

      <HeaderMenuItemsDivider/>

      <LogoutLink>
        Sair
      </LogoutLink>

      <ContainerSearchBox>
        <MagnifyingGlass size={19}/>
        <InputSearchBox
          placeholder='Pesquisar no Login'
        />
      </ContainerSearchBox>
    </HeaderLogoutAndSearch>

  </HeaderContainer>
  )
}
