import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, About, Contact, ViewItem, Order, LastPage } from "./components";

function App() {
  return (
    <div className="App" style={{backgroundColor: "#F6F6F6"}}>
      <Router>
        {/* <Navigation /> */}
        <Switch>
          <Route path="/wifi-order/" component={Home} />
          <Route path="/wifi-order/about" component={About} />
          <Route path="/wifi-order/contact" component={Contact} />
          <Route path="/wifi-order/myorder" component={Order} />
          <Route path="/wifi-order/lastpage" component={LastPage} />
          <Route path="/wifi-order/:handle" component={ViewItem} />
        </Switch> 
        
      </Router>
    </div>
  );
}

export default App;