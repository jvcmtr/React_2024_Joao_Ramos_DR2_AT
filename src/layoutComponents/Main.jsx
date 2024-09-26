import colors from '../palete.js'
import React from 'react'
import pages from '../pages/PagesMap.js'
import ControllPannel from '../components/ControlPannel.jsx'

export default function Main(props){
    const [currentTab, setTab] = React.useState()

    React.useEffect(()=>{
        changeTab(pages.usersPage)
    },[])

    const changeTab = (page, props={}) =>{
        setTab( React.createElement(page, { ...props, pages:pages, changePage:changeTab }) )
    }

    return (
        <div>
            <ControllPannel/>
            {currentTab? 
                currentTab: (<h3> Carregando ... </h3>)
            }
        </div>
    )
}

