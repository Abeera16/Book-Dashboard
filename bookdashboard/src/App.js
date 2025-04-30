// App.js
import React from 'react';
import ProfileEditor from './Components/ProfileEditor';
import BookList from './Components/BookList';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>📚 Book Dashboard App</h1>
      <div className="dashboard-sections">
        <ProfileEditor />
        <BookList />
      </div>
    </div>
  );
}

export default App;
