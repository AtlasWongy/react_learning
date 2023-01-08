import './App.css';
import React, { useState } from 'react'
import Title from './component/Title'
import Modal from './component/Modal'
import EventList from './component/EventList'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {title: "mario's birthday bash", id: 1},
    {title: "bowser's livestream", id: 2},
    {title: "race on moomoo farm", id: 3}
  ])

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const subtitle = "All the latest events in mario kingdom"

  return (
    <div className="App">
      <Title title = "Events in your area" subtitle = {subtitle} />

      {showEvents && (
        <div>
          <button onClick={()=>setShowEvents(false)}>Hide Events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={()=>setShowEvents(true)}>Show Events</button>
        </div>
      )}

      {showEvents && <EventList events={events} handleClick = {handleClick}></EventList>}

      <button onClick={() => setShowModal(true)}>Promotions</button>

      {showModal && <Modal handleClose={handleClose} isSalesModal = {true}>
        <h2>10% Off Coupon Code</h2>
        <p>Use the code NINJA10 at the checkout</p>
      </Modal>}

      
    </div>
  );
}

export default App;
