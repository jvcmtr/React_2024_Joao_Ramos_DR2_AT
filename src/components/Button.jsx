import React from "react"
import colors from "../palete"

export default function Button(props){
    const [hover, setHover] = React.useState(false)
    return(
        <div
            onMouseLeave={()=>setHover(false)}
            onMouseEnter={()=>setHover(true)}
            onClick={props.onClick} 
            style={{
                padding: hover? '7px': '5px',
                backgroundColor: hover? colors.highlight: colors.highlightDim,
                fontWeight: '800',
                transitionDuration: '0.3s'
            }}
        >
            {props.children}
        </div>
    )
}