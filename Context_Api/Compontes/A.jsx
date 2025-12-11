import React, { useContext } from 'react'
import MyContext from '../Context'

const A = () => {
    const data = useContext(MyContext)
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eveniet non, deleniti sapiente, quas possimus reiciendis minus, distinctio dolore cum eum accusantium laboriosam. Itaque temporibus cumque vitae eius ratione officiis. <strong> {data} </strong>
    </div>
  )
}

export default A
