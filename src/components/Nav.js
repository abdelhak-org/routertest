import React from 'react';
import {Link } from "react-router-dom";


function Nav() {
  return (
    <nav>

      <h3>Logo</h3>
      <ul>
        <Link to={"/"}>
        <li> Home   </li>
        </Link>
        <Link to={"/about"}>
        <li> About  </li>       
        </Link>
        <Link to={"/blogger"}>
        <li> Blogger</li>
        </Link>
        <Link to={"/shop"}>
        <li> Shop   </li>
        </Link>
      </ul>
      
    </nav>
  )
}

export default Nav
