import { useState } from 'react'
import viteLogo from '/vite.svg'
import Navbar from "./components/organisms/Navbar"
import ProjectCard from "./components/organisms/ProjectCard"
import './App.css'

function App() {


  return (
    <>
      <Navbar />

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div> */}
      
      <ProjectCard />
    </>
  )
}

export default App
