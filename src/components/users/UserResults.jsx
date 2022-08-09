import React, { useContext} from 'react'
import UserItem from './UserItem';
import GithubContext from '../context/github/GithubContext';
import Spinner from '../layouts/Spinner'
function UserResults() {

    const {users , loading}  =  useContext(GithubContext)
    if(!loading){

        return (
          <div>
      
              {users.map((item) =>{
                  return(
                     <UserItem key={item.id} user={item} />
                  )
              })}
          </div>
        )
    }else{
        return( <Spinner />)
    }
}

export default UserResults