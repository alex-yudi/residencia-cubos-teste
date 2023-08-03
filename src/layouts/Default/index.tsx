import { Footer } from '../../components/Footer';
import { LayoutContainer } from './styles';
import { Outlet } from 'react-router-dom';

export function Default() {
  return (
    <LayoutContainer>
      <Outlet /> {/* O outlet aqui vai servir para sinalizar que um filho será aplicado nesse local (devo verificar essa página em conjunto com o Router)*/}

      <Footer/>
    </LayoutContainer>
  )
}