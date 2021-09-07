/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { getBooks, removeBook } from '../redux/books/books';

function BooksDisplay() {
  const dispatch = useDispatch();
  const [books, setBooks] = useState([]);
  const fetchItems = async () => {
    const booksArray = [];
    const data = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/7QlpK6CmgdU0hZt33zXJ/books');
    const books = await data.json();
    Object.entries(books).map((item) => {
      const book = {
        itemId: item[0],
        title: item[1][0].title,
        category: item[1][0].category,
        completed: (Math.random() * 100).toFixed(),

      };
      booksArray.push(book);
    });
    setBooks(booksArray);
    dispatch(getBooks(books));
  };

  const Delete = (itemId) => {
    const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/7QlpK6CmgdU0hZt33zXJ/books/';
    const id = itemId;
    const url = new URL(`${baseURL}${id}`);
    const data = {
      item_id: id,
    };

    fetch(url, {

      method: 'DELETE',

      // Adding body or contents to send
      body: JSON.stringify(data),

      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    dispatch(removeBook(itemId));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="cards">
      {books.map((book, index) => (
        <div className="card">
          <div className="category_field">{book.category}</div>
          <h2>{book.title}</h2>
          <div className="actions">
            <div className="comments">Comments</div>
            <div className="remove">
              <button
                type="submit"
                onClick={() => {
                  Delete(book.itemId); window.location.reload(false);
                }}
              >
                Remove
              </button>
            </div>
            <div>Edit</div>
          </div>
          <div className="circle" />
          <div className="completed">
            {book.completed}
            %
            <div>completed</div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default BooksDisplay;

// Delete(book.item_id)
