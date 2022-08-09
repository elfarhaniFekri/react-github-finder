import React from 'react'
import { Link } from 'react-router-dom'
import UserResults from '../users/UserResults'
import UserSearchs from '../users/UserSearchs'
function Home() {
  return (
    <div >

    
         <UserSearchs />
         <UserResults />
      </div>
  )
}

export default Home