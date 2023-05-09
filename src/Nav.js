import React, { useEffect, useState } from 'react'
import './Nav.css'
import { useNavigate } from 'react-router-dom';


const  Nav = () => {

  const navigate = useNavigate();
  const [show, handleShow] = useState(false);

  const transitionNavBar = () =>{
    if(window.scrollY > 100) {
      handleShow(true)
    }else{
      handleShow(false)
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll',transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar)
  },[])

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className='nav_contents'>
          <img 
                onClick={()=> navigate('/')}
                className='nav_logo'
                src="https://github.com/AntonioErdeljac/next-netflix-tutorial/blob/master/public/images/logo.png?raw=true" 
                alt="" />
          <img 
                onClick={()=> navigate('/profile')}
                className='nav_avatar'
                src="https://github.com/AntonioErdeljac/next-netflix-tutorial/blob/master/public/images/default-blue.png?raw=true"
                alt=""
          />      
      </div>


    </div>
  )
}

export default  Nav