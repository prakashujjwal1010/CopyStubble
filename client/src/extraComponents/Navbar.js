import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";

const Navbar = props => {
    useEffect(() => {
      M.AutoInit();
    }, []);

    return (
        <div className="navbar-fixed">
            <nav>
                <div className='nav-wrapper' style={{backgroundColor: "#2a803b"}}>
                    <div className='brand-logo center'>
                        <Link to='/'>StubbleTrouble</Link>
                    </div>
                    <a  href="/" data-target="slide-out" className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </a>
                    <ul className='right'>
                        <li>
                            <Link to='/login'>LOGIN</Link>
                        </li>
                        <li>
                            <Link to='/register'>SIGN UP</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;
