import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { SampleEvents } from './services/MockData'
import EventCard from './components/EventCard'

function App() {
  const [tempData] = useState(SampleEvents)

  return (
    <>
      <Navbar />
      <p style={{marginTop: 150}}>Hello world</p>
      {SampleEvents.map((event, index) => (
        <EventCard event={event} key={index}/>
      ))}
    </>
  )
}

export default App
