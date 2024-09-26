import colors from '../../palete'

export default function UserSumaryCard(props) {

  return (
    <div style={containerStyle} className={'card'} onClick={props.onClick}>
      <h3 style={{color:colors.highlight}}>{props.user?.company.catchPhrase}</h3>
      <div style={sumaryFooter}>
        <b style={{color: colors.fontDim}}>{props.user.company.name}</b>
        <i style={{color: colors.fontDim}}>{props.user?.name}</i>
      </div>
    </div>
  )
}

const containerStyle = {
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between'
}

const sumaryFooter = {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  color: colors.fontDim,
}
