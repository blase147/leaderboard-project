import { array } from './saveScore.js';
import { displayScore } from './scores.js';

export default class Refresh {
  static refreshBtn = () => {
    const btn = document.querySelector('.refreshBtn');
    btn.addEventListener('click', () => {
      displayScore(array.pop());
    });
  };
}