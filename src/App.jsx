import { useState } from 'react'
import viteLogo from '/vite.svg'
import Navbar from "./components/organisms/Navbar"
import Intro from "./components/organisms/Intro"
import ProjectCard from "./components/organisms/ProjectCard"
import './App.css'

function App() {


  return (
    <>
      <Navbar />
      <Intro />
      <ProjectCard />
    </>
  )
}

export default App
