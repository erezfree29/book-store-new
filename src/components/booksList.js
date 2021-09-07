/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { getBooks } from '../redux/books/books';

function BooksDisplay() {
  const dispatch = useDispatch();
  const [books, setBooks] = useState([]);
  const fetchItems = async () => {
    const booksArray = [];
    const data = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/7QlpK6CmgdU0hZt33zXJ/books');
    const books = await data.json();
    Object.entries(books).map((item) => {
      const book = {
        item_id: item[0],
        title: item[1][0].title,
        category: item[1][0].category,

      };
      booksArray.push(book);
    });
    setBooks(booksArray);
    dispatch(getBooks(books));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      {books.map((book) => <div>{book.title}</div>)}
    </div>
  );
}
export default BooksDisplay;
