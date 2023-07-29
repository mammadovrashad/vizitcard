import React, { useState } from 'react'
import Home from './pages/Home'
import './App.css'
import {store} from './context/store'


const App = () => {
  const [fileUrl,setFileUrl]=useState([]);
  const [image,setImage]=useState([]);
  return (
    <store.Provider value={{fileUrl,setFileUrl,image,setImage}}>
     <Home/>
    </store.Provider>
  )
}

export default App