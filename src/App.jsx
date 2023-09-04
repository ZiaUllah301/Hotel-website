import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './Component/FrontPage/Navbar'
import Footer from './Component/FrontPage/Footer'
import Firstpage from './Component/FrontPage/Firstpage'
import Room from './Component/Rooms/room'
import Facilities from './Component/Faculties/facilities'
import Contacts from './Component/Contacts/Contacts'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Navbar/>

    <Routes>
      <Route path='/' element={<Firstpage/>}/>
      <Route path='/rooms' element={<Room/>}/>
      <Route path='/facilities' element={<Facilities/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    

    </>
  )
}

export default App
