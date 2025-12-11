




import React, { useContext } from 'react'
import MyContext from './Context'
import A from './Compontes/A'

const App = () => {

  const data = useContext(MyContext)
  return (
    <div>
      <h1>{data}</h1>
      <A/>
    </div>
  )
}

export default App
