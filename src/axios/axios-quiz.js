import axios from 'axios';

export default axios.create({
  baseURL: "https://react-quiz-bb571.firebaseio.com/"
});