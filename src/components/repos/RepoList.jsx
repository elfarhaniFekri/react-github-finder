import React, {useContext} from 'react'
import GithubContext from '../context/github/GithubContext'
function RepoList() {

    const { repos , loading } = useContext(GithubContext);


    if(!loading) {
        return(
            {repos}
        )
    }
  return (
    <div>RepoList</div>
  )
}

export default RepoList