import React, { useState, useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import { getLocalStorage, setLocalStorage } from '../../Common/utils';
import useAuthContainer from '../../Container/auth';
import { AuthContext } from './context';
import { localStorageKys } from "../../Common/constant"

const AuthProvider = (props) => {

  const { createUser, loginUser } = useAuthContainer();
  const [token, setToken] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({});

  const navigation = useNavigation();

  // Sign up Function

  const registerUser = async ({ name, email, password }) => {
    const res = await createUser(name, email, password);
    if (res.isSuccess) {
      navigation.navigate("login");
      // alert("Success");
    }
    else {
      alert(res.message);
    }
  }

  // Login Function

  const login = async ({ name, password }) => {
    const res = await loginUser(name, password);
    if (res.isSuccess) {
      console.log({ data: res.data });
      setToken(res.data.token);
      setUser(res.data.user);
      // alert("Login Success");
      // history.push("home")
      // console.log({ res });;
    }
    else {
      alert(res.message);
    }
  }

  useEffect(() => {
    const u = getLocalStorage(localStorageKys.USER);
    const t = getLocalStorage(localStorageKys.AUTH_TOKEN);
    if (u && t) {
      setUser(u);
      setToken(t);
    }
  }, []);

  useEffect(() => {
    if (user?.id) {
      setLocalStorage(localStorageKys.USER, user, 24);
    }
  }, [user]);

  useEffect(() => {
    if (token) {
      setLocalStorage(localStorageKys.AUTH_TOKEN, token, 24);
    }
  }, [token]);


  const providerValues = {
    isLogin,
    setIsLogin,
    user,
    token,
    registerUser,
    loginUser: login,
  }


  return (
    <AuthContext.Provider value={providerValues}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;

