import colors from '../palete.js'

export default function Header(props){
    return (
        <div style={headerStyle}>
            <h1>{props.children}</h1>
        </div>
    )
}

const headerStyle={
    textAlign: 'center',

    backgroundColor: colors.secondary,
    fontWeight: '200',
    position: 'sticky'
}