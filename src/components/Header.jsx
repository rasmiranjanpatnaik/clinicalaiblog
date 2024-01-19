 import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import {AiOutlineClose} from "react-icons/ai"


const Header = () => {
const[isNavShowing, setIsNavShowing] = useState(window.innerWidth ? true : false);

const closeNavhandler = () => {
  if(window.innerWidth < 800) {
    setIsNavShowing(false);
  } else{
    setIsNavShowing(true)
  }
}


  return (
    
    <nav>
      <div className='container nav__container'>
        <Link to="/" className='nav__logo' onClick={closeNavhandler}>
          <img src='{Logo}' alt='Navbar Logo'/>
        </Link>
        {isNavShowing && <ul className='nav__menu'>
          <li><Link to="/profile/sdfsdf" onClick={closeNavhandler}>Random name</Link></li>
          <li><Link to="/create" onClick={closeNavhandler}>Create Post</Link></li>
          <li><Link to="/authors" onClick={closeNavhandler}>Authors</Link></li>
          <li><Link to="/logout" onClick={closeNavhandler}>Logout</Link></li>
        </ul>}
        <button className='nav__toggle-btn' onClick={() =>setIsNavShowing(!isNavShowing)}>
        { isNavShowing ? <AiOutlineClose/> : <FaBars/>}
        </button>

      </div>
    </nav>      

  )
}

export default Header;