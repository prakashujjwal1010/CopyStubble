import React from "react";
import { Link } from "react-router-dom";

const Footer = props => {
    return(
      <footer className="page-footer" style={{backgroundColor: "#2a803b"}}>
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">StubbleTrouble</h5>
            <p className="grey-text text-lighten-4">let's do something for pollution</p>
          </div>
          <div className="col l4 offset-l2 s12">
            <ul>
              <li><Link to='/'>HOME</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
        © 2014 Copyright StubbleTrouble
        </div>
      </div>
    </footer>
    );
};

export default Footer;
