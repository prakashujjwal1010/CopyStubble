import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardTiles = props => {
    return(
          <div className=" waves-effect waves-green card yellow darken-1">
          <div className="card-image">
            <img src={props.imgSrc}></img>
          </div>
            <div className="card-content white-text">
              <span className="card-title"><Link to={props.to}>{props.title}</Link></span>
            </div>
          </div>
    );
};

CardTiles.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  to: PropTypes.string,
};

export default CardTiles;
