import React, {Component} from "react";
import {Button, InputGroup, FormControl, Image} from 'react-bootstrap';
import { Link, withRouter } from "react-router-dom";
import MenuTab from "./MenuTab"
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import {addToOrder} from '../redux/actions'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import food from '../assets/food-hori.png'

class ViewItem extends Component {  
  constructor(props) {
    super(props)

    this.state = {
      one: false,
      two: false,
      quantity: 1,
    }
  }
    
  
render() {
    let options = []
    
    for (let i = 1; i <= 10; i++) {
        options.push({label: i, value: i});
    }
    const item = this.props.match.params.handle
    return (
      <div className="viewitem">
        
          
          <Image 
            style={{width: "100vw"}}                                 
            src={food}                                                
            alt=""
          />
          <div class="align-items-center mx-5 my-5">
           
           <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <p  style={{ color: '#2EA0A6' }}>{item}</p>
            <div style={{display: "flex", alignItems: "center"}}>

                <p>Ac ne quis a nobis hoc ita dici forte miretur, quod alia quaedam in hoc facultas sit ingeni, neque haec dicendi ratio aut disciplina, ne nos quidem huic uni studio penitus umquam dediti fuimus.
               
                </p>
                
              </div> 
          </div>

           <Form>  
            <div key={`custom-radio`} className="mb-3">
            <input type="radio" checked={this.state.one} 
                onClick={() => this.setState({one: !this.state.one})} value="male" /> Add rice
                <br></br>
                <input type="radio" checked={this.state.two} 
                onClick={() => this.setState({two: !this.state.two})} value="male" /> Add sauce      
            </div>          
        </Form>
        <div style={{width: "80%"}}>
          <Dropdown options={options} onChange={(value) => this.setState({quantity: value.value})} value={0} placeholder="Select quantity" />

        </div>
        <div style={{display: "flex", justifyContent: "center"}}>
          <Link class="nav-link" to="/contact">
          <Button onClick={() => this.props.dispatch(addToOrder(item, this.state.quantity))} style={{borderRadius: 50}} variant="info">
                      <div style={{fontSize: "4vw", paddingLeft: "4vw", paddingRight: "4vw"}}>
                        Add to order
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
    order: state.order
  }
}

export default connect(mapStateToProps)(ViewItem);