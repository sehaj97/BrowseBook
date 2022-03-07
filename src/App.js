import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Search from './components/Search';
import Cards from './components/Cards';

function App() {
  
  const [data, setData] = useState(null);
  
  const [errorMessage, setErrorMessage] = useState('');
  return (
    <div className="App">
      <Nav/>
      <h1 className="header">Look Up Books</h1>
      <Search 
        data={data}
        setData={setData}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />
      {
        (data && !errorMessage) && (
          <Cards data={data} /> 
          )
      }
      
      { errorMessage && (
        <h2 className="header">{errorMessage}</h2>
        )
      }
      
      { !data && (
        <h2 className="header">search in the above field to view data</h2>
        )
      }
    </div>
  );
}

export default App;
