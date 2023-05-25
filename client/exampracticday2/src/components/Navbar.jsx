import React from 'react'
import { Link } from 'react-router-dom'
import "../../src/App.css"
function Navbar() {
  return (
    <>
    <header>
     <div>
          <img src="https://preview.colorlib.com/theme/bizpro/images/logo/logo.png.webp" alt="navimage" />
     </div>
     <div className='ulnav'>
          <ul>
               <Link to = ''>
                    <li>HOME</li>
               </Link>
               <Link to = 'add'>
                    <li>ADD</li>
               </Link>
               <Link><li>ABOUT</li></Link>
               <Link><li>SERVICES</li></Link>
               <Link><li>TEAM</li></Link>
               <Link><li>SKILLS</li></Link>
               <Link><li>CLIENT</li></Link>
               <Link><li>PRICING</li></Link>
               <Link><li>BLOG</li></Link>
               <Link><li>CONTACT</li></Link>
          </ul>
     </div>
    </header>
    </>
  )
}

export default Navbar
