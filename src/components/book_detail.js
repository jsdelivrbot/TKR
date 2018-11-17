import React from 'react';

const BookDetail = ({book}) => {
  if (!book) {
    return <div>Loading...</div>;
  }
  console.log(book);
  let Title, Author, Categories, Description,
      DatePub, Publisher, Subtitle;
  if (book.volumeInfo.title)
    Title = <div>Title: {book.volumeInfo.title}</div>;
  if (book.volumeInfo.authors !== undefined) {
    Author = <div>Author: {typeof(book.volumeInfo.authors)  == 'string' ? book.volumeInfo.authors : book.volumeInfo.authors.join(', ')} </div>
  } else {Author = <div>Author: Пусто</div>;}
  if (book.volumeInfo.categories) {
    Categories = <div>Categories: {typeof(book.volumeInfo.categories)  == 'string' ? book.volumeInfo.categories : book.volumeInfo.categories.join(', ')} </div>
  } else  {Categories = <div>Categories: Пусто</div>}
  if (book.volumeInfo.description) {
    Description = <div>Description: {book.volumeInfo.description}</div>
  }
  if (book.volumeInfo.subtitle) {
    Subtitle = <div>Subtitle: {book.volumeInfo.subtitle}</div>
  }
  if (book.volumeInfo.publishedDate) {
    DatePub = <div>Date: {book.volumeInfo.publishedDate}</div>;
  }
  if (book.volumeInfo.publisher) {
    Publisher = <div>Publisher: {typeof(book.volumeInfo.publisher)  == 'string' ? book.volumeInfo.publisher : book.volumeInfo.publisher.join(', ')}</div>
  }
  return (
    <div className="book-detail col-md-8">
      <div className="details">
      <a href={book.volumeInfo.infoLink} key={book.etag}>
        <img src={book.volumeInfo.imageLinks !== undefined? book.volumeInfo.imageLinks.thumbnail : ''}/>
      </a>
      {Title}
      {Author}
      {Categories}
      {Description}
      {Subtitle}
      {DatePub}
      {Publisher}
      </div>
    </div>
  );
};

export default BookDetail;