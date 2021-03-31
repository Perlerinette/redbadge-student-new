import React from "react";
import Contact from "./components/Contact.jsx";
import MainPage from "./components/MainPage";
import SiteBar from "./components/Navbar.jsx";
import Store from "./components/Store.jsx";
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <div>
      <SiteBar />
      <Switch>
        <Route exact path="/" component={() => <MainPage title="Props passed" />}/>

        {/* Another way of Routing */}
        <Route exact path="/alt">
          <MainPage title="Props passed In" />
        </Route>
        <Route exact path="/store" component={Store}/>
        <Route exact path="/contact" component={Contact}/>
      </Switch>
      
    </div>
  );
}

export default App;
