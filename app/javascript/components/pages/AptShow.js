import React, { Component } from 'react'
import { Card, CardTitle, Col, CardText, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class AptShow extends Component {
  render() {
    let { apartment } = this.props;
    return(
      <>
      <h2 id="h2">Apartment Info</h2>
      <div id="show">
      <Col sm="6">
        <Card body>
          <CardTitle>Information on apartment at address: { apartment.street }</CardTitle>
            <CardText>Apartment located in { apartment.city }, { apartment.state }. Rent is { apartment.price }. The apartment has { apartment.bedrooms } bedrooms and { apartment.bathrooms } bathrooms.  Pets allowed? { apartment.pets }. For more information please contact { apartment.manager } at { apartment.manager_email }. </CardText>
        </Card>
      </Col>
      <NavLink to ="/aptindex">
      <Button id = "index-button" color="success">Apartment Listings </Button>      
      </NavLink>
     {this.props.logged_in && <NavLink to={`/aptedit/${apartment.id}`}>
        <Button id = "index-button" color="primary">
          Edit Listing
        </Button>
      </NavLink>}
      {this.props.logged_in && <NavLink to="/aptindex">
        <Button id = "index-button" onClick={ () => this.props.deleteApartment(apartment.id)} color="danger">Delete Apartment Listing</Button>
      </NavLink>}
      </div>  
      </>
    )
  }
}

export default AptShow