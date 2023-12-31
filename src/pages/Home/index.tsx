/* import { useContextSelector } from 'use-context-selector'
import { ExamplesContext } from '../../stores/contexts/counterStore'
import { useSammary } from '../../stores/hooks/useSummary'
import {
  HomeContainer,
} from './styles'

export function Home() {
  const results = useContextSelector(
    ExamplesContext,
    (context) => {
      return context.result
    },
  )

  const summary = useSammary();

  return (
    <div>
      <HomeContainer>
        <h1>Acumulador: {summary.total}</h1>
        <br />
        <h1>Tipo: {results.type}</h1>
        <span>Descrição: {results.description}</span>
        <h2>Resultado: {
          results.type === 'addition' ? results.valueOne + results.valueTwo : results.valueOne - results.valueTwo
        }</h2>
      </HomeContainer>
    </div>
  )
}
 */

import { Header } from '../../components/Header'
import { LastRepositories } from '../../components/LastRepositories'
import { SelectAction } from '../../components/SelectAction'
import { WelcomeCard } from '../../components/WelcomeCard'
import { UserCard } from '../../components/UserCard'

import {
  FollowContainer,
  HomeContainer, PageBody
} from './styles'
import { CardFollow } from '../../components/CardFollow'

export function Home () {
  return (
    <>
    <Header/>
    <PageBody>
      <UserCard/>
      <HomeContainer>
        <WelcomeCard />
        <SelectAction />
        <LastRepositories/>
      </HomeContainer>

      <FollowContainer>
        <CardFollow
          type='Seguindo'
          quantity={'216'}
          />
        <CardFollow
          type='Seguidores'
          quantity={'1.1k'}
        />
      </FollowContainer>
    </PageBody>
    </>
  )
}
