import React, {useState} from 'react'
import{DUMMY_POSTS} from '../data'

const Dashboard = () => {
 const[post,SetPosts] = useState(DUMMY_POSTS)

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard