import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.scss";

export default function Header({ toggleFavourites, handleSearchChange }) {
    const toggleShowFavorites = (checker) => () => {
        toggleFavourites(checker);
    };

    return (
        <div className="header">
            <Link to='/' className='title' onClick={toggleShowFavorites(false)}>Book Library</Link>
            <div className='search-block'>
                <Link to="/favorite" className='favourite' onClick={toggleShowFavorites(true)}>Favourite</Link>
                <form className="search-form">
                    <input
                        className='search'
                        type="text"
                        placeholder="Search books..."
                        onChange={handleSearchChange}
                    />
                </form>
            </div>
        </div>
    );
}
