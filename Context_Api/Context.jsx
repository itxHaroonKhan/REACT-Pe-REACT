import { createContext } from "react";


const MyContext = createContext()



export const MyContextProvser = ({children})=>{
   return(
     <MyContext.Provider value={"Haroon"}>
     {children}
     </MyContext.Provider>
   )

}


export default MyContext