import { useState } from 'react'
import './App.css'
import colors from './palete'

import FetchData from './components/FetchData'
import Header from './layoutComponents/Header'
import Footer from './layoutComponents/Footer'
import Main from './layoutComponents/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={appStyle}>
      <Header> Joao Ramos DR2 AT </Header>
      <Main>{"."}</Main>
      <Footer></Footer>
    </div>
  )
}

export default App

const appStyle = {
  backgroundColor: colors.terciary,
  conlor: colors.font,
  display: 'grid',
  minHeight: '100vh',
  gridTemplateColumns: '100vw',
  gridTemplateRows: '15vh 1fr 30vh'
}