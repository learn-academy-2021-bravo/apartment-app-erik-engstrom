import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
class Header extends Component{
  render(){
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props
    return(
      <>
      <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Home</NavbarBrand>
          <Nav>
            <NavItem>
              <NavLink to="/aptindex">Apartment Listings</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/aptnew">Create New Listing</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
      { logged_in && <a href={ sign_out_route }>Sign Out</a> }
      { !logged_in && <a href={ sign_in_route }>Sign In</a> }

      </>
    )
  }
}


export default Header