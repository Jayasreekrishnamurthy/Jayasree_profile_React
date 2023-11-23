import { useState } from "react";
import "./App.css"
import Navbar from "./components/navbar/Navbar"
import Home from "./components/Home/Home"
import Skills from "./components/Skills"
import Experience from "./components/Exeperience/Experience";
import Education from "./components/Education/index"
import Certificate from "./components/Certificate/certificate"


function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)
  return (

    <div className="App">
      
     <Navbar/>
   <Home/>
   <Skills/>
   <Experience/>
   <Certificate openModal={openModal} setOpenModal={setOpenModal}/>
   {/* <Education/> */}
   </div>
   
  );
}

export default App;
