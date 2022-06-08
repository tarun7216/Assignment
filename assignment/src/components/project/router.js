import React from 'react'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import Firstpage from './Firstpage'
import Secondpage from './Secondpage'

const router = () => {
  return (
    <BrowserRouter>
    <Router>
      <Routes>
        <Route path="/" element={<Firstpage />}>
        <Route path="SecondPage" element={<Secondpage />} />

        </Route>
      </Routes>

    </Router>
    </BrowserRouter>
  )
}

export default router
