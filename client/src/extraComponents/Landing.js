import React, { useEffect } from "react";
import PropTypes from "prop-types";
import M from "materialize-css";
import "./Landing.css";
import CardFeatures from "./modules/CardFeatures";

const Landing = props => {
    useEffect(() => {
      M.AutoInit();
    }, []);

    return(
      <div>
      <div className="parallax-container">
      <h1 className="card-title">Farmer</h1>
      <div className="parallax"><img src="https://c4.wallpaperflare.com/wallpaper/75/676/890/field-rolls-harvesting-the-stubble-wallpaper-preview.jpg"></img></div>
    </div>
    <div className="section white container">
    <div className="row">
      <div className="col s12 m4"><CardFeatures imgSrc="https://i.pinimg.com/736x/e7/a7/78/e7a7786069db32c8b99a79afeb8ecaa6.jpg" title="Farmer" description="Are you a farmer"/></div>
      <div className="col s12 m4"><CardFeatures imgSrc="https://i.pinimg.com/736x/e7/a7/78/e7a7786069db32c8b99a79afeb8ecaa6.jpg" title="Buyer" description="Are you a Buyer"/></div>
      <div className="col s12 m4"><CardFeatures imgSrc="https://i.pinimg.com/736x/e7/a7/78/e7a7786069db32c8b99a79afeb8ecaa6.jpg" title="Feature 3" description="Feature 3"/></div>

      <div className="col s12 m4"><CardFeatures imgSrc="https://i.pinimg.com/736x/e7/a7/78/e7a7786069db32c8b99a79afeb8ecaa6.jpg" title="Feature 4" description="Feature 4"/></div>
      <div className="col s12 m4"><CardFeatures imgSrc="https://i.pinimg.com/736x/e7/a7/78/e7a7786069db32c8b99a79afeb8ecaa6.jpg" title="Feature 5" description="Feature 5"/></div>
      <div className="col s12 m4"><CardFeatures imgSrc="https://i.pinimg.com/736x/e7/a7/78/e7a7786069db32c8b99a79afeb8ecaa6.jpg" title="Feature 6" description="Feature 6"/></div>
    </div>
    </div>
    <div className="parallax-container">
      <div className="parallax"><img src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2018/10/crop-burning-pti-1539109010.jpg"></img></div>
    </div>
      </div>
    );
};

Landing.propTypes = {};

export default Landing;
