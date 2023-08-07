import { ActionOptions, ContainerActionOption, ContainerSelectAction, SelectActionTitle } from './styles'

export function SelectAction () {
  return (
        <ContainerSelectAction>
            <SelectActionTitle>
                O que você deseja fazer?
            </SelectActionTitle>

            <ContainerActionOption>

                <ActionOptions>
                    Criar Repositório
                </ActionOptions>

                <ActionOptions>
                    Importar Repositório
                </ActionOptions>

                <ActionOptions>
                    Novo Gist
                </ActionOptions>

                <ActionOptions>
                    Nova Organização
                </ActionOptions>

                <ActionOptions>
                    Novo Projeto
                </ActionOptions>

            </ContainerActionOption>

        </ContainerSelectAction>
  )
}
