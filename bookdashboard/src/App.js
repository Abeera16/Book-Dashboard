// App.js
import React from 'react';
import ProfileEditor from './Components/ProfileEditor';
import BookList from './Components/BookList';
import './App.css';
import RoleSwitcher from "./Components/RoleSwitcher";

function App() {
  return (
    <div className="app-container">
      <h1>📚 Book Dashboard App</h1>
      <RoleSwitcher /> {/* 👈 Role toggle button added here */}
      <div className="dashboard-sections">
        <ProfileEditor />
        <BookList />
      </div>
    </div>
  );
}

export default App;
