import axios from 'axios'

export const responseFacebook = async (data) => {
    if (data && data.accessToken) {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}auth/facebook/login?token=${data.accessToken}`);
        const { user, token } = res.data.data;
        console.log(user)
        localStorage.setItem("token", token);
        return user;
      }catch (error) {
        return new Error(error);
      }
    }
}

