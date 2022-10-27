export default class Post {
    static post = async (data = {}) => {
    //   const apiKey = 'Zl4d7IVkemOTTVg2fUdz';
    //   const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
    //   const url = `${baseURL}games/${apiKey}/scores/`;
    const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/01GGC537PTHJS7Z7FVYKH885J9/scores/';
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const status = await response.json();
      return status.result;
    };
  }
  