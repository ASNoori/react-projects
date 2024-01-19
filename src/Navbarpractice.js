import React, { useState,useRef } from 'react'
import './nav.css'
import { FaBars } from 'react-icons/fa';

function Navbarpractice() {
//     const links=[{id:1,url:'/home',text:'home'},
//     {id:2,url:'/about',text:'about'},
//     {id:3,url:'/contact',text:'contact'},
//     {id:4,url:'/services',text:'services'}
// ]
const [showLink,setShowLink] = useState(false);
const linkContainerref = useRef(null);
const linkref= useRef(null);
const showLinks = ()=>{
  setShowLink(!showLink);
}
const linkStyle = {height: showLink?`${linkref.current.getBoundingClientRect().height+30}px`:'0px' }
  return (
    <nav>
      <div className='nav-container'>
          <div className='header'>
            <p>Imago</p>
            <button className='toggle' onClick={showLinks}>
              <FaBars/>
            </button>
          </div>
          <div className='link-container' ref={linkContainerref}style={linkStyle}>
             <ul className='link' ref={linkref}>
               <li><a href='#'>home</a></li>
               <li><a href='#'>about</a></li>
               <li><a href='#'>services</a></li>
               <li><a href='#'>contact</a></li>
             </ul>
          </div>
             <ul className='social-links'>
               <li><a href='#'>twitter</a></li>
               <li><a href='#'>facebook</a></li>
               <li><a href='#'>linkedin</a></li>
             </ul>
      </div>
    </nav>
  )
}

export default Navbarpractice