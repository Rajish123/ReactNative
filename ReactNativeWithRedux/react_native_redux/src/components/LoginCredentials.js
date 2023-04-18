import axios from 'axios';

const logincredentials = async (username, password) => {
  try {
    const response = await axios.post('https://dummyjson.com/auth/login', {
      username: username,
      password: password,
    });
    if (response.data.token) {
        return response;
    } else {
          return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default logincredentials;
