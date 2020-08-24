import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Button'
import styled from 'styled-components'

export default class Navbar extends Component {
  render() {
    return (
      <NavbarWrapper className = "navbar navbar-expand-sm bg-primary navbar-dark px-sm-5" >
        <Link to="/">
          <span><i className="fas fa-home"/></span>
        </Link>

        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
             <Link to="/" className="nav-link">
              products
             </Link>
          </li>
        </ul>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
             <Link to="/About" className="nav-link">
              About
             </Link>
          </li>
        </ul>

        <Link className="ml-auto" to="/cart">
            <ButtonContainer>
              <span className="mr-2">
                <i className="fas fa-cart-plus"></i>
              </span>
              my cart
            </ButtonContainer> 
        </Link>

      </NavbarWrapper>
    )
  }
}


const NavbarWrapper = styled.nav`
    background: var(--mainBlue) !important;
    .nav-link {
      color: var(--mainWhite) !important;
      font-size: 1.3rem;
      text-transform: capitalize;
    }
`