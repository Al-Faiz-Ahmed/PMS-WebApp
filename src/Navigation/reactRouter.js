import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from '../Pages/login'

const ReactRouter = () => {
  return (
    <Router>
        <Routes>

            <Route path='/' element={<Login />} />
        </Routes>

    </Router>
  )
}

export default ReactRouter