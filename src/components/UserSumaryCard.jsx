import colors from '../palete'

export default function UserSumaryCard(props) {
  return (
    <div style={containerStyle}>
      <h3 style={{color:colors.highlight}}>{props.user?.company.catchPhrase}</h3>
      <div style={sumaryFooter}>
        <b style={{color: colors.fontDim}}>{props.user.company.name}</b>
        <i style={{color: colors.fontDim}}>{props.user?.name}</i>
      </div>
    </div>
  )
}

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: '5px',
  padding:"20px",
  border: '1px solid ' + colors.fontDim,
  backgroundColor: colors.secondary
}

const sumaryFooter = {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  color: colors.fontDim,
}
