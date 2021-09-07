import fetch from 'node-fetch';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/7QlpK6CmgdU0hZt33zXJ/books/';
const id = 'kt2wk8ey';
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