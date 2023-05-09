import React from 'react'
import './ProfileScreen.css'
import Nav from '../Nav'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'
const ProfileScreen = () => {
  const navigate = useNavigate()
  const user = useSelector( selectUser)
  console.log(user)

  function signOut(){
    auth.signOut()
    navigate('/')
  } 

  return (
    <div className='profileScreen'>
      <Nav />
      <div className='profileScreen__body'>
        <h1>Edit Profile</h1>
        <div className='profileScreen__info'>
          <img 
            src="https://github.com/AntonioErdeljac/next-netflix-tutorial/blob/master/public/images/default-blue.png?raw=true"
            alt="" 
          />
          <div className='profileScreen__details'>
            <h2>{user.email}</h2>
            <div className='profileScreen__plans'>
              <button
              onClick={()=> signOut()} 
              className='profileScreen__signOut'>Sign Out</button>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default ProfileScreen