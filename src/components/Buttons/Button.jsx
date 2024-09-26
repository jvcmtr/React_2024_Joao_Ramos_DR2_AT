import React from "react"
import colors from "../../palete"

export default function Button(props){
    const [hover, setHover] = React.useState(false)

    const handle = (ev) =>{
        ev.stopPropagation()
        if(props.onClick)
            props.onClick(ev)
    }
    return(
        <div
            onMouseLeave={()=>setHover(false)}
            onMouseEnter={()=>setHover(true)}
            onClick={handle} 
            style={buttonStyle( hover, props.style, props.onHoverStyle)}
        >
            {props.children}
        </div>
    )
}

const buttonStyle = (hover, propsStyle, hoverStyle) =>{
    let baseStyle = {
        color: colors.highlightContrast,
        padding: hover? '7px': '5px',
        backgroundColor: hover? colors.highlight: colors.highlightDim,
        fontWeight: '800',
        transitionDuration: '0.3s',
        textAlign: 'center',
        ...propsStyle
    }
    if(hover){
        return {...baseStyle, ...hoverStyle}
    }
    return baseStyle
}