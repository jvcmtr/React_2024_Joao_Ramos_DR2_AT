import colorPalete from '../../palete'
import colors from '../../palete'
import JsonRenderer from '../Feitos_com_IA/JsonRenderer/JsonRenderer'

export default function UserDetailsCard(props) {


  if(!props.user){
    return (
      <div style={containerStyle} className={'card'}>
        <h4> Houve um erro</h4>
      </div>
    )
  }

  return (
    <div style={containerStyle} className={'card dynamicDirection'} onClick={props.onClick}>
      <div style={section}> 
        
      <span style={title}> Usuario </span>
        <div style={entry}>
          <div style={keyStyle}>Nome : </div>
          <div style={valueStyle}>{props.user.name} <span style={keyStyle}> {`[${props.user.username}]`}</span></div>
        </div>

        <div style={entry}>        
          <div style={keyStyle}>Cidade : </div>
          <div style={valueStyle}>{props.user.address.city} <span style={keyStyle}>{`[${props.user.address.zipcode}]`} </span></div>
        </div>

        <div style={entry}>
          <div style={keyStyle}>Email : </div>
          <div style={valueStyle}>{props.user.email}</div>
        </div>

        <div style={entry}>
          <div style={keyStyle}>Telefone : </div>
          <div style={valueStyle}>{props.user.phone}</div>
        </div>
      </div>

      <div style={section}> 
        <span style={title}> Compania </span>
        <div style={entry}>
          <div style={keyStyle}> Nome </div>
          <div style={valueStyle}>{props.user.company.name}</div>
        </div>
        <div style={entry}>
          <div style={keyStyle}>Lema : </div>
          <div style={valueStyle}>{props.user.company.catchPhrase}</div>
        </div>
        <div style={entry}>
          <div style={keyStyle}>Especialidade : </div>
          <div style={valueStyle}>{props.user.company.bs}</div>
        </div>
        <div style={entry}>
        <div style={keyStyle}>url : </div>
          <div style={valueStyle}>{props.user.website}</div>
        </div>
      </div>
    </div>
  )
}

const containerStyle = {
  alignItems: 'start',
  gap:'20px',
  color: colorPalete.font
}

const entry = {
  display: 'flex',
  flexDirection:'row',
  alignItems:'end',
  gap: '5px'
}
const keyStyle={
  fontSize: 'small',
  color: colorPalete.fontDim,
}
const valueStyle = {

}


const section = {
  borderLeft: '1px solid ' + colorPalete.fontDim,
  height: '80%',
  padding: '20px',
}
const title = {
  fontSize: 'larger',
  fontWeight: '600',
  color: colorPalete.highlight
}