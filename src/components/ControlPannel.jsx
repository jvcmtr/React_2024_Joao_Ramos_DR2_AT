import colorPalete from "../palete"
import HomeScreenButton from "./Buttons/HomeScreenButton"
import ThemeToggle from "./Feitos_com_IA/Theme/ThemeSwitch"
import Button from "./Buttons/Button"
import ChangeLayoutButton from "./Buttons/ChangeLayoutButton"

export default function ControllPannel(props){
    const nextLayout = props.layout =='grid'? 'LIST': 'GRID' ;

    return (
        <div className="card" style={container}>
            <HomeScreenButton/>
            <ThemeToggle/>
            <ChangeLayoutButton/>
        </div>
    )
}


const container = {
    flexDirection: 'row',
    width:'20%',
    borderRadius: "50px",
    margin:'30px',
    gap:'10px',
    justifyContent: 'space-evenly',
    backgroundColor: colorPalete.secondary,
    padding: '10px'
}