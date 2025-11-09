import { useState } from 'react'
import './App.css'
import Data from './componts/Data' 

function App() {
  // ✅ single popup state, but we’ll control message dynamically
  const [popup, setPopup] = useState(false)
  const [title, setTitle] = useState('')

  return (
    <>
      {/* Delete Button */}
      <button
        onClick={() => {
          setTitle('Are you sure you want to Delete this?') // ✅ spelling fix
          setPopup(true)
        }}
        className="bg-blue-600 text-white px-4 py-2 rounded mt-5 ml-5 hover:bg-blue-700 transition"
      >
        Delete
      </button>

      {/* Edit Button */}
      <button
        onClick={() => {
          setTitle('Are you sure you want to Edit this?')
          setPopup(true)
        }}
        className="bg-green-600 text-white px-4 py-2 rounded mt-5 ml-5 hover:bg-green-700 transition"
      >
        Edit
      </button>

      {/* ✅ Only one Data component (no duplication) */}
      <Data Popup={popup} setPopup={setPopup} title={title} />
    </>
  )
}

export default App
