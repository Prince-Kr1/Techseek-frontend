import HomePage from "./Pages/HomePage"
import FindJobs from "./Pages/FindJobs"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './index.css'
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>

       <Routes>
        <Route path="/find-jobs" element={<FindJobs/>} />
        <Route path="*" element={<HomePage/>} />
      </Routes>

      <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
