import React, {Component} from "react";
import {Button, InputGroup, FormControl, Image} from 'react-bootstrap';
import { Link, withRouter } from "react-router-dom";
import MenuTab from "./MenuTab"
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import {addToOrder, reduceQuant, increaseQuant} from '../redux/actions'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import food from '../assets/food-hori.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'


class Order extends Component {  
  
 renderOrder = () => {
     const order = this.props.order
     return Object.keys(order).map((item) => {
         const val = order[item]
         return (
             <div style={{marginLeft: "10vw", marginRight: "10vw"}} class="row align-items-center my-5">
                <p style={{width: "20vw", color: '#2EA0A6', fontWeight: "bold" }}>{item} </p>
                
                
                <p>Ac ne quis a nobis hoc ita dici forte miretur, quod alia quaedam in hoc facultas sit ingeni, neque haec dicendi ratio aut disciplina, ne nos quidem huic uni studio penitus umquam dediti fuimus.
               
                </p>
                <div style={{display: "flex", width: "100%", alignItems: "center", justifyContent: "center"}}>
                    <Button style={{marginLeft: "1vw", marginRight: "1vw"}} variant="info" onClick={() => this.props.dispatch(reduceQuant(item, val.quantity))}><FontAwesomeIcon icon={faMinus} /></Button>
                    <Button style={{marginLeft: "1vw"}}  variant="info" onClick={() => this.props.dispatch(increaseQuant(item, val.quantity))}> <FontAwesomeIcon icon={faPlus} /></Button>
                    
                </div>
                
                    <div style={{flex:1}}>
                        <p style={{ marginRight: 0, marginLeft: "auto", width: "20vw", color: '#2EA0A6', fontWeight: "bold" }}>x {val.quantity} </p>
                        <hr
                            style={{
                                color: '#2EA0A6',
                                backgroundColor: '#2EA0A6',
                                height: 1
                            }}
                        />
                    </div>
                
                
               
             </div>
         )
     })
 }   
  
render() {   
    return (
      <div className="viewitem">
        
          
          <Image 
            style={{width: "100vw"}}                                 
            src={food}                                                
            alt=""
          />
            <div >
                <div style={{display: "flex", textDecoration: "underline", textDecorationColor: "#2EA0A6", flex: 1}}>
                    <h1 style={{textAlign: "center", color: '#2EA0A6', fontWeight: "bold", paddingLeft:"10vw"}}> Your order</h1>

                </div>
                {this.renderOrder()}
                <div style={{display: "flex", justifyContent: "center", flexDirection: "row"}}>
                    <Link class="nav-link" to="/contact">
                            <Button style={{borderRadius: 20}} variant="info">Return</Button>{' '}
                        </Link>
                        <Link class="nav-link" to="/lastpage">
                            <Button style={{borderRadius: 20}} variant="info">Validate</Button>{' '}
                        </Link>
                </div>
                    
            </div>
               
          </div>
        
      
    );
  }
}

function mapStateToProps(state) {
  return {    
    order: state.order
  }
}

export default connect(mapStateToProps)(Order);