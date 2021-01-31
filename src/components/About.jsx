import React, {Component} from "react";
import {Button, InputGroup, FormControl, Image} from 'react-bootstrap';

import { Link, withRouter } from "react-router-dom";
import rooftop from '../assets/rooftop.png'


class About extends Component { 
  
  constructor(props) {
    super(props)

    this.state = {
      table: "",
      code: ""
    }
  }

renderValidate = () => {
  if (this.state.table != "" && this.state.code.length == 4) {
    return(
      <Link class="nav-link" to="/contact">
        <Button style={{borderRadius: 100}} variant="info">
          <div style={{fontSize: "5vw", paddingLeft: "5vw", paddingRight: "5vw"}}>
            Validate
          </div>
                        
        </Button>{' '}
      </Link>
    )
  }
}
  
render() {
    
    return (
      <div className="about" >
        
          <div class="align-items-center my-5">
            
            <div class="col-lg-12" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>             
              
              
              <h1 class="font-weight-light" style={{textAlign: "center"}}>Enter your table name</h1>
              <InputGroup className="mb-3" style= {{width: "40vw"}}>
                
                <FormControl
                  style={{borderRadius: "20vw", textAlign: "center", borderWidth: 2, paddingTop: "2vw", paddingBottom: "2vw", borderColor: "#124259",}}
                 
                  aria-describedby="basic-addon1"
                  onChange={(event)=> this.setState({table: event.target.value}) }
                />
              </InputGroup>

              <h1 class="font-weight-light" style={{textAlign: "center"}}>Enter 4 digits code</h1>
              <InputGroup className="mb-3" style= {{width: "40vw"}}>
                
                <FormControl
                  style={{borderRadius: "20vw", paddingTop: "2vw", paddingBottom: "2vw",borderWidth: 2, borderColor: "#124259", textAlign: "center"}}
                  
                  aria-describedby="basic-addon1"
                  onChange={(event)=> this.setState({code: event.target.value}) }
                />
              </InputGroup>
              {this.renderValidate()}
              
              <Image 
                      style={{width: "100vw"}}                                 
                      src={rooftop}                                                
                      alt=""
                    />          
            </div>
          </div>
        </div>
     
    );
  }
}

export default About;