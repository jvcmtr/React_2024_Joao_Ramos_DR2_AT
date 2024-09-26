import Button from "./Button"
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function HomeScreenButton(props){
    return(
        <Button style={{ borderRadius:'25px', minWidth:'55px'}} onClick={props.onClick}>
            <i class={props.icon}> </i>
            {props.children}
        </Button>
    )
}