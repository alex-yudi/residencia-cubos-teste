import { Teste } from './styles'
import { useContextSelector } from 'use-context-selector'

import { NewContext } from '../../stores/contexts/newStore'

export function HeroLeft() {
  const input = useContextSelector(NewContext, 
    (context) => {
      return context.input
  })
  const setInput = useContextSelector(NewContext, 
    (context) => {
      return context.setInput
  })

  const handleOnChange = (event:any) => {
    console.log(event.target.value)
    setInput(event.target.value)
  }

  const handleOnSubmit = (event:any) => {
    event.preventDefault();
    setInput('')
  }

  return (
   <Teste>
    
    <form onSubmit={handleOnSubmit}>

    <input 
      type="text" 
      value={input}
      onChange={handleOnChange}  
    />
    <button>
      Salvar
    </button>
    </form>


    <h2>

    </h2>
   </Teste>
  )
}