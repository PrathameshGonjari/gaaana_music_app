import axios from 'axios'

class Services {
  get = async (
    url: string,
    params?: never,
  ) => {
    return new Promise((resolve, reject) => {
      try {
        axios.get(`${process.env.REACT_APP_BASEURL_API}${url}`, params)
          .then((res) => {
            return resolve({ data: res })
          })
          .catch((err) => {
            return reject(console.log("error has accoured", err))
          })
      } catch (error) {
        return reject(console.log("error has accoured", error))
      }
    })
  }

  post = async (
    url: string,
    params?: unknown,
  ) => {
    return new Promise((resolve, reject) => {
      try {
        axios.post(`${process.env.REACT_APP_BASEURL_API}${url}`, params)
          .then((res) => {
            return resolve({ data: res })
          })
          .catch((err) => {
            return reject(console.log("error has accoured", err))
          })
      } catch (error) {
        return reject(console.log("error has accoured", error))
      }
    })
  }
}

export default new Services()