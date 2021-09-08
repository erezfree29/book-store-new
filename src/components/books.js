import Form from './form';

import BooksDisplay from './booksList';

const Books = () => (
  <div className="bookstore">
    <h1>Welcome to the book store</h1>
    <BooksDisplay />
    <Form />
  </div>
);

export default Books;
