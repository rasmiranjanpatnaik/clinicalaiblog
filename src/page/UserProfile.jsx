import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../images/avatar15.jpg'
import { TbPhotoEdit } from "react-icons/tb";
import { FaUserCheck } from "react-icons/fa";

const UserProfile = () => {
  const [avatar, setAvater] = useState(Avatar)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] =useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')
  
  


  return (
      <section className='profile'>
        <div className='container profile__contaoiner'>
          <Link to= {'/myposts/sdfsdf'} className='btn'>My Posts</Link>

          <div className='profile__details'>
            <div className='avatar__wrapper'>
              <div className='profile__avatar'>
                <img src={avatar} alt=''/>
              </div>
              <form className='avatar__form'>
                <input type='file' name='avatar' id='avater' onChange={e => setAvater(e.target.files[0])} 
                accept='png, jpg, jpeg'/>
                  <label htmlFor='avatar'><TbPhotoEdit /></label>
              </form>
              <button className='profile__avatar-btn'><FaUserCheck/></button>
            </div>

            <h1>Randam Name </h1>


            {/* form  to update user details*/}
            <form className='form profile__form'>
              <p className='form__error-message'>This is an error message</p>
              <input type='text' placeholder='Full Name' value={name} onChange={e => setName(e.target.value)}/>
              <input type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
              <input type='password' placeholder='Current password' value={currentPassword} onChange={e => setCurrentPassword(e.target.value)}/>
              <input type='password' placeholder='New password' value={newPassword} onChange={e => setNewPassword(e.target.value)}/>
              <input type='password' placeholder='Confirm new password' value={confirmNewPassword} onChange={e => setConfirmNewPassword(e.target.value)}/>
                 <button type='submit' className='btn primary'>Update my details</button>
            </form>
          </div>
        </div>
      </section>
  )
}

export default UserProfile