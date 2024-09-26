import './PageLayout.css'
import {useEffect, useState} from 'react'  
import ApiService from '../services/ApiService'
import UserDetailsCard from '../components/User/UserDetailsCard';
import Post from '../components/Post/Post';
 
export default function UserDetailsPage(props) {
  const [posts, setPosts] = useState();
  const [user, setUser] = useState();

  if (!props.user){
    return( <div style={pageStyle}>  <h1>Usuario não encontrado</h1> </div>)
  }
 
  useEffect(()=>{
    if(props.user){    
        init()
    }
  },[])

  const init = async () =>{
    setUser(props.user)
    const p = await ApiService.getPosts(props.user.id)
    setPosts(p)
  }

  return (
    <div className={'list'}>
        {
          user? <UserDetailsCard user={user}/> : ""
        }      
        <div id='layout1' className={'list'}>
        {
            posts?.map(p => (
                <Post post={p} user={user} />
            ))
        }
        </div>
    </div>
  )
}

