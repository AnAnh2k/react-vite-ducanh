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

const deleteUserAPI = (id) => {
  const URL_BACKEND = `/api/v1/user/${id}`;
  return axios.delete(URL_BACKEND);
};
const fetchAllUserAPI = () => {
  const URL_BACKEND = "/api/v1/user";
  return axios.get(URL_BACKEND);
};

const handleUploadFile = (file, folder) => {
  const URL_BACKEND = "/api/v1/file/upload";
  let config = {
    headers: {
      "upload-Type": folder,
      "content-type": "multipart/form-data",
    },
  };
  const bodyFormData = new FormData();
  bodyFormData.append("fileImg", file);
  return axios.post(URL_BACKEND, bodyFormData, config);
};

const updateUserAvatarAPI = (avatar, _id, fullName, phone) => {
  const URL_BACKEND = "/api/v1/user";
  const data = { _id, fullName, phone, avatar };
  return axios.put(URL_BACKEND, data);
};

export {
  createUserAPI,
  updateUserAPI,
  deleteUserAPI,
  fetchAllUserAPI,
  handleUploadFile,
  updateUserAvatarAPI,
};
