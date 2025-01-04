import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Navbar2 from './component/Navbar2'

import Home from './component/Home.jsx'
import Contact from './component/Contact.jsx'
import Blog from './component/Blog.jsx'
import Login from './component/Login.jsx'
import About from './component/About.jsx'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Footer from './component/Footer.jsx'
import UseEffect from './component/UseEffect.jsx'
import UseMemo from './component/UseMemo.jsx'
import SignUp from './component/back_end/Signup.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
  
    <BrowserRouter>
    <Navbar2/>
    <Routes>
      <Route path="/" element={<Navbar/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/about" element={<About/>}/>
      </Routes><br></br><br></br>
      <SignUp/>
      <UseEffect/>
      <br></br>
      <Footer/>
      <UseMemo/>
      </BrowserRouter>


    
  )
}

export default App