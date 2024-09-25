import colors from '../palete.js'
import Button from '../components/Button.jsx'

export default function Footer(props){
    return (
        <div style={footerStyle}>
            <div style={columnStyle}>
                <span>Joao Ramos DR2 AT </span> 
                <span> Fundamentos de React, professor Kennedy Carvalho </span> 
                <span> Instituto Infnet, 2024</span>
            </div>
            <div style={columnStyle}>
                <Button onClick={()=>navigate('https://github.com/jvcmtr')}>Github</Button>
                <Button onClick={()=>navigate('https://www.linkedin.com/in/joao-cicero/')}>LinkedIn</Button >
            </div>
        </div>
    )
}

const footerStyle={ 
    
    display:'flex',
    flexDirection: 'row',
    alignItems:' center',
    justifyContent:' space-evenly',
    gap:' 10vw',
    padding:' 10px',
    
    backgroundCollor: colors.secondary,
    fontColor: colors.fontDim,
    fontSize: 'small',
    fontWeight: '600'
}

const columnStyle = {
    display:'flex', 
    flexDirection:'column', 
    gap:'5px'
}