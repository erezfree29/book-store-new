/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-restricted-globals */
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

  function submitBookThunks(newBook) {
    return function (dispatch) {
      return postBookTOStore().then(
        (book) => dispatch(addBook(newBook, book)),
        (error) => console.log('error'),
      );
    };
  }

  const submitBook = async () => {
    await postBookTOStore();
    await submitBookThunks(newBook);
    document.querySelector('.title').value = '';
    document.querySelector('.category').value = '';
    event.preventDefault();
  };
  return (
    <div>
      <h3>Add new book</h3>
      <form>
        <label>Title:</label>
        <br />
        <input type="text" className="title" name="title" onChange={updateTitle} />
        <br />
        <label>Category:</label>
        <br />
        <input type="text" className="category" name="category" onChange={updateAuthor} />
        <br />
        <input type="submit" value="Submit" onClick={submitBook} />
      </form>
    </div>
  );
};

export default Form;
