import {useState, useEffect} from "react"
import colorPalete from "../../palete";
import Comment from "./Comment";
import ApiService from "../../services/ApiService";
import { formatarEmail } from "../../utils";
import DeleteService from "../../services/DeleteService";


export default function Post(props){
    const [comments, setComments] = useState([]);
    const [showC, setShowC] = useState(false)
 
    useEffect(()=>{
        if(props.post){
            init()
        }
        DeleteService.subscribe(init)
    },[])
  
    const init = async () =>{
      const response = await ApiService.getComments(props.post.id)
      const comments = DeleteService.filterComments(response)
      setComments(comments)
    }

    const toggleComments = () =>{
        setShowC(!showC)
    }
    if(!props.post){
        return (<p>Carregando ...</p>)
    }

    return (
        <div className="card" style={container} onClick={toggleComments}>
            <h2 style={title}>{props.post.title}</h2>
            <p>{props.post.body}</p>
            <div style={footer}>
                <b style={{color: colorPalete.fontDim}}>{props.user.company.name}</b>
                <i style={{color: colorPalete.fontDim}}>{props.user?.nameE}</i>
            </div>
            <div style={commentSectionStyle(showC)}>
                {
                    comments.map((c, k) =>(<Comment key={c.id} comment={c}/>))
                }
            </div>
        </div>
    )
}

const commentSectionStyle = (show) =>{
    return {
        height: show? "40vh" : "0vh",
        overflow: show? 'scroll': 'hidden',
        transitionDuration: '0.8s',
        transitionTimingFunction: 'ease-in-out',
        backgroundColor: colorPalete.primary
    }
}

const container = {
    flexDirection: 'column',
    gap:'10px',
    color: colorPalete.font
}
const title = {
    color: colorPalete.highlight,
    borderBottom: '1px solid ' + colorPalete.fontDim,
}

const footer = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: colorPalete.fontDim,
    borderBottom: '1px solid ' + colorPalete.fontDim,
    paddingTop: '10px'
  }