import { regEmail, regUserName } from "./constant";


const validateUserName = (name) => {
  const value = typeof name === "string" ? name.trim() : "";
  if (!value) {
    return "Username is required";
  }
  if (value.length < 3) {
    return "Username should contain atleast be 3 character";
  }
  if (!regUserName.test(value)) {
    return "Username should only contain alphabets or numbers";
  }
  return "";
}

const validateEmail = (email) => {
  const value = typeof email === "string" ? email.trim() : "";
  if (!value) {
    return "Email is required";
  }
  if (!regEmail.test(value)) {
    return "Please enter a valid Email";
  }
  return "";
}

const validatePassword = (password) => {
  const value = typeof password === "string" ? password.trim() : "";
  if (!value) {
    return "Password is required";
  }
  if (value.length < 6) {
    return "Password should atleast be 6 chracters";
  }
  return "";
}

const setLocalStorage = (key, data, hours) => {
  try {
    if (key && data) {
      const modify = {
        data,
        time: hours ? new Date().getTime() + hours * 60 * 60 * 1000 : null,
      }
      localStorage.setItem(key, JSON.stringify(modify));
    }
  } catch (e) {
    console.log(e);
  }
}

const getLocalStorage = (key) => {
  try {
    if (key) {
      const data = localStorage.getItem(key);
      if (data) {
        const modify = JSON.parse(data);
        if (modify.time && new Date(modify.time) <= new Date()) {
          localStorage.removeItem(key);
          throw new Error("Data Expired");
        }
        return modify.data;
      }
    }
  } catch (e) {
    console.log(e);
  }
}

const logOut = () => {
  localStorage.clear();
}

export {
  validateUserName,
  validateEmail,
  validatePassword,
  setLocalStorage,
  getLocalStorage,
  logOut,
}