import Home from './MyComponents/Home';
import Fixtures from './MyComponents/Fixtures';
import Clubs from './MyComponents/Clubs';
import PlayerProfile from './MyComponents/PlayerProfile';
import Hall_of_Fame from './MyComponents/Hall_of_Fame';
import Liverpool from './MyComponents/Clubs/Liverpool';
import Salah from './Players/Salah';
import Haaland from './Players/Haaland';

import { Route, Routes, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/Fixtures" element={<Fixtures />}/>
        <Route exact path="/Clubs" element={<Clubs />}/>
        <Route path="/Clubs/:id" element={<Liverpool />}/>
        <Route path="/PlayerProfile" element={<PlayerProfile />} />
        <Route path="/Hall_of_Fame" element={<Hall_of_Fame />}/>
        <Route path="/Salah" element={<Salah/>}/>
        <Route path="/Haaland" element={<Haaland />}/>
      </Routes>
    </div>
  )
}

export default App
