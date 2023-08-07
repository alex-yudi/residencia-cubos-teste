import { ContainerLastRepositories, ContainerRepositories, TitleLastRepositories } from './styles'

import { RepositoryCard } from '../RepositoryCard'

export function LastRepositories () {
  return (
        <ContainerLastRepositories>
            <TitleLastRepositories>
                Meus últimos repositórios:
            </TitleLastRepositories>

            <ContainerRepositories>

                <RepositoryCard
                    titleCard='VanderL/repo'
                    descriptionRepo='Repositório'
                />
                <RepositoryCard
                    titleCard='VanderL/residencia'
                    descriptionRepo='cubos-academy'
                />
                <RepositoryCard
                    titleCard='VanderL/login'
                    descriptionRepo='Cubos Academy descrição'
                />
                <RepositoryCard
                    titleCard='VanderL/login'
                    descriptionRepo='Redesign de um sistema de login com integração'
                />

            </ContainerRepositories>
        </ContainerLastRepositories>
  )
}
