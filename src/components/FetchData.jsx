import { useState, useEffect } from 'react'
import Api from '../services/ApiService'
import JsonRenderer from './IA/JsonRenderer'

export default function FetchData(props) {
  const [users, setUsers] = useState()
  const [posts, setPosts] = useState()
  const [comments, setComments] = useState()

  useEffect(()=>{
    initData();
  }, [])

  const initData = async () => {
    const idUser = props.idUser || 1
    setUsers( await Api.getUsers())
    setPosts( await Api.getPosts(idUser))

    const idPost = posts? post[0].Id : 1
    setComments(await Api.getComments(idPost))
  }

  return (
    <div>
      <h1>Users</h1>
      {users? <JsonRenderer data={users}/> : "loading ..."}
      <h1>Posts</h1>
      {posts? <JsonRenderer data={posts}/> : "loading ..."}
      <h1> Comments</h1>
      {comments? <JsonRenderer data={comments} />  : "loading ..."}
    </div>
  )
}
