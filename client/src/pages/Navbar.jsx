import {useRef} from 'react';
import {Link} from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";

const Navbar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }
  return (
    <div>
    <header>
      <h3>Logo</h3>
      <nav ref={navRef}>
        <Link to="/">Home</Link>
        <Link to="/work">My work</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About me</Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}><FaTimes/></button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}><FaBars /></button>

    </header>
    </div>
  )
}

export default Navbar
