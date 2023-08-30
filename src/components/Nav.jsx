import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {PiStorefrontDuotone} from 'react-icons/pi'
import { Link } from 'react-router-dom'

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
          <Link style={{textDecoration:'none',color:'#000'}} to='/'>
          Web Store 
          </Link>
        </span>
        </div>
        <div className="menu">
        <Link style={{textDecoration:'none',color:'#000'}} to='https://github.com/ZiaCodes'>
          <AiFillGithub  style={{fontSize:'0.6em'}}/>  
          </Link>
          </div>
    </div>
  )
}

export default Nav