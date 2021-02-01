import React, {Component} from "react";
import {Button, InputGroup, Form, FormControl, Image} from 'react-bootstrap';
import { Link, withRouter } from "react-router-dom";
import MenuTab from "./MenuTab"
import { connect } from 'react-redux'

import {addToOrder, reduceQuant, increaseQuant, callItem} from '../redux/actions'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import clair from '../assets/cloche-claire.png'
import sombre from '../assets/cloche-sombre.png'
import check from '../assets/check.png'
import logo from '../assets/logo-page-1.png'

class LastPage extends Component {  
  
  renderOrder = () => {
    const order = this.props.order
    return Object.keys(order).map((item) => {
        const val = order[item]
        const src= order[item].called ? sombre : clair
        console.log(order[item].called)
        return (
            <div style={{marginLeft: "10vw", marginRight: "10vw"}} class="row align-items-center my-5">
               <p style={{color: '#2EA0A6', fontWeight: "bold" }}>{item} </p>
               
               <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around"}}>
                  <p style={{flex: 0.90}}>Ac ne quis a nobis hoc ita dici forte miretur, quod alia quaedam in hoc facultas sit ingeni, neque haec dicendi ratio aut disciplina, ne nos quidem huic uni studio penitus umquam dediti fuimus.
                  
                  </p>
                  
                  <div>
                    <div onClick={() => this.props.dispatch(callItem(item))}>
                      <Image 
                        style={{width: "10vw", flex: 1}}                                 
                        src={src}                                                
                        alt=""
                      />
                    </div>
                    
                  </div>
                  
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
  const language = this.props.language
  const valider = language == "en" ? "Your order has been validated" : "Votre commande a bien été validée"
  const bill = language == "en" ? "Ask the bill" : "Demander l'addition"
  const bell = language == "en" ? "Activate the bell to request your dish" : "Tapez sur la cloche pour envoyer votre plat"
  const thanks = language == "en" ? "Thank you, and enjoy your meal !" : "Merci et bon appétit !"
    return (
      <div className="viewitem">
        
      <div style={{display: "flex", width: "100%", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
          <Image 
            style={{width: "10vw", height: "10vw"}}                             
            src={check}                                                
            alt=""
          />
              
                <p style={{textAlign: "center", color: "#124259"}}>{valider}
                <hr
                            style={{
                                width: "90vw",
                                color: 'lightgrey',
                                backgroundColor: 'lightgrey',
                                height: 0.2
                            }}
                        />
                        </p>
                        <p style={{textAlign: "center", fontWeight: "bold", color: "#124259"}}>{bell}</p>
                {this.renderOrder()}
                <Link style={{marginTop: -40}} class="nav-link" to="/about">
                    <Button style={{borderRadius: 100}} variant="info">
                      <div style={{fontSize: "5vw", paddingLeft: "5vw", paddingRight: "5vw"}}>
                        {bill}
                      </div>
                        
                    </Button>{' '}
                </Link>
                <Image 
                      style={{width: "50%", marginTop: "5vw"}}                                 
                      src={logo}                                                
                      alt=""
                    /> 
                    <p style={{textAlign: "center", fontWeight: "bold", color: "#124259"}}>{thanks}</p>
          </div>
        </div>
      
    );
  }
}

function mapStateToProps(state) {
  return {    
    order: state.order,
    language: state.language
  }
}

export default connect(mapStateToProps)(LastPage);