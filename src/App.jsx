import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ParticleBackground from './components/ParticleBackground'

export default function App() {
  return (
    <div className="min-h-screen bg-black relative">
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </div>
    </div>
  )
}
