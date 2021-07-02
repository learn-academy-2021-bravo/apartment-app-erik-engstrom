import React, { Component } from 'react'
import { Card, CardTitle, Col, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class AptIndex extends Component {
  render() {
    let { apartment } = this.props 
    return(
      <>
      <h2 id="h2">Available Apartments</h2>
      <Col id="form">
        { apartment.map(apartment => {
        return (
        <Card body key={ apartment.id }>
          <CardTitle>
            <NavLink to={`/aptshow/${apartment.id}`}>
            <h4>{ apartment.street }</h4>
            </NavLink>
          </CardTitle>
        </Card>
        )
        })}
        <NavLink to ="/">
          <Button id = "home-button" color="success">Home</Button>      
        </NavLink>
      </Col>
      </>
    )
  }
}

export default AptIndex