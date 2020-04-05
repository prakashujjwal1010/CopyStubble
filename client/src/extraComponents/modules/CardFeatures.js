import React from "react";
import PropTypes from "prop-types";

const CardFeatures = props => {
    return(
          <div className=" waves-effect waves-green card blue-grey darken-1">
          <div className="card-image">
            <img src={props.imgSrc}></img>
          </div>
            <div className="card-content white-text">
              <span className="card-title">{props.title}</span>
              <p>{props.description}</p>
            </div>
          </div>
    );
};

CardFeatures.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default CardFeatures;
