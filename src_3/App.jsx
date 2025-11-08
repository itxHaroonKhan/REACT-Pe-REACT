import { useState } from 'react'
import './App.css'
import Data from './componts/Data'

function App() {
  const [Popup, setPopup] = useState(false)

  return (
    <>
      <button
        onClick={() => setPopup(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded mt-5 ml-5 hover:bg-blue-700 transition"
      >
        Delite
      </button>


      <button
        onClick={() => setPopup(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded mt-5 ml-5 hover:bg-blue-700 transition"
      >
        Edit
      </button>

      <Data Popup={Popup} setPopup={setPopup} />
    </>
  )
}

export default App
