import logo from './logo.svg';
import './App.css';
import InputForm from './components/InputForm';
import BookList from './components/BookList';
import { useState } from 'react';

function App() {

  const [bookAdded, setBookAdded] = useState(false);

  return (
    <div className="App">
      <InputForm placeholder={status => setBookAdded(status)}/>
      <BookList bookAdded={bookAdded} />
    </div>
  );
}

export default App;
