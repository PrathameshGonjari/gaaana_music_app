import axios from "axios";

class Services {
  get = async (url: string, params?: never) => {
    return await new Promise((resolve, reject) => {
      try {
        axios
          .get(`${process.env.REACT_APP_BASEURL_API}${url}`, params)
          .then((res) => {
             resolve({ data: res });
          })
          .catch(() => {
             reject(new Error("error has accoured"));
          });
      } catch (error) {
         reject(new Error("error has accoured"));
      }
    });
  };

  post = async (url: string, params?: unknown) => {
    return new Promise((resolve, reject) => {
      try {
        axios
          .post(`${process.env.REACT_APP_BASEURL_API}${url}`, params)
          .then((res) => {
             resolve({ data: res });
          })
          .catch(() => {
            reject("error has accoured");
          });
      } catch (error) {
        reject(new Error("error has accoured"));
      }
    });
  };
}

export default new Services();
