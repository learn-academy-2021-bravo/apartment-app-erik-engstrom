import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'
import homePage from '../assets/Af.png'

class Home extends Component {
  render() {
    return(
      <>
    <div id = "a-f">
      <h2 id="h2">Apartment Finder</h2>  
      <img id = "home-img" src = { homePage } alt = "Welcome to Apartment Finder"  />
       <br/>
      <NavLink id = "home-button" to ="/aptindex">
      <Button  color="success">Apartment Listings </Button>      
      </NavLink>
    </div>
      

      </>
    )
  }
}

export default Home