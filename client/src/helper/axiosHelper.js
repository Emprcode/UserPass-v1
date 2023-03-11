import axios from "axios";

const apiRoot = process.env.REACT_APP_ROOT_API;
// const apiRoot = `http://localhost:8000/api/v1`;

const userApi = apiRoot + "/user";

export const registerUser = async (userObj) => {
  try {
    const { data } = await axios.post(userApi, userObj);
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const loginUser = async (userObj) => {
  try {
    const { data } = await axios.post(userApi, userObj);
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
