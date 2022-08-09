import React,{ useContext, useState} from 'react';
import GithubContext from '../context/github/GithubContext';

import { searchUsers } from '../context/github/GithubActions'
function UserSearchs() {
    const [text , setText] = useState('');

    const {dispatch , state} = useContext(GithubContext);

  let datax;
    const handleChange = (e) => setText(e.target.value)


    const handleSubmit = async (e) =>{
        
       e.preventDefault();
       console.log('hhhhh', text)
       if(text === ''){
           // error action
        // setText('hjjhjkkjkj')
       
       }else{

         datax = await searchUsers(text);
        
          dispatch({
            type: 'GET_USERS', 
            payload : datax 
          }) 
              }
              setText('')
              console.log('sat' , datax)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
         <input type={'text'} 
               placeholder="enter a name"
               value={text}
               onChange={ handleChange}
         />
                <button 
                            style={{backgroundColor: 'green', 
                            color : 'white', 
                            padding : '20px'}}
                           
                >
             submit
         </button>
        </form>
    </div>
  )
}

export default UserSearchs