import { UserInfoLine, IconUserInfo } from './styles'

interface PropsUserInfo {
    name: string;
    icon: string
}

export function UserInfo ({ name, icon }:PropsUserInfo) {
  return (
    <UserInfoLine>
        <IconUserInfo
            src={icon}
        />
        {name}
    </UserInfoLine>
  )
}
