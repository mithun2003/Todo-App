import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";

const baseURL = "https://todo-3yj9.onrender.com/";

const instance = axios.create({
  baseURL
});

const handleTokenRefreshError = () => {
  // Handle redirection using your preferred method
  // For example, you can use window.location to redirect to the login page
  try {
    axios
      .post(
        `logout/`,
        { refresh_token: localStorage.getItem("refresh") },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`
          }
        }
      )
      .then(() => {
        localStorage.clear();
        window.location.href = "/user/login";
      })
      .catch(err => {
        console.error(err);
      });
  } catch (error) {
    console.error(error);
  }
};

instance.interceptors.request.use(async req => {
  console.log("HELLOLLLL");
  const access = localStorage.getItem("access");
  const refresh = localStorage.getItem("refresh");
  const isTokenRefreshRequest = req.url.includes("token-refresh");
  if (access && refresh && !isTokenRefreshRequest) {
    const user = jwt_decode(access);
    console.log("user", user, user.exp, dayjs.unix(user.exp).diff(dayjs()));
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
    console.log(isExpired, "isExpired");
    if (!isExpired) return req;

    try {
      const response = await instance.post("token-refresh/", {
        refresh: refresh
      });
      localStorage.setItem("refresh", response.data.refresh);
      localStorage.setItem("access", response.data.access);

      req.headers.Authorization = `Bearer ${response.data.access}`;
      return req;
    } catch (error) {
      // Handle token refresh error
      console.error(error);
      handleTokenRefreshError();
      throw error;
    }
  }

  return req;
});

export default instance;
