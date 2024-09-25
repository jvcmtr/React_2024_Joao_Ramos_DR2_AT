import {useEffect, useState} from 'react'
import ApiService from '../services/ApiService'
import JsonRenderer from '../components/IA/JsonRenderer';
import UserSumaryCard from '../components/UserSumaryCard';
 
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
    <div style={pageStyle}>
      {users.map(u => (
        <UserSumaryCard user={u}/>
      ))}
    </div>
  )
}

const pageStyle = { 
  display:'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
  gridAutoRows: 'minmax(120px, 180fr)',
  padding: '25px',
  gap: '20px'

}

