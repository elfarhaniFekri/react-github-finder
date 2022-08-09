import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
  <header  style={{position:'relative',
  top:0,
  width: '100%',
  height:'70px',
  backgroundColor:'red',

}}>
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <div style={{paddingLeft: '30px', paddingTop:'20px'}}>
               <Link to="/"> 
                 Home
               </Link>
            </div>

            <div style={{paddingRight: '30px', paddingTop:'20px'}}>
                <Link to="/about">
                About
                </Link>
            </div>
        </div>

      
  </header>
  )
}

export default Navbar