import { BrowserRouter } from "react-router-dom"
import Home from "./Components/Home"

export default function Router () {
  return(
    <>
      <BrowserRouter>
        <Home />
      </BrowserRouter>  
    </>
  )
}