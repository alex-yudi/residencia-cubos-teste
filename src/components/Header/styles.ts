import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 85.375rem;
  height: 3rem;
  padding: 2.5rem 0 7.5rem;

  background: ${(props) => props.theme['headerBgColor']};
  color: ${(props) => props.theme['headerFontColor']};
`
