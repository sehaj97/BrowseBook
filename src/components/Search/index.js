import React, { useState } from 'react';

function Search({setData, errorMessage, setErrorMessage, books, setBooks}) {
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
                fetch(`https://openlibrary.org/search.json?title=${query}&fields=title,author_name,isbn,first_publish_year`)
                .then(response => response.json())
                .then(dataObj =>
                    { 
                        setData(dataObj);
                    }
                )
            }
            catch(err){
                setErrorMessage("Error", err)
            }
        }
    }

    function sortByTitle(e){
        e.preventDefault();
        try {
            fetch(`https://openlibrary.org/search.json?title=${query}&fields=title,author_name,isbn,first_publish_year`)
            .then(response => response.json())
            .then(dataObj =>
                { 
                    setData(dataObj);
                    dataObj = dataObj.docs.sort((a, b) => {
                    return a.title.localeCompare(b.title);
                    });
                    setBooks(dataObj)
                }
            )
        }
        catch(err){
            setErrorMessage("Error", err)
        }
    }

    function sortByDate(e){
        e.preventDefault();
        try {
            fetch(`https://openlibrary.org/search.json?title=${query}&fields=title,author_name,isbn,first_publish_year`)
            .then(response => response.json())
            .then(dataObj =>
                { 
                    setData(dataObj);
                    dataObj = dataObj.docs.sort(function(a, b) {
                        return b.first_publish_year - a.first_publish_year;
                      });
                    setBooks(dataObj)
                }
            )
        }
        catch(err){
            setErrorMessage("Error", err)
        }
    }

    return (
        <div>
        
        <div className="wrap">
            <form className="search" autoComplete="off" onSubmit={handleSubmit}>
                <input type="text" className="searchTerm" placeholder="Search any book.." onChange={handleChange} name="input" />
                <button className="searchButton" type="submit">SEARCH</button>
            </form>
        </div>
        {books && (
            <div className="filters">
                <button className="filterButton" onClick={sortByTitle}>Sort By Title</button>
                <button className="filterButton" onClick={sortByDate}>Sort By Published Date</button>
            </div>
            )}
        </div>
    );

}

export default Search;