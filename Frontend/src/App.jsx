import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Landing from './assets/Pages/User/Landing'

const App = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Landing/>}/>
            {/* <Route path="/login" element={<Login/>}/> */}
        </Routes>
    </div>
  )
}

export default App