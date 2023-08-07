import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { HeaderContainer} from './styles'

export function Header() {
  return (
  <HeaderContainer>
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">

        <NavigationMenu.Item>
           <NavigationMenu.Link className="NavigationMenuLink" href="https://github.com/radix-ui">
            Github
           </NavigationMenu.Link>
        </NavigationMenu.Item>

      </NavigationMenu.List>
    </NavigationMenu.Root>
  </HeaderContainer>
  )
}
