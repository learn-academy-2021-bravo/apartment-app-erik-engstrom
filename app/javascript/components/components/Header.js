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
          <Nav id ="header">
            <NavItem>
              { logged_in && <a href={ sign_out_route }>Sign Out</a> }
              { !logged_in && <a href={ sign_in_route }>Sign In</a> }
            </NavItem>
            <NavItem id="head-link">
              <NavLink to="/aptindex">Apartment Listings</NavLink>
            </NavItem>
            {logged_in && <NavItem>
              <NavLink to="/aptnew">Create New Listing</NavLink>
            </NavItem>}
            
          </Nav>
      </Navbar>
    </div>
      

      </>
    )
  }
}


export default Header