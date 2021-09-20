/* eslint-disable func-names */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import useState from 'react-hook-use-state';

import { useDispatch } from 'react-redux';

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

  const newBook = {
    id: bookID,
    title: bookTitle,
    category: bokCategory,
  };

  const postBookTOStore = () => {
    fetch(baseURL, {

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

  const dispatch = useDispatch();

  function submitBookToStoreApiThunks(newBook) {
    dispatch(addBook(newBook));
  }

  const submitBook = () => {
    submitBookToStoreApiThunks(newBook);
    postBookTOStore();
    document.querySelector('.title').value = '';
    document.querySelector('.category').value = '';
    event.preventDefault();
  };
  return (
    <div style={{ marginLeft: '1%' }}>
      <h3 className="add">Add new book</h3>
      <form>
        <input type="text" placeholder="book title" className="title" name="title" onChange={updateTitle} />
        <select name="category" className="category" onChange={updateAuthor}>
          <option value="fiction">Fiction</option>
          <option value="nonfiction">NonFiction</option>
        </select>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            submitBook(); setTimeout(() => { location.reload(); }, 3000);
          }}
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default Form;
