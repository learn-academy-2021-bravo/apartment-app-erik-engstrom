import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom'

class Footer extends Component {
  render() {
    return(
      <>
      <footer id="footer">
      <Nav>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="aptnew">Add New Listing</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="aptindex">Apartment Listings</NavLink>
        </NavItem>
      </Nav>
      </footer>
      </>
    )
  }
}

export default Footer