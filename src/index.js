import './index.css';
import { display } from './modules/scores.js';
import Refresh from './modules/refreshScore.js';
import { clickBtn } from './modules/saveScore.js';

Refresh.refreshBtn();
clickBtn();

document.addEventListener('DOMContentLoaded', display());
