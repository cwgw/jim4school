import React from 'react'
import GatsbyLink from 'gatsby-link'

import styled from 'styled-components'
import { mix } from 'polished'

import StyledEdge from 'components/StyledEdge'

import { media, boxShadow } from 'styles/style'
import theme from 'styles/theme'

import logo from './logo-light.svg'
import logoDark from './logo-dark.svg'

const Header = (props) => {

  const NavItems = props.navItems
    .filter(({node}) => node.menu_order > -1)
    .sort((a,b) => a.node.menu_order < b.node.menu_order ? -1 : 1)
    .map(({node}) => (
      <NavItem
        key={node.slug}
        to={node.slug === 'home' ? '/' : `/${node.slug}`}
      >
        {node.title}
      </NavItem>
    ))

  return (
    <Outer>
      <StyledEdge
        colorPrimary={theme.color.blue[3]}
        colorSecondary={theme.color.blue[1]}
      />
      <Inner>
        <LogoLink to="/" >
          <Logo src={logo} />
        </LogoLink>
        <NavContainer>
          <Nav>
            {NavItems}
          </Nav>
        </NavContainer>
      </Inner>
    </Outer>
  )
}

export default Header

const Link = styled(GatsbyLink)`
  text-decoration: none;
  color: inherit;

  &:hover {
    color: inherit;
  }

  &:focus {
    color: ${({theme}) => theme.color.blue[4]};
    background-color: ${({theme}) => theme.color.secondary}
    outline-color: ${({theme}) => theme.color.blue[4]};
  }

  ${media.lg`

    &:hover {
      color: inherit;
      background-color: ${({theme}) => theme.color.blue[4]};
    }

    &:hover,
    &:focus {
      text-decoration: underline;
      text-decoration-color: ${({theme}) => theme.color.blue[2]};
      outline-color: ${({theme}) => theme.color.blue[4]};
    }
  `}
`

const Outer = styled.header`
`

const Inner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-flow: column nowrap;
  width: ${({theme}) => theme.breakpoint.xl };
  max-width: 100%;
  margin: 0 auto 3rem;
  background: ${theme.color.blue[3]};
  color: white;

  ${media.lg`
    position: relative;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
  `}
`

const LogoLink = Link.extend`
  display: block;
  padding: 1rem;

  &:focus {
    background-image: url(${logoDark});
    background-repeat: no-repeat;
    background-position: 1rem 1rem;
    background-clip: padding-box;
  }
`

const Logo = styled.img`
  display: block;

  ${LogoLink}:focus & {
    opacity: 0;
  }

  ${LogoLink}:hover:focus & {
    opacity: 1;
  }
`

const NavContainer = styled.div`
  display: block;
  max-width: 100%;
  overflow: hidden;

  ${media.lg`
    overflow: visible;
  `}
`

const Nav = styled.nav`
  display: block;
  padding: 0 0.75rem;
  white-space: nowrap;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 1.5rem;
  margin-bottom: -1rem;

  ${media.lg`
    display: flex;
    align-items: stretch;
    padding: 0;
    margin: 0;
    overflow: visible;
  `}
`

const  NavItem = Link.extend`
  padding: 1rem 1.5rem;
  display: inline-block;
  margin: 0.25rem;

  ${({theme}) => boxShadow(3, theme.color.blue[4])}
  background-color: ${({theme}) => theme.color.blue[4]};

  ${media.lg`
    margin: 0;
    background-color: transparent;

    ${({theme}) => boxShadow(0, theme.color.blue[3])}
  `}
`
