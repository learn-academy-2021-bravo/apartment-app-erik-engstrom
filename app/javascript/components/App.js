import React, { Component } from 'react'
import mockApts from './mockApts.js'
import Header from "./components/Header"
import Footer from './components/Footer'
import Home from './pages/Home'
import AptShow from './pages/AptShow'
import AptIndex from './pages/AptIndex'
import AptNew from './pages/AptNew'
import AptEdit from './pages/AptEdit'
import NotFound from './pages/NotFound'
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from "react-router-dom"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: []
    }
  }
  componentDidMount(){
    this.aptIndex()
    }
  aptIndex = () => {
    fetch("/apartments")
    .then(response => response.json())
    .then(apartmentArray => this.setState({ apartments: apartmentArray}))
    .catch(errors => console.log("index errors:", errors))
  }
  createNewApartment = (newapartment) => {
    return fetch("/apartments", {
      body: JSON.stringify(newapartment),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => response.json())
    .then(payload => this.aptIndex())
    .catch(errors => {
      console.log("create errors:", errors)
    })
  }
  updateApartment = (apartment, id) => {
  console.log(apartment)
    fetch(`/apartments/${id}`, {
      body: JSON.stringify(apartment),
      headers: {
      "Content-Type": "application/json"
        },
      method: "PATCH"
        })
      .then(response => response.json())
      .then(payload => this.aptIndex())
      .catch(errors => console.log("update errors:", errors))
      }
  deleteApartment = (id) => {
    fetch(`/apartments/${id}`, {
      headers: {
        "Content-type": "application/json"
      },
      method: "DELETE"
    })
    .then(response => response.json())
    .then(payload => this.aptIndex())
    .catch(errors => console.log("delete errors:", errors))
    }
  render () {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    
    return (
      <>
      <Router>
      <Header sign_in_route={ sign_in_route } sign_out_route={ sign_out_route }
      logged_in={ logged_in } />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/aptshow/:id" render={ (props) => {
            let id = props.match.params.id
            let apartment = this.state.apartments.find(apartment => apartment.id === +id)
            return <AptShow apartment={ apartment } deleteApartment={ this.deleteApartment } />
          }} />
          <Route path='/aptnew' render = { (props) => <AptNew createNewApartment = { this.createNewApartment } current_user= { current_user }/>} />
          <Route path="/aptindex" render={ (props) => <AptIndex apartment={ this.state.apartments } />} />
          <Route exact path={"/aptedit/:id"} render={ (props)  => {
            let id = props.match.params.id
            let apartment = this.state.apartments.find(apartment => apartment.id === parseInt(id))
              return(
                <AptEdit
                 updateApartment={this.updateApartment}
                 apartment = { apartment } 
                 current_user= { current_user }
                />
               )}
              }
             />
          <Route component={ NotFound } />
        </Switch>
        <Footer />
      </Router>
      </>
    );
  }
}

export default App;
