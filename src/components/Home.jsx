import React, {Component} from "react";
import {Button, Col, Image} from 'react-bootstrap';
import { Link, withRouter } from "react-router-dom";
import logo from '../assets/logo-page-1.png'
import Dimensions from 'react-dimensions'



class Home extends Component { 
  
  constructor(props) {
    super(props)

    this.state = {
      text: "Hello"
    }
  }
  
render() {

    return (
      <div className="home">
        <div class="container">     
            
            <div class="col-lg-12"  style={{ display: "flex", flexDirection: "column", marginTop: "10vw", alignItems: "center"}}>               
                  <h2 class="font-weight-light">Welcome at</h2>            
                  <Image 
                      style={{width: "65%", marginTop: "10vw"}}                                 
                      src={logo}                                                
                      alt=""
                    />          
                <Link style={{marginTop: "10vw"}} class="nav-link" to="/about">
                    <Button style={{borderRadius: 100}} variant="info">
                      <div style={{fontSize: "5vw", paddingLeft: "5vw", paddingRight: "5vw"}}>
                        Order
                      </div>
                        
                    </Button>{' '}
                </Link>
                
            </div>
          
        </div>
      </div>
    );
  }
}

export default Home;