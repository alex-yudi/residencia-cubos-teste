import { ContainerWelcomeCard, TitleWelcomeCard, PhraseOfLuck, ContainerUserDataInfo, UserDataCard, UserDataInfoTitle, UserDataInfoContainerValues, UserDataInfoContainerValuesImg, UserDataInfoValues } from './styles'

import repoIcon from '../../assets/repo-icon.svg'
import starIcon from '../../assets/star-icon.svg'
import followersIcon from '../../assets/followers-icon.svg'
import followingIcon from '../../assets/following-icon.svg'

export function WelcomeCard () {
  return (
        <ContainerWelcomeCard>
            <TitleWelcomeCard>
                Bem vindo(a), Jandinho
            </TitleWelcomeCard>

            <PhraseOfLuck>
            <strong>Sorte de hoje:</strong> Cada sonho que você deixa pra trás, é um pedaço do seu futuro que deixa de existir.
            </PhraseOfLuck>

            <ContainerUserDataInfo>
                <UserDataCard>
                    <UserDataInfoTitle>
                        Repositórios
                    </UserDataInfoTitle>
                    <UserDataInfoContainerValues>
                        <UserDataInfoContainerValuesImg src={repoIcon}/>
                        <UserDataInfoValues>
                            64
                        </UserDataInfoValues>
                    </UserDataInfoContainerValues>
                </UserDataCard>

                <UserDataCard>
                    <UserDataInfoTitle>
                        Favoritos
                    </UserDataInfoTitle>
                    <UserDataInfoContainerValues>
                        <UserDataInfoContainerValuesImg src={starIcon}/>
                        <UserDataInfoValues>
                            1.4k
                        </UserDataInfoValues>
                    </UserDataInfoContainerValues>
                </UserDataCard>

                <UserDataCard>
                    <UserDataInfoTitle>
                        Seguidores
                    </UserDataInfoTitle>
                    <UserDataInfoContainerValues>
                        <UserDataInfoContainerValuesImg src={followersIcon}/>
                        <UserDataInfoValues>
                            1.1k
                        </UserDataInfoValues>
                    </UserDataInfoContainerValues>
                </UserDataCard>

                <UserDataCard>
                    <UserDataInfoTitle>
                        Seguindo
                    </UserDataInfoTitle>
                    <UserDataInfoContainerValues>
                        <UserDataInfoContainerValuesImg src={followingIcon}/>
                        <UserDataInfoValues>
                            216
                        </UserDataInfoValues>
                    </UserDataInfoContainerValues>
                </UserDataCard>

            </ContainerUserDataInfo>

        </ContainerWelcomeCard>
  )
}
