import React from 'react'
import { FaBars } from 'react-icons/fa';
import './Sidebar.css';

function SidebarModalHome() {
  return (
   <main>
     <button className='sidebar-toggle'>
        <FaBars/>
     </button>
     <button className='btn'>
        show modal
     </button>
   </main>
  )
}

export default SidebarModalHome