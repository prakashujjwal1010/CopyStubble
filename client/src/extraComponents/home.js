import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from './navbar';

const Home = () => {
  return(
    <div>
      <div class="row">
        <div class="col s4"><CardFeatures imgSrc="https://i.pinimg.com/736x/e7/a7/78/e7a7786069db32c8b99a79afeb8ecaa6.jpg" title="Farmer" description="Are you a farmer"/></div>
        <div class="col s4"><CardFeatures imgSrc="https://i.pinimg.com/736x/e7/a7/78/e7a7786069db32c8b99a79afeb8ecaa6.jpg" title="Farmer" description="Are you a farmer"/></div>
        <div class="col s4"><CardFeatures imgSrc="https://i.pinimg.com/736x/e7/a7/78/e7a7786069db32c8b99a79afeb8ecaa6.jpg" title="Farmer" description="Are you a farmer"/></div>
      </div>
    </div>
  )
}


export default Home;
