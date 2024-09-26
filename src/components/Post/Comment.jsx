import colorPalete from "../../palete"
import { formatarEmail } from "../../utils"
import { useState } from "react"
import ConfirmationModal from "../Buttons/ConfirmationModal"
import DeleteService from "../../services/DeleteService"
import DelButton from "../Buttons/DelButton"

export default function Comment(props){
    const [deleting, setDeleting] = useState(false)

    const deleteComment = (ev) => {
        ev.preventDefault()
        if(!deleting){
            setDeleting(true)
        }
        else{
            DeleteService.deleteComment(props.comment.id)
        }
    }


    if(!props.comment){
        return (<p>Carregando ...</p>)
    }

    return (
        <div style={container}>
            <div style={{width:'80px', alignSelf:'start'}}>
                <DelButton onClick={deleteComment}> Excluir </DelButton>
            </div>
            <b style={header}>{props.comment.name}</b> 
            <p style={textStyle}>{props.comment.body}</p>
            <i style={name}>{formatarEmail(props.comment.email)} </i>
            {
                deleting? 
                (<ConfirmationModal 
                    message={" Você tem certeza que deseja excluir o comentario de "+ props.comment.email}
                    onOk={deleteComment}
                    onCancel={()=> setDeleting(false)}
                />) : ""
            }
        </div>
    )
}

const container = {
    display:'flex',
    padding: '20px',
    flexDirection: 'column',
    borderBottom: '1px solid '+ colorPalete.fontDim,
}

const header = {
    textAlign: 'center',
}

const name = {
    fontSize:'small', 
    padding:'2px',
    textAlign: 'right'
}
const textStyle = {
    margin:'2px',
    fontSize: 'small'
}