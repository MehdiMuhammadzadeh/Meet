import { BrowserRouter , Routes, Route } from "react-router-dom"
import MainNavigation from "./shared/Navigation/MainNavigation"
import Home from "./pages/Home"
import MeetCalendar from "./pages/MeetCalendar"



const App =()=> {
 
  return (
   <BrowserRouter>
   <MainNavigation />
    <Routes>
    <Route path="" element={<MeetCalendar />}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App

