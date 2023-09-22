import axios from "axios";

axios.defaults.timeout = 100000;
axios.defaults.baseURL = "http://localhost:3000/";

axios.interceptors.request.use(
  (config) => {
    config.data = JSON.stringify(config.data);
    // config.headers = {
    //   // ...config.headers,
    //   "Content-Type": "application/json",
    // };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * http response 拦截器
 */
axios.interceptors.response.use(
  (response) => {
    if (response.data.errCode === 2) {
      console.log("过期");
    }
    return response;
  },
  (error) => {
    console.log("请求出错：", error);
  }
);


export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
        params: params,
      }).then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function post(url, data) {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(
      (response) => {
        resolve(response.data);
      },
      (err) => {
        reject(err);
      }
    );
  });
}