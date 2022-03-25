import { API } from '../../API';
import axios from 'axios'

export const isAutheticated = () => {
  if (typeof window == "undefined") {
    return true;
  }
  if (localStorage.getItem("auth")) {
    return localStorage.getItem("auth")
  } else {
    //console.log(JSON.parse(localStorage.getItem("auth"))); 
    return false;
  }
};

export const user = async () => {
  const { token } = JSON.parse(localStorage.getItem("auth"))
  try {

    const response = await axios
      .get(`${API}/api/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

    const userData = response.data.data
    return userData
  }

  catch (err) {
    console.log(err);
  }
}

export const signout = () => {
  localStorage.removeItem("auth");
  return true;
};
