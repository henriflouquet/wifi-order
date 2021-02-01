import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, About, Contact, ViewItem, Order, LastPage } from "./components";

function App() {
  return (
    <div className="App" style={{backgroundColor: "#F6F6F6"}}>
      <BrowserRouter basename="/wifi-order">
        {/* <Navigation /> */}
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/myorder" component={Order} />
          <Route path="/lastpage" component={LastPage} />
          <Route path="/:handle" component={ViewItem} />
        </Switch> 
        
      </BrowserRouter>
    </div>
  );
}

export default App;