import { createContext } from 'react';


const AuthContext = createContext({
  isLogin: false,
  user: {},
  token: "",
  registerUser: () => { },
  setIsLogin: () => { },
  loginUser: () => { },
});


export { AuthContext };