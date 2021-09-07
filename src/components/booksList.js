/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { getBooks } from '../redux/books/books';

function BooksDisplay() {
  const dispatch = useDispatch();
  const [items, setitems] = useState();
  const books = [];
  const fetchItems = async () => {
    const data = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/7QlpK6CmgdU0hZt33zXJ/books');
    const items = await data.json();
    Object.entries(items).map((item) => {
      const book = {
        item_id: item[0],
        title: item[1][0].title,
        category: item[1][0].category,

      };
      books.push(book);
    });
    setitems(books);
    dispatch(getBooks(books));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      {items.map((item) => (
        <h1>{item.title}</h1>
      ))}
    </div>
  );
}
export default BooksDisplay;
