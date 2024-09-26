import IconButton from "./IconButton"


export default function HomeScreenButton(props){
    return(
        <IconButton icon="bi bi-house-door" onClick={() => window.location.href = "/"}/>
    )
}