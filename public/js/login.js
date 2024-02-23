import axios from "axios";
import { showAlert } from "./alerts";

export const login = async (email, password) => {
  try {
    const res = await axios({
      method: "POST",
      url: "http://127.0.0.1:8000/login",
      data: {
        email,
        password,
      },
    });

    if (res.data.status === "success") {
      showAlert("success", "Logging in");
      window.setTimeout(() => {
        location.assign("/user-overview");
      }, 1000);
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};

export const register = async (
  firstName,
  lastName,
  age,
  address,
  email,
  gender,
  password,
  confirmPassword
) => {
  try {
    const res = await axios({
      method: "POST",
      url: "http://127.0.0.1:8000/register",
      data: {
        firstName,
        lastName,
        age,
        address,
        email,
        gender,
        password,
        confirmPassword,
      },
    });

    if (res.data.status === "success") {
      showAlert("success", "Your registration was successfull");
      window.setTimeout(() => {
        location.assign("/login");
      }, 1000);
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: "GET",
      url: "http://127.0.0.1:8000/logout",
    });

    if (res.status === "success") location.reload(true);
  } catch (err) {
    showAlert("error", "Error logging out! Try again");
  }
};
