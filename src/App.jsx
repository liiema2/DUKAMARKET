import { useState } from 'react'

import Home from "./components/header"

import Banner from './components/Banner'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Index></Index>   */}
     <Home></Home>
      <Banner></Banner>
    </>
  )
}

export default App
