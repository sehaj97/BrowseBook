import React, { useState, useEffect } from 'react';

function Search({data, setData, errorMessage, setErrorMessage}) {
    const [query, setQuery] = useState('');
    function handleChange(e) {
        if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
          } else {
            setErrorMessage('');
          }
        
        if (!errorMessage) {
            setQuery(e.target.value);
        }
      }
      function handleSubmit(e) {
        e.preventDefault();
        
        if (!query) {
            setErrorMessage(`input is required.`);
          } else {
            setErrorMessage('');
            
        try {
            fetch(`http://openlibrary.org/search.json?title=${query}&fields=title,author_name,isbn,first_publish_year`)
        .then(response => response.json())
        .then(dataObj =>setData(dataObj))
        }
        catch(err){setErrorMessage("Error", err)}
          }
      }
    return (
        <div className="wrap">
            
            <form className="search" autoComplete="off" onSubmit={handleSubmit}>
                <input type="text" className="searchTerm" placeholder="Search any book.." onChange={handleChange} name="input" />
                <button className="searchButton" type="submit">SEARCH</button>
            </form>
        </div>
    );
}

export default Search;