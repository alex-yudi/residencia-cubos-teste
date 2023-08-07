
import { ReactNode, useState, Dispatch, SetStateAction } from 'react'
import { createContext } from 'use-context-selector'

interface NewStoreProviderProps {
  children: ReactNode
}

interface NewContextType { // Aqui eu preciso declarar o tipo pois estou definindo como o CONTEXTO é construído, no caso, não estou tipando o input, estou tipando o contexto que está recebendo um input(que devo sinalizar que é uma string.)
  input: string,
  setInput: Dispatch<SetStateAction<string>>
}

export const NewContext = createContext<NewContextType>({ } as NewContextType)

export function NewProvider ({ children }: NewStoreProviderProps) {
  const [input, setInput] = useState<string>('')

  return (
    <NewContext.Provider
      value={{ input, setInput }}
    >
      {children}
    </NewContext.Provider>
  )
}
