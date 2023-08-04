import { Footer } from '../../components/Footer';
import { HeroLeft } from '../../components/HeroLeft';
import { BodyContainer, LayoutContainer } from './styles';
import { Outlet } from 'react-router-dom';

export function Default() {
  return (
    <LayoutContainer>
    
      <BodyContainer>
          <HeroLeft/>
          <Outlet /> {/* O outlet aqui vai servir para sinalizar que um filho será aplicado nesse local (devo verificar essa página em conjunto com o Router)*/}
      </BodyContainer>

      <Footer/>
    </LayoutContainer>
  )
}