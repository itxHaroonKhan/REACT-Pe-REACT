
import './App.css'
import Card from './components/Card'

function App() {
 

  return (
     <div>
   
      <div>
        {/* <Card 
          tital="Design" 
          num={5.0}
          pragarp="Learn the basics of UX/UI design to start your journey in the digital world."
          name="UX/UI Design 201" 
          Image={{ src: "https://i.pinimg.com/736x/a8/07/04/a80704d39852a3f69c4660d5900b94b8.jpg", alt: "Start Image" }} 
          button="Enroll Now"
          dolar={400}
        /> */}
        <Card 
          tital="Programming" 
          num={5.0}
          pragarp="Master the fundamentals of Python programming for a solid coding foundation."
          name="Introduction to Python" 
          Image={{ src: "https://i.pinimg.com/736x/f2/6f/68/f26f68d1a5fe16234aa903a33abb1b1e.jpg", alt: "Center Image" }} 
          button="Enroll Now"
          dolar={400}
        />
        {/* <Card 
          tital="Business" 
          num={5.0}
          pragarp="Learn the art of analyzing data to make informed business decisions."
          name="Data Analysis for Beginners" 
          Image={{ src: "/Image.png", alt: "End Image" }} 
          button="Enroll Now"
          dolar={400}
        />
      </div> */}

      {/* Row 2 */}
      {/* <div>
        <Card 
          tital="Design" 
          num={5.0}
          pragarp="Learn the basics of UX/UI design to start your journey in the digital world."
          name="UX/UI Design 201" 
          Image={{ src: "/Design.png", alt: "Start Image" }} 
          button="Enroll Now"
          dolar={400}
        /> */}
        {/* <Card 
          tital="Programming" 
          num={5.0}
          pragarp="Master the fundamentals of Python programming for a solid coding foundation."
          name="Introduction to Python" 
          Image={{ src: "/Programmimg.png", alt: "Center Image" }} 
          button="Enroll Now"
          dolar={400}
        />
        <Card 
          tital="Business" 
          num={5.0}
          pragarp="Learn the art of analyzing data to make informed business decisions."
          name="Data Analysis for Beginners" 
          Image={{ src: "/Image.png", alt: "End Image" }} 
          button="Enroll Now"
          dolar={400}
        /> */}
      </div>
    </div>
  )
}



export default App
