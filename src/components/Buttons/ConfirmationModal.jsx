import colorPalete from "../../palete"
import Button from "./Button"

export default function ConfirmationModal(props){

    return (
        <div style={overlay} onClick={(ev)=> ev.stopPropagation()}>
            <div className="card" style={container}>
                <p> {props.message} </p>
                <Button onClick={props.onOk}> Sim </Button>
                <Button onClick={props.onCancel}> Não </Button>
            </div>
        </div>
    )
}


const container = {
    flexDirection: 'column',
    gap:'10px',
    justifyItems: 'space-evenly',
    color: colorPalete.font,
    backgroundColor: colorPalete.secondary,
    
    zIndex: '11',
}

const overlay = {
    position: 'fixed',
    top:"0",
    right: "0",
    bottom: "0",
    left: "0",
    zIndex: '10',
    
    height: '100vh',
    width:'100vw',
    backgroundColor: colorPalete.terciary +  "80",

    display: 'flex',
    alignItems:'center',
    justifyContent: 'center'
}