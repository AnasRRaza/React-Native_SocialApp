import axios from "axios";


const useAuthContainer = () => {

  // For Sign up

  const signup = async (name, email, password) => {
    try {
      const res = await axios.post(
        "https://social-media-uit.herokuapp.com/user/register",
        {
          username: name,
          email,
          password,
        }
      );
      if (res?.status === 200 && res?.data?.userId) {
        return {
          isSuccess: true,
          message: "User registered successully!",
        };
      }
      throw new Error("");
    } catch (error) {
      console.log({ error });
      if (error?.response?.status === 409) {
        return {
          isSuccess: false,
          message: error?.response?.data?.message,
        }
      }
      return {
        isSuccess: false,
        message: "Failed",
      }
    }
  }

  // For Login

  const login = async (name, password) => {
    try {
      const res = await axios.post(
        "https://social-media-uit.herokuapp.com/user/login",
        {
          username: name,
          password,
        }
      );
      console.log({ res });
      if (res?.status === 200 && res?.data?.token) {
        return {
          isSuccess: true,
          data: {
            token: res.data.token,
            user: res.data.user,
          },
        }
      }
      throw new Error("")
    } catch (error) {
      return {
        isSuccess: false,
        message: error?.data?.message || "Failed",
      }
    }
  }
  return {
    createUser: signup,
    loginUser: login,
  }
}

export default useAuthContainer;