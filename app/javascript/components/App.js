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
      apartments: mockApts
    }
  }
  createNewApt = (newapt) => {
    console.log(newapt);
  }
  render () {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    console.log(this.state.apartments);
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
            return <AptShow apartment={ apartment } />
          }} />
          <Route path='/aptnew' render = { (props) => <AptNew createNewApt = { this.createNewApt } />} />
          <Route path="/aptindex" render={ (props) => <AptIndex apartment={ this.state.apartments } />} />
          <Route exact path={"/aptedit/:id"} render={ (props)  => {
            let id = props.match.params.id
            let apartment = this.state.apartments.find(apartment => apartment.id === parseInt(id))
              return(
                <AptEdit
                 updateApt={this.updateApt}
                 apartment = { apartment } />
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
