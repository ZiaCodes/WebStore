import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {PiStorefrontDuotone} from 'react-icons/pi'

const Nav = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <span style={{
          fontWeight:'bolder',
          marginLeft:'1em',
          textTransform:'uppercase',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          gap:'0.4em'
          }}>
          <PiStorefrontDuotone style={{fontSize:'2em'}}/>
          Web Store 
        </span>
        </div>
        <div className="menu">
          <AiFillGithub  style={{fontSize:'0.6em'}}/>
          </div>
    </div>
  )
}

export default Nav