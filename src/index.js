import './style.css';
import { displayScores } from './modules/arr.js';

const username = document.querySelector('.name');
const userscore = document.querySelector('.score');
const refresh = document.querySelector('.refresh');
const gameurl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/r8ikcZ9miXXAZu3zo0MU/scores/';

// get scores

const fetchScores = async () => {
  const response = await fetch(gameurl);
  const data = await response.json();
  displayScores(data);
};

refresh.addEventListener('click', () => {
  fetchScores();
});

const postForm = async () => {
  const response = fetch(gameurl, {

    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: username.value,
      score: userscore.value,
    }),
  });

  const data = await (await response).json();
  username.value = '';
  userscore.value = '';
  return data;
};

// create users
const gameForm = document.querySelector('.addGame');
gameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  postForm();
});
