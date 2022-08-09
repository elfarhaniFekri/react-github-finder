import axios from 'axios';


const GITHUB_URL = 'https://api.github.com';
const github = axios.create({
    baseURL: GITHUB_URL,
    
  })
export const searchUsers = async (key) =>{

    const searchparam = new URLSearchParams({
        q : key
    })
    const response = await github.get(`/search/users?${searchparam}`);
    return response.data.items;
}

export const getUserAndRepos = async (login) =>{
    const [user, repos] = await Promise.all([
        github.get(`/users/${login}`),
        github.get(`/users/${login}/repos`),
      ])
     return{
         user : user.data,
         repos : repos.data
     }
}