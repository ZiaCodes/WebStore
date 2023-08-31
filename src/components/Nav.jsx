import React,{useState} from 'react'
import {IoMdArrowRoundBack} from 'react-icons/io'
import {PiStorefrontDuotone} from 'react-icons/pi';
import {MdLibraryAdd} from 'react-icons/md'
import { Link } from 'react-router-dom'

const Nav = () => {
  const [click,setClick] = useState(false);
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
          {
            click ? (
              <Link 
                style={{textDecoration:'none',color:'#000'}} 
                to='http://localhost:3000/8918027179_ziacodes'
                onClick={() => setClick(!click)}
              >
              <MdLibraryAdd style={{fontSize:'0.6em'}}/>  
              </Link>
            ) : (
              <Link 
                style={{textDecoration:'none',color:'#000'}} 
                to='/'
                onClick={() => setClick(!click)}
              >
              <IoMdArrowRoundBack style={{fontSize:'0.6em'}}/>  
              </Link>
            )
          }
          
        </div>
    </div>
  )
}

export default Nav