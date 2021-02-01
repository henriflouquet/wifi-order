import React, {Component} from "react";
import {Button, Col, Image} from 'react-bootstrap';
import { Link, withRouter } from "react-router-dom";
import logo from '../assets/logo-page-1.png'
import Dimensions from 'react-dimensions'
import Dropdown from 'react-dropdown';
import { connect } from 'react-redux'
import { changeLanguage } from "../redux/actions";
import {addToOrder} from '../redux/actions'



class Home extends Component { 
  
  constructor(props) {
    super(props)

    this.state = {
      text: "Hello"
    }
  }
  
render() {
    const options=[{label: "EN", value: "en"}, {label: "FR", value: "fr"}]
    const language = this.props.language
    const welcome = language == "en" ? "Welcome to" : "Bienvenue à"
    const defaultVal = language == "en" ?  options[0] : options[1]
    const order = language == "en" ? "Order" : "Commander"
    console.log(language)
    return (
      <div className="home">
        <div class="container"> 
            <div style={{width: "60%"}}>
              <Dropdown  options={options} value={defaultVal} onChange={(value) => this.props.dispatch(changeLanguage(value))} placeholder="Change language"/>
              </div>    
            

            
            <div class="col-lg-12"  style={{ display: "flex", flexDirection: "column", marginTop: "10vw", alignItems: "center"}}>               
                  <h2 class="font-weight-light">{welcome}</h2>            
                  <Image 
                      style={{width: "65%", marginTop: "10vw"}}                                 
                      src={logo}                                                
                      alt=""
                    />          
                <Link style={{marginTop: "10vw"}} class="nav-link" to="/about">
                    <Button style={{borderRadius: 100}} variant="info">
                      <div style={{fontSize: "5vw", paddingLeft: "5vw", paddingRight: "5vw"}}>
                        {order}
                      </div>
                        
                    </Button>{' '}
                </Link>
                
            </div>
          
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    text: state.text,
    order: state.order,
    language: state.language
  }
}

export default connect(mapStateToProps)(Home);