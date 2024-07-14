import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';
import Star from "./Star";
import "./Main.scss";
import Header from '../Header/Header';

export default function Main({ data }) {
    const [favorites, setFavorites] = useState([]);
    const [showFavorites, setShowFavorites] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const handleStarClick = (bookId, event) => {
        event.preventDefault();
        if (favorites.includes(bookId)) {
            setFavorites(favorites.filter(id => id !== bookId));
        } else {
            setFavorites([...favorites, bookId]);
        }
    };

    const toggleShowFavorites = (checker) => {
        setShowFavorites(checker);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    if (!data) {
        return (
            <>
                <Header />
                <Loader />
            </>
        )
    }

    const filteredData = data
        .filter(book => showFavorites ? favorites.includes(book.id) : true)
        .filter(book => book.title.toLowerCase().includes(searchQuery));

    return (
        <div className='main-container'>
            <div className='toggle-favourites'>
                <Header toggleFavourites={toggleShowFavorites} handleSearchChange={handleSearchChange} favorites={favorites} />
            </div>
            <ul className='book-list'>
            {filteredData.length === 0 ? (
                    <div className='noInfo'>No Books</div>
) : (
    filteredData.map(book => (
        <li key={book.id} className='list-item'>
            <img className='book-image' src={book.formats['image/jpeg']} alt={book.title} />
            <div className='bottom-elements'>
                <p className='book-title'>{book.title}</p>
                <div className='bottom-btns'>
                    <Link className='read-btn' to={`/${book.id}`}>
                        Read
                    </Link>
                    <a className='star' href="#" onClick={(event) => handleStarClick(book.id, event)}>
                        <Star isFavorite={favorites.includes(book.id)} />
                    </a>
                </div>
            </div>
        </li>
    ))
)}
            </ul>
            <div className='bottom'></div>
        </div>
    );
}
