import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginPage } from './Pages/Login/Login';
import { UserListPage } from './Pages/UserList/UserList';
import { HomePage } from './Pages/Home/Home';
import { UserDetailsPage } from './Pages/UserDetails/UserDetails';
import { OrganismSideNavBar } from "library-tfm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login"  element={<LoginPage/>} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/user-list" element={<UserListPage/>} />
        <Route path="/user/:id" element={<UserDetailsPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
