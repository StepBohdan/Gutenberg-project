import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Main from './components/Main/Main';
import BookContent from './components/BookContent/BookContent';

function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchInfo() {
        try {
            const response = await fetch("https://gutendex.com/books/");
            if (!response.ok) {
                throw new Error('Error!');
            }
            const result = await response.json();
            console.log(result.results);
            setData(result.results);
        } catch (error) {
            console.error('Error!:', error);
        }
    }

    fetchInfo();
}, []);
      


  return (

      <>
      <Routes>
      <Route path='/' element={<Main data={data} />} />
      <Route path='/favorite' element={<Main data={data}/>} />
      <Route path='/:bookId' element={<BookContent data={data} />}/>
      
      </Routes></>
  );
}

export default App;
