import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayok = ["Manna", "Sakib Khan", "Salman Khan","Amirul Khan"];
  const nayokName = nayok.map(name =>name);
  console.log(nayokName);
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Counter></Counter>
        <Users></Users>
      </header>
    </div>
  );
  
}
function Counter(){
    
  const [count, setCount] = useState(10);
  console.log(setCount);
  return(
    <div>
      <h1>Count : {count}</h1>
      <button onClick = { () => setCount( count - 1)} >Decrease</button>
      <button onClick = { () => setCount( count + 1)} >increase</button>
    </div>
  )
}

function Users(){
  const[user, setUser] = useState([]);
  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUser(data))
  },[])
  return(
    <div>
      <h3>Dynamic Data : {user.length}</h3>
      <ul>
        {
          user.map(user => <li>{user.name}</li>)
        }
      </ul>
      </div>
  )
}



export default App;
