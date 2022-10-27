export const getScore = async (callback = null) => {
    // const apiKey = '0Z92XESxHIscbuYy2R5g';
    // const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/01GGC537PTHJS7Z7FVYKH885J9/scores/';
    const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/01GGC537PTHJS7Z7FVYKH885J9/scores/';
    // const url = `${baseURL}games/${apiKey}/scores/`;
    const response = await fetch(url);
    const data = await response.json();
    const scores = data.result;
    const sortScores = scores.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
    sortScores.forEach((score) => {
      callback(score);
    });
    return sortScores;
  };
  
  export const displayScore = (score) => {
    const scores = document.querySelector('.tableContainer');
    scores.innerHTML += `<table>
                            <tr>
                                <td>${score.user}</td>
                                <td>${score.score}</td>
                            </tr>
                         </table>
    `;
  };
  
  export const display = () => {
    getScore(displayScore);
  };