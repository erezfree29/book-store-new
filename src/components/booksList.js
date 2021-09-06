/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { getBooks } from '../redux/books/books';

function BooksDisplay() {
  const dispatch = useDispatch();
  const [items, setitems] = useState();
  const fetchItems = async () => {
    const data = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/7QlpK6CmgdU0hZt33zXJ/books');
    const items = await data.json();
    console.log(items);
    setitems(items);
    dispatch(getBooks(items));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <h1>book store</h1>
    </div>
  );
}
export default BooksDisplay;
