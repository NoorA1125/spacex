import React from "react";
import App from "../App";

function BulmaNavbar() {
    return (
        <nav aria-label="main navigation" className="navbar" role="navigation">
      <div className="navbar-brand">
         <a className="navbar-item" href="https://bulma.io"><img height="28" src="https://logos-world.net/wp-content/uploads/2020/09/SpaceX-Logo.png" width="112" /></a> <a aria-expanded="false" aria-label="menu" className="navbar-burger" data-target="navbarBasicExample" role="button"><span aria-hidden="true"></span> <span aria-hidden="true"></span> <span aria-hidden="true"></span></a>
      </div>
      <div className="navbar-menu" id="navbarBasicExample">
         <div className="navbar-start">
            <a className="navbar-item" href="">Home</a> 
         </div>
      </div>
   </nav>
    );
}

export default BulmaNavbar