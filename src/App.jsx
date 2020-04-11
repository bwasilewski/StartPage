import React from 'react'
import './App.css'
import Header from './components/Header'
import { Container, Title } from 'bloomer'

function App() {
  
  const doThing = () => {
    console.log('The thing was done!')
  }

  return (
    <div>
      <Header />
      <Container>
        <Title isSize="1">Welcome, Ben!</Title>
      </Container>
    </div>
  )
}

export default App
