import React from 'react';

const BookListItem = ({book, onBookSelect}) => {
  const imageUrl = book.volumeInfo.imageLinks.thumbnail;

  return (
    <li onClick={() => onBookSelect(book)} className="list-group-item">
      <div className="book-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>
        <div className="media-body">
          <div className="media-heading">{book.volumeInfo.title}</div>
        </div>
      </div>
    </li>
  );
};

export default BookListItem;