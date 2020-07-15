import axios from 'axios'

export const responseFacebook = async (data) => {
    if (data && data.accessToken) {
      try {
        const res = await axios.get(`http://localhost:5000/auth/facebook/login?token=${data.accessToken}`);
        const { user, token } = res.data.data;
        localStorage.setItem("token", token);
        return user;
      }catch (error) {
        return new Error(error);
      }
    }
}

