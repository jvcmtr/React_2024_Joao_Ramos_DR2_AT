import Button from "./Button"


export default function DelButton(props){
    return(
        <Button 
            style={delButton}
            onHoverStyle={onHover} 
            onClick={props.onClick}> 
                {props.children}
        </Button>
    )
}

const delButton = {
    backgroundColor: "#ff4040",
    padding: "2px",
    fontSize: 'x-small',
    fontWeight: '800',
}
const onHover = {
    backgroundColor: "#ff2020"
}