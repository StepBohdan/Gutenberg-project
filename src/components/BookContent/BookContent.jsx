import React from 'react';
import Header from '../Header/Header';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import "./BookContent.scss";

export default function BookContent({ data }) {
  const { bookId } = useParams();

  if (!data) {
    return (
      <>
        <Header />
        <Loader />
      </>
    );
  }
  const book = data.find(book => book.id === parseInt(bookId));

  if (!book) {
    return (
      <>
        <Header />
        <div className="bookContent-wrapper">
          <h2>Book not found</h2>
        </div>
      </>
    );
  }

  const readContent = book.formats['text/html'];
  // const content = book.formats['text/plain'] || "No text content available";

  return (
    <div>
      <Header />
      <div className="bookContent-wrapper">
        <h2 className='book-title'>{book.title}</h2>
        <img className='book-image' src={book.formats['image/jpeg']} alt={book.title} />
        <p className='authors'>{book.authors.map(author => author.name).join(', ')}</p>
        <div className='book-content'>
          <a className='linkToRead' href={readContent} target="_blank">Read</a>
        </div>
      </div>
    </div>
  );
}
