import React, { useEffect, useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Search from './components/Search';
import Cards from './components/Cards';

function App() {
  
  const [data, setData] = useState(null);
  
  const [errorMessage, setErrorMessage] = useState('');
  
  const [books, setBooks] = useState(null);
  useEffect(()=>{
    if(data){
      setBooks(data.docs);
    }
  }, [data]);
  return (
    <div className="App">
      <Nav/>
      <h1 className="header">Look Up Books</h1>
      <Search
        setData={setData}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
        books={books}
        setBooks={setBooks}
      />
      
      {
        (data && !errorMessage) && (
          <Cards books={books} numFound={data.numFound}/>
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
