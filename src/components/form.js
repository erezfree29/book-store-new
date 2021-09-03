/* eslint-disable no-unused-vars */
import useState from 'react-hook-use-state';

import uniqid from 'uniqid';

import { addBook } from '../redux/books/books';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/7QlpK6CmgdU0hZt33zXJ/books';

const Form = () => {
  const bookID = uniqid();
  const [bookTitle, setTitle] = useState(null);
  const [bokCategory, setCategory] = useState(null);

  const updateTitle = (event) => { // the curly brace opens a multiline function
    setTitle(event.target.value);
  };

  const updateAuthor = (event) => { // the curly brace opens a multiline function
    setCategory(event.target.value);
  };

  const postBookTOStore = () => {
    fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/7QlpK6CmgdU0hZt33zXJ/books', {

      // Adding method type
      method: 'POST',

      // Adding body or contents to send
      body: JSON.stringify({
        item_id: bookID,
        title: bookTitle,
        category: bokCategory,
      }),

      // Adding headers to the request
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  };
};
