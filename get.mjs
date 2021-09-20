/* eslint-disable no-return-assign */
import fetch from 'node-fetch';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/7QlpK6CmgdU0hZt33zXJ/books';

const saveData = {};
fetch(URL)
.then(jsonData => jsonData.json())
.then(data => printIt(data))

let printIt = (data) => {
  console.info(data)
}
