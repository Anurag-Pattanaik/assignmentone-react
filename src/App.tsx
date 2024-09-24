import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserTable from './components/Users/UserTable';
import { users } from './components/Users/userData';
function App() {

  return (
    <div className="App">
      <UserTable users={users}/>
    </div>
  );
}

export default App;
