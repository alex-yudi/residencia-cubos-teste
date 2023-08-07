import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../../lib/axios'

interface Result { // Tipagem
  description: string
  type: 'addition' | 'subtraction'
  valueOne: number
  valueTwo: number
  createdAt: Date
}

interface CreateResultInput { // Tipagem
  description: string
  valueOne: number
  valueTwo: number
  type: 'addition' | 'subtraction'
}

interface ExampleContextType { // Tipagem
  results: Result[]
  result: Result
  fetchExample: (query?: string) => Promise<void>
  createCount: (data: CreateResultInput) => Promise<void>
}

interface CounterStoreProviderProps { // Tipagem
  children: ReactNode
}

export const ExamplesContext = createContext<ExampleContextType>( // Criação do contexto que será aplicado no hook, nesse caso é preciso declarar a interface de um objeto para poder utilizar a criação do contexto, pois informaremos na tipagem qual é o tipo de contexto que está sendo exportado.
  {} as ExampleContextType
)

export function ExampleProvider ({ children }: CounterStoreProviderProps) {
  const [results, setResults] = useState<Result[]>([]) // Criação dos states que serão usados no contexto, faço a tipagem do state que está sendo utilizado, nesse caso, o Result[] indica que haverá um array de elementos do tipo Result.
  const [result, setResult] = useState<Result>({ // Criação dos states que serão usados no contexto
    description: 'test',
    type: 'addition',
    valueOne: 1,
    valueTwo: 2,
    createdAt: new Date()
  })

  const fetchExample = useCallback(async (query?: string) => { // Não está fazendo nada, porém faz a requisição na renderização, por causa do [] vazio.
    const response = await api.get('/lista', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query
      }
    })

    setResult(response.data)
  }, [])

  const createCount = useCallback(
    async (data: CreateResultInput) => {
      const { valueOne, description, valueTwo, type } = data

      console.log('aqui', valueOne, description, valueTwo, type)

      // const response = await api.post('example', {
      //   description,
      //   valueOne,
      //   valueTwo,
      //   type,
      //   createdAt: new Date(),
      // })

      // setResults((oldState) => [response.data, ...oldState])

      const response = {
        description,
        valueOne,
        valueTwo,
        type,
        createdAt: new Date()
      }
      setResults((oldState) => [response, ...oldState])

      setResult(response)
    },
    []
  )

  useEffect(() => {
    fetchExample()
  }, [fetchExample])
  return (
    <ExamplesContext.Provider
      value={{ result, fetchExample, createCount, results }}
    >
      {children}
    </ExamplesContext.Provider>
  )
}
