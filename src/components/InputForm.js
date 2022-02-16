import React, { useState } from "react";
import axios from 'axios';

const InputForm = (props) => {

    const [bookName, setBookName] = useState("");
    const [price, setPrice] = useState(0);
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    const [status, setStatus] = useState(false);


  const addBook = () => {
    const book = {
        "name": bookName,
        "price": price,
        "author": author,
        "category": category
    }

    console.log(book)

    axios.post('https://localhost:44380/Books', book)
    .then(function (response) {
        console.log(response);
        setBookName("");
        setPrice("");
        setAuthor("");
        setCategory("");
    })
    .catch(function (error) {
        console.log(error);
    });

    if (status === false){
        setStatus(true);
        props.placeholder(true);
    }else {
        setStatus(false);
        props.placeholder(false);
    }
    


  };

  return (
    <div className="grid">
      <input placeholder="Name" onChange={e => setBookName(e.target.value)} value={bookName}></input>
      <input placeholder="Author" onChange={e => setAuthor(e.target.value)}value={author}></input>
      <input placeholder="Price" onChange={e => setPrice(e.target.value)}value={price}></input>
      <input placeholder="Category" onChange={e => setCategory(e.target.value)}value={category}></input>
      <button onClick={addBook}>Add</button>
    </div>
  );
};

export default InputForm;
