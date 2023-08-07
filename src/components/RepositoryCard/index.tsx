import { ContainerRepositoryInfoValues, DescriptionRepository, FavoriteRepositorie, IconImg, NameRepository, RepositoryInfo } from './styles'

import repoIcon from '../../assets/repo-icon.svg'
import starIcon from '../../assets/star-icon.svg'

interface PropsRepositoryCard {
    titleCard: string;
    descriptionRepo: string;
}

export function RepositoryCard ({ titleCard, descriptionRepo }:PropsRepositoryCard) {
  return (
    <RepositoryInfo>
        <ContainerRepositoryInfoValues>
            <NameRepository>
                <IconImg src={repoIcon}/>
                {titleCard}
            </NameRepository>
            <DescriptionRepository>
                {descriptionRepo}
            </DescriptionRepository>
        </ContainerRepositoryInfoValues>

        <FavoriteRepositorie>
            <IconImg src={starIcon}/>
                Star
        </FavoriteRepositorie>
    </RepositoryInfo>
  )
}
