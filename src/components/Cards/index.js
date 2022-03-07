import React, { useEffect } from 'react';

function Cards ({data}){
  const books = data.docs
    return(
        <>
        {
        (data.numFound === 0) ? 
            (
                <h2 className="header">No results Found. Look up something else</h2>
            )
        :
            (
                <h2 className="header">{data.numFound} results Found</h2>
            )
        }
            { books && (<div className="row" > 
                {books.map((book, index) => (
                <div className="column" > 
                        <div className="card" > 
                         <h2> {book.title}</h2>
                         <img
                            src={book.isbn?`https://covers.openlibrary.org/b/isbn/${book.isbn[0]}-L.jpg`: require(`../../assets/images/nobook.jpg`)}
                            alt={book.title}
                            className="img-fit"
                            key={book.title}
                        />
                            {book.author_name && (<h3>By: {book.author_name[0]}</h3>)}
                            {book.first_publish_year && (<p>Published On: {book.first_publish_year}</p>)}
                            {book.isbn && (<p>isbn: {book.isbn[0]}</p>)}
                        </div>
                </div>
            ))}
            </div>)}
        </>
    )
}

export default Cards