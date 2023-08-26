import './App.css';
import NavigationBar from './components/NavigationBar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import DatabaseState from './context/databaseContext/database.state';
import { Routes, Route } from 'react-router-dom';
import AllEvents from './pages/AllEvents';
import IndividualEvent from './pages/IndividualEvent';
import AllPreEvents from './pages/AllPreEvent';
import React, { useEffect } from 'react';

function App() {


  return (
    <DatabaseState>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/allEvents' element={<AllEvents />} />
          <Route path='/allpreEvents' element={<AllPreEvents />} />
          <Route path="/event/:title" element={<IndividualEvent />} />
        </Routes>
        <Footer />

      </div>
    </DatabaseState>

  );

}

export default App;
