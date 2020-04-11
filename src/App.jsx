import React from 'react'
import './App.css'
import Header from './components/Header'
import Welcome from './components/Welcome'
import { Container, Title } from 'bloomer'

function App() {
  
  const doThing = () => {
    console.log('The thing was done!')
  }

  return (
    <>
      <Header />
      <Welcome />
    </>
  )
}

export default App
