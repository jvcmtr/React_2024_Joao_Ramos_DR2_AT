import ControllPannel from '../components/ControlPannel.jsx'
import colors from '../palete.js'

export default function Header(props){
    return (
        <div style={headerStyle}>
                <h1>{props.children}</h1>
        </div>
    )
}

const headerStyle={
    
    padding:'50px',
    textAlign: 'center',

    backgroundColor: colors.secondary,
    color: colors.font,
    fontWeight: '200',
    position: 'sticky'
}