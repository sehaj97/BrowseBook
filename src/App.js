import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav';
import Search from './components/Search';

function App() {
  
  const [data, setData] = useState(null);
  
      
  if(data){
    console.log("dataobj: ",data);
  };
  return (
    <div className="App">
      <Nav/>
      <Search 
        data={data}
        setData={setData}
      />
    </div>
  );
}

export default App;
