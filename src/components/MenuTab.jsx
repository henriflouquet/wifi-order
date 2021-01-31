import React, {Component} from "react";
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import { Link, withRouter } from "react-router-dom";
// import { Tab, Tabs } from "react-tabs-css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ViewItem } from "./ViewItem";
import 'react-tabs/style/react-tabs.css';
import food from '../assets/poke-carre.png'
import food2 from '../assets/food-tour.png'
import food3 from '../assets/food-carre.png'
const carteText = "Specialty english"
const lunchText = "Tartare english"
const desertText = "Tiramisu"

export default () => (
    <Tabs>
      <TabList style={{paddingLeft: "6vw"}}>
        <Tab>A la carte</Tab>
        <Tab>Lunch</Tab>
        <Tab>Desserts</Tab>
        {/* <Tab>Bar</Tab>
        <Tab>Menu</Tab> */}
      </TabList>
  
      <TabPanel style={{ marginLeft: "10vw", width: "80%", paddingBottom: 100}}>
        <h2>A la carte</h2>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
          <Link  to='/Specialty english' style={{ color: '#2EA0A6' }}>{carteText}</Link>
          <div style={{display: "flex", alignItems: "center"}}>

          <p>Ac ne quis a nobis hoc ita dici forte miretur, ne nos quidem umquam dediti fuimus.
  
 
              </p>
              <img src={food} alt=""/>
            </div> 
        </div>
        <hr
        style={{
            color: '#2EA0A6',
            backgroundColor: '#2EA0A6',
            height: 1
        }}
    />

    <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
          <Link to='/tartare' style={{ color: '#2EA0A6' }}>{lunchText}</Link>
          <div style={{display: "flex", alignItems: "center"}}>

          <p>Ac ne quis a nobis hoc ita dici forte miretur, ne nos quidem umquam dediti fuimus.
  
  </p>
              <img src={food2} alt=""/>
            </div> 
        </div>
        <hr
        style={{
            color: '#2EA0A6',
            backgroundColor: '#2EA0A6',
            height: 1
        }}
    />

    <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
          <Link to='/tiramisu' style={{ color: '#2EA0A6' }}>{desertText}</Link>
          <div style={{display: "flex", alignItems: "center"}}>

          <p>Ac ne quis a nobis hoc ita dici forte miretur, ne nos quidem umquam dediti fuimus.
  
          </p>
              <img src={food3} alt=""/>
            </div> 
        </div>
      </TabPanel>
      
      <TabPanel style={{marginLeft: "10vw", width: "80%", paddingBottom: 100}}>
        <h2>Lunch</h2>
        
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
          <Link to='/tartare' style={{ color: '#2EA0A6' }}>{lunchText}</Link>
          <div style={{display: "flex", alignItems: "center"}}>

          <p>Ac ne quis a nobis hoc ita dici forte miretur, ne nos quidem umquam dediti fuimus.
  
          </p>
              <img src={food2} alt=""/>
            </div> 
        </div>
      </TabPanel>
      <TabPanel style={{marginLeft: "10vw", width: "80%", paddingBottom: 50}}>
        <h2>Desserts</h2>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
        <Link to='/tiramisu' style={{ color: '#2EA0A6' }}>{desertText}</Link>
          <div style={{display: "flex", alignItems: "center"}}>

              <p>Ac ne quis a nobis hoc ita dici forte miretur, ne nos quidem umquam dediti fuimus.
  
              </p>
              <img src={food3} alt=""/>
            </div> 
        </div>
        
      </TabPanel>
      <TabPanel style={{marginLeft: "10vw"}}>
        <h2>Bar</h2>
        <p>
                Special Cocktail
        </p> 
      </TabPanel>
      <TabPanel style={{marginLeft: "10vw"}}>
        <h2>Menu</h2>
        <p>
                Menu of the day
        </p> 
      </TabPanel>
    </Tabs>
    
  );