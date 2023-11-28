import styled from 'styled-components';
import Link from 'next/link';

export const Styled = styled.header`
  box-shadow: 0 4px 70px 0 rgba(30, 40, 52, 0.08);
  padding: 0 68px;
`

export const HeaderContainer = styled.div`
  max-width: 1345px;
  margin: 0 auto;
  
  display: flex;
  justify-content: space-between;
`

export const HeaderLogoLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  height: 85px;
`

export const HeaderNavbarWrapper = styled.div`
  display: flex;
  gap: 100px;
  align-items: center;
  height: inherit;
`

export const HeaderNavbar = styled.nav`
  display: flex;
  height: 100%;
  gap: 30px;
`

export const HeaderNavbarLink = styled(Link)`
  color: ${({theme}) => theme.colors.palette.gray800};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  height: 100%;
  
  display: flex;
  align-items: center;
  
  &:hover, &[data-active="true"] {
    background: var(--Hot-Graient, linear-gradient(97deg, #C41740 4.8%, #EA9C28 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

export const HeaderAuthLink = styled(Link)`
`
