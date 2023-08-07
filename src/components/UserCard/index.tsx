import { ContainerUserCard, ContainerUserInfo, ContainerUserName, ContainerUserOrganizations, UserDescription, UserImg, UserName, UserOrganizationsTitle } from './styles'

import { UserInfo } from './components/UserInfo'
import workIcon from '../../assets/building.svg'
import localIcon from '../../assets/pin.svg'
import emailIcon from '../../assets/email.svg'
import linkIcon from '../../assets/url.svg'
import twitterIcon from '../../assets/twitter.svg'
import CubosIcon from '../../assets/cubos.svg'
import OmniIcon from '../../assets/omni.svg'

export function UserCard () {
  return (
        <ContainerUserCard>
            <UserImg
                src='https://avatars.githubusercontent.com/u/94754085?v=4'
            />

            <ContainerUserName>
                <UserName>
                    Vander Lima
                </UserName>
                <UserDescription>
                    Front-end Developer
                </UserDescription>
            </ContainerUserName>

            <ContainerUserInfo>
                <UserInfo
                    icon={workIcon}
                    name='@cubos-academy'
                />
                <UserInfo
                    icon={localIcon}
                    name='Fortaleza-Ce'
                />
                <UserInfo
                    icon={emailIcon}
                    name='vnd.vander@gmail.com'
                />
                <UserInfo
                    icon={linkIcon}
                    name='https://cubos.academy'
                />
                <UserInfo
                    icon={twitterIcon}
                    name='@vander_1'
                />
            </ContainerUserInfo>

            <ContainerUserOrganizations>
                <UserOrganizationsTitle>
                    Organizações
                </UserOrganizationsTitle>

                <UserInfo
                    icon={CubosIcon}
                    name='Cubos Academy'
                />
                <UserInfo
                    icon={OmniIcon}
                    name='Aracati Digital'
                />

            </ContainerUserOrganizations>

        </ContainerUserCard>
  )
}
