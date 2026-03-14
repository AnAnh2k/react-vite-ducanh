import axios from "./axios.customize";
// import axios from "axios";

const createUserAPI = (fullName, email, password, phoneNumber) => {
  const URL_BACKEND = "/api/v1/user";
  const data = { fullName, email, password, phone: phoneNumber };
  return axios.post(URL_BACKEND, data);
};

const updateUserAPI = (_id, fullName, phoneNumber) => {
  const URL_BACKEND = "/api/v1/user";
  const data = { _id, fullName, phone: phoneNumber };
  return axios.put(URL_BACKEND, data);
};
const fetchAllUserAPI = () => {
  const URL_BACKEND = "/api/v1/user";
  return axios.get(URL_BACKEND);
};

export { createUserAPI, updateUserAPI, fetchAllUserAPI };
