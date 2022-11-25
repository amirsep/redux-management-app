import './App.css';
import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Book from './book';
import User from './user';
import Api from './api';
import Alldata from './alldata';

function App() {
  return (
    <HashRouter>
      <ul id='topnav'>
        <li>
          <Link to='' className='mylink'>
            Book Management
          </Link>
        </li>
        <li>
          <Link to='user' className='mylink'>
            User Management
          </Link>
        </li>
        <li>
          <Link to='api' className='mylink'>
            Api Management
          </Link>
        </li>
        <li>
          <Link to='alldata' className='mylink'>
            All Store Data
          </Link>
        </li>
      </ul>

      <Routes>
        <Route exact path='/' element={<Book />} />
        <Route exact path='/user' element={<User />} />
        <Route exact path='/api' element={<Api />} />
        <Route exact path='/alldata' element={<Alldata />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
