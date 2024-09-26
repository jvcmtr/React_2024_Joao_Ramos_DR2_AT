import './PageLayout.css'
import {useEffect, useState} from 'react'
import ApiService from '../services/ApiService'
import JsonRenderer from '../components/Feitos_com_IA/JsonRenderer/JsonRenderer';
import UserSumaryCard from '../components/User/UserSumaryCard';
 
export default function UsersPage(props) {
  const [users, setUsers] = useState([]);
 
  useEffect(()=>{
    init()
  },[])

  const init = async () =>{
    const response = await ApiService.getUsers()
    setUsers(response)
  }

  return (
    <div id='layout' className='grid'>
      {users.map(u => (
        <UserSumaryCard 
          onClick={()=>props.changePage(props.pages.userDetails, {user: u} )}
          user={u}/>
      ))}
    </div>
  )
}

