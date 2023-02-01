import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import CoverArts from "./pages/CoverArts.js";
import NotFound from "./pages/NotFound.js"
import CoverArt from "./pages/CoverArt.js";
import Portfolio from "./pages/Portfolio.js";
import {
      HashRouter, Switch, Route, Redirect
  } from 'react-router-dom';

import "./css/index.css"

function App() {
return (
    <HashRouter>
      <Header />
      <Switch>
      <Route exact path="/">
        <Redirect to="/design" />
      </Route>
      <Route path="/404" component={NotFound} />
      <Route path="/CoverArt/:id" render={props => <CoverArt {...props}/>} />
        <Route path="/design" component={Portfolio} />
      <Route path="/CoverArts" exact>
        <CoverArts />
      </Route>
    </Switch>
      <Footer a id="f"/>
    </HashRouter>
  );
}

export default App;
