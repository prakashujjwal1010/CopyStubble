import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import M from "materialize-css";
import CardTiles from "../modules/CardTiles";
import Orders from "./Orders";
import ManageFarms from "./ManageFarms";
import "./Farmers.css";

const Farmers = props => {
    useEffect(() => {
      M.AutoInit();
    }, []);

    return(
      <Router>
      <div>
      <Switch>
          <Route exact path="/farmers">
            <div className="row container">
              <div className="col s12 m4"><CardTiles imgSrc="https://i.pinimg.com/736x/e7/a7/78/e7a7786069db32c8b99a79afeb8ecaa6.jpg" title="Sell Stubble" to="/farmers"/></div>
              <div className="col s12 m4"><CardTiles imgSrc="https://i.pinimg.com/736x/e7/a7/78/e7a7786069db32c8b99a79afeb8ecaa6.jpg" title="Check Weather" to="/farmers"/></div>
              <div className="col s12 m4"><CardTiles imgSrc="https://i.pinimg.com/736x/e7/a7/78/e7a7786069db32c8b99a79afeb8ecaa6.jpg" title="Manage Orders" to="/farmers/orders"/></div>
              <div className="col s12 m4"><CardTiles imgSrc="https://i.pinimg.com/736x/e7/a7/78/e7a7786069db32c8b99a79afeb8ecaa6.jpg" title="Manage Farm" to="/farmers/managefarms"/></div>
              <div className="col s12 m4"><CardTiles imgSrc="https://i.pinimg.com/736x/e7/a7/78/e7a7786069db32c8b99a79afeb8ecaa6.jpg" title="Profile" to="/farmers"/></div>
              <div className="col s12 m4"><CardTiles imgSrc="https://i.pinimg.com/736x/e7/a7/78/e7a7786069db32c8b99a79afeb8ecaa6.jpg" title="help" to="/farmers"/></div>
            </div>
          </Route>
          <Route path="/farmers/orders">
            <div className="row container">
              <Orders />
            </div>
          </Route>
          <Route path="/farmers/managefarms">
            <div className="row container">
              <ManageFarms />
            </div>
          </Route>
       </Switch>
      </div>
      </Router>
    );
};

Farmers.propTypes = {};

export default Farmers;
