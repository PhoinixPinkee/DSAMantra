import React from 'react'
import './Navbar.css';
import Popular from '../../assets/populer.png';
import DarkMode from "../DarkMode/DarkMode.jsx"
import Algorith from '../../assets/algorithm.png';
import Approach from '../../assets/approach.png';
import Fire from '../../assets/fire.png'
function Navbar() {
    return <nav className='navbar'>
        <h1>DSAमंत्र <img src={Fire} alt='fire_emogi'  className='navbar_emogi'/></h1>
        <div className="navbar_link">
            <DarkMode/>
            <a href="">Popular<img src={Popular} alt='popular emogi' className='navbar_emogi'/></a>
            <a href="">Algorithm<img src={Algorith} alt='algorithm emogi' className='navbar_emogi'/></a>
            <a href="">Approach<img src={Approach} alt='approach emogi' className='navbar_emogi'/></a>
        </div>
    </nav>
  
}


export default Navbar
