import * as axios from "axios";

const instanse = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "api-key": "69cb3b08-b887-4212-96aa-6041f7ccee13",
  },
});

const params = {
  access_key: "4218bc782b325e40c475e7fd1542435c",
  query: "Moscow",
};

export const userAPI = {
  getUser(currentPage = 1, pageSize = 10) {
    return instanse
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  follow(userId) {
    return instanse.post(`follow/${userId}`);
  },
  unFollow(userId) {
    return instanse.delete(`follow/${userId}`);
  },
  getProfail(userId) {
    console.log("WARNING, use profailAPI");
    return profailAPI.getProfail(userId);
  },
};

export const profailAPI = {
  getProfail(userId) {
    return instanse.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return instanse.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instanse.put(`profile/status`, { status: status });
  },
};

export const authAPI = {
  authMe() {
    return instanse.get(`auth/me`);
  },
  login(email, password, rememberMe = false) {
    return instanse.post(`auth/login`, { email, password, rememberMe });
  },
  logout() {
    return instanse.delete(`auth/login`);
  },
};

export const weatherAPI = {
  weather() {
    return axios
      .get("http://api.weatherstack.com/current", { params })
      .then((response) => {
        return response;
      });
  },
};
