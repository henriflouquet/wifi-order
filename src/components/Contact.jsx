import React, {Component} from "react";
import {Button, InputGroup, FormControl, Image} from 'react-bootstrap';
import { Link, withRouter } from "react-router-dom";
import MenuTab from "./MenuTab"
import { connect } from 'react-redux'
import food from '../assets/food-hori.png'


class Contact extends Component { 
  
renderMyOrder = () => {
 
  if (this.props.order) {
    // const reducer = (accumulator, currentValue) => accumulator + currentValue
    let quanti = 0
    Object.keys(this.props.order).forEach((item) => {
      quanti = quanti + this.props.order[item].quantity
    })
    return(
      <Link style={{display: "flex", flexDirection: "column", alignItems: "center", paddingBottom: 20}} class="nav-link" to="/myorder">
        <Button style= {{borderRadius: 50 }} variant="info"><span>See my order</span>{' '}
            <span style={{ color: '#2EA0A6', backgroundColor: "white", paddingTop: 3, paddingBottom: 3, paddingLeft: 7.5, paddingRight: 7.5, borderRadius: 10}}>{quanti}</span>
           </Button>{' '}
        
      </Link>
    )
  } else {
    return null
  }
}
  
render() {
    
    return (
      <div >       
        <Image 
          style={{width: "100vw"}}                                 
          src={food}                                                
          alt=""
        />
        <div style={{backgroundColor: "2EA0A6"}}>
          <MenuTab/>
          </div>   
                      
        {this.renderMyOrder()}            
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

export default connect(mapStateToProps)(Contact);



// import React from "react";

// function Contact() {
//   return (
//     <div className="contact">
//       <div class="container">
//         <div class="row align-items-center my-5">
//           <div class="col-lg-7">
//             <img
//               class="img-fluid rounded mb-4 mb-lg-0"
//               src="http://placehold.it/900x400"
//               alt=""
//             />
//           </div>
//           <div class="col-lg-5">
//             <h1 class="font-weight-light">Contact</h1>
//             <p>
//               Lorem Ipsum is simply dummy text of the printing and typesetting
//               industry. Lorem Ipsum has been the industry's standard dummy text
//               ever since the 1500s, when an unknown printer took a galley of
//               type and scrambled it to make a type specimen book.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;