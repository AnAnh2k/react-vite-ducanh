import axios from "./axios.customize";
// import axios from "axios";

const createUserAPI = (fullName, email, password, phoneNumber) => {
  const URL_BACKEND = "/api/v1/user";
  const data = { fullName, email, password, phone: phoneNumber };
  return axios.post(URL_BACKEND, data);
};
const updateUserAPI = () => {};

export { createUserAPI, updateUserAPI };
