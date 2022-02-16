import axios from 'axios';
import React, { useEffect, useState } from 'react';

const BookList = (props) => {
    console.log(props.bookAdded);

    const [books, setBooks] = useState([]);

    const getBooks = () => {
        axios.get('https://localhost:44380/Books')
        .then((response)=> {
            setBooks(response.data)
        })
    }

    useEffect(() => {
        getBooks();
    }, [props.bookAdded]);

    return (
        <div>
            {books.map((book) => {
                return <div>{book.name} by {book.author} is ${book.price} under the genre of {book.category}</div>
            })}
        </div>
    )
}

export default BookList;