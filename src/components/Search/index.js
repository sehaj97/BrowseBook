import React, { useState, useEffect } from 'react';

function Search({data, setData}) {
    const [query, setQuery] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
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
        console.log("err",errorMessage);
        console.log(query);
        fetch(`http://openlibrary.org/search.json?title=${query}&fields=title,author_name,isbn,first_publish_year,availability&limit=10`)
        .then(response => response.json()).then(dataObj => setData({dataObj}))
      }
    return (
        <div class="wrap">
            
            <form className="search" onSubmit={handleSubmit}>
                <input type="text" className="searchTerm" placeholder="Search any book.." onChange={handleChange} name="query" />
                <button className="searchButton" type="submit"><i className="fa fa-search"></i></button>
            </form>
        </div>
    );
}

export default Search;