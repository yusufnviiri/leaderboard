export const scores = [
  {
    name: 'paul',
    score: 80,
  },
  {
    name: 'shafik',
    score: 46,
  },
  {
    name: 'Bogere',
    score: 100,
  },
  {
    name: 'Philip',
    score: 88,
  },
  {
    name: 'Yasin',
    score: 98,
  },
];
export const displayScores = (scores) => {
  const marks = document.querySelector('.scores');
  scores.forEach((score, index) => {
    marks.innerHTML += `  <p class="${index % 2 !== 0 ? 'item' : 'item1'}">${score.name}:<span> ${score.score}</span></p>`;
  });
};
