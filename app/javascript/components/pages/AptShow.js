import React, { Component } from 'react'
import { Card, CardTitle, Col, CardText } from 'reactstrap'

class AptShow extends Component {
  render() {
    let { apartment } = this.props;
    return(
      <>
      <h3>Apartment Info</h3>
      <Col sm="6">
        <Card body>
          <CardTitle>Information on apartment at address: { apartment.street }</CardTitle>
            <CardText>Apartment located in { apartment.city },{ apartment.state }. Rent is { apartment.price }. The apartment has { apartment.bedrooms } bedrooms and { apartment.bathrooms } bathrooms.  Pets allowed? { apartment.pets }. For more information please contact { apartment.manager } at { apartment.manager_email }. </CardText>
        </Card>
      </Col>
      </>
    )
  }
}

export default AptShow