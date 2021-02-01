import React, {Component} from "react";
import {Button, InputGroup, FormControl, Image} from 'react-bootstrap';

import { Link, withRouter } from "react-router-dom";
import rooftop from '../assets/rooftop.png'
import { connect } from 'react-redux'


class About extends Component { 
  
  constructor(props) {
    super(props)

    this.state = {
      table: "",
      code: ""
    }
  }

renderValidate = (validate) => {
  if (this.state.table != "" && this.state.code.length == 4) {
    return(
      <Link class="nav-link" to="/contact">
        <Button style={{borderRadius: 100}} variant="info">
          <div style={{fontSize: "5vw", paddingLeft: "5vw", paddingRight: "5vw"}}>
            {validate}
          </div>
                        
        </Button>{' '}
      </Link>
    )
  }
}
  
render() {
  const language = this.props.language
    const tableText = language == "en" ? "Enter your table name" : "Tapez votre numéro de table"
    const codeText = language == "en" ? "Enter 4 digits code" : "Tapez votre code à 4 chiffres"
    const validate = language == "en" ? "Validate" : "Valider"
    return (
      <div className="about" >
        
          <div class="align-items-center my-5">
            
            <div class="col-lg-12" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>            
              
              <h1 class="font-weight-light" style={{textAlign: "center"}}>{tableText}</h1>
              <InputGroup className="mb-3" style= {{width: "40vw"}}>
                
                <FormControl
                  style={{borderRadius: "20vw", textAlign: "center", borderWidth: 2, paddingTop: "2vw", paddingBottom: "2vw", borderColor: "#124259",}}
                 
                  aria-describedby="basic-addon1"
                  onChange={(event)=> this.setState({table: event.target.value}) }
                />
              </InputGroup>

              <h1 class="font-weight-light" style={{textAlign: "center"}}>{codeText}</h1>
              <InputGroup className="mb-3" style= {{width: "40vw"}}>
                
                <FormControl
                  style={{borderRadius: "20vw", paddingTop: "2vw", paddingBottom: "2vw",borderWidth: 2, borderColor: "#124259", textAlign: "center"}}
                  
                  aria-describedby="basic-addon1"
                  onChange={(event)=> this.setState({code: event.target.value}) }
                />
              </InputGroup>
              {this.renderValidate(validate)}
              
              <Image 
                      style={{marginBottom: 0, marginTop: "auto", width: "100vw"}}                                 
                      src={rooftop}                                                
                      alt=""
                    />          
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

export default connect(mapStateToProps)(About);