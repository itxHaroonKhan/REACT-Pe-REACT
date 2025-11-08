import React from 'react'

const Data = ({ Popup, setPopup }) => {
  return (
    <div>
      {Popup && (
        <div className="bg-black/50 h-screen w-screen left-0 top-0 absolute flex justify-center items-center z-50">
          {/* Close button */}
          <button
            onClick={() => setPopup(false)}
            className="absolute top-[1rem] right-[2rem] bg-white text-red-600 px-3 py-1 rounded shadow"
          >
            Close
          </button>

          {/* Popup box */}
          <div className="w-full max-w-[22rem] h-auto bg-white rounded-xl flex flex-col justify-center items-center shadow-lg p-6 gap-4">
            <p className="text-black text-lg font-semibold text-center">
              Are you sure you want to delete this?
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => setPopup(false)}
                className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 transition"
              >
                No
              </button>

              <button
                onClick={() => {
                  alert('Item deleted!') // delete ka action yahan likh sakte ho
                  setPopup(false)
                }}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Data
