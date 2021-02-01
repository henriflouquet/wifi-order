import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, About, Contact, ViewItem, Order, LastPage } from "./components";

function App() {
  return (
    <div className="App" style={{backgroundColor: "#F6F6F6"}}>
      <Router basename="/wifi-order">
        {/* <Navigation /> */}
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/myorder" component={Order} />
          <Route path="/lastpage" component={LastPage} />
          <Route path="/:handle" component={ViewItem} />
        </Switch> 
        
      </Router>
    </div>
  );
}

export default App;

{/* <Route path="/contact" exact component={() => <Contact />} /> */}