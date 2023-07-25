import axios from "axios";
import cookie from "react-cookies";

class ApiCall {
  get(url, callback) {
    this.createInstance(url, null, 0)
      .then((result) => {
        callback(result.data);
      })
      .catch((error) => {});
  }
  post(url, data, callback) {
    this.createInstance(url, data, 1)
      .then((result) => {
        callback(result.data);
      })
      .catch((error) => {});
  }
  patch(url, data, callback) {
    this.createInstance(url, data, 2)
      .then((result) => {
        callback(result.data);
      })
      .catch((error) => {});
  }
  delete(url, data, callback) {
    this.createInstance(url, data, 3)
      .then((result) => {
        callback(result.data);
      })
      .catch((error) => {});
  }
  createInstance(append, data, type) {
    const instance = axios.create();
    instance.defaults.headers.post["Content-Type"] = "application/json";
    instance.defaults.headers.common["Authorization"] =
      "Bearer " + cookie.load("Token1");
    const url = "http://3.16.194.5:8000/api/v1" + append;

    switch (type) {
      case 0:
        return instance.get(url);
      case 1:
        return instance.post(url, data);

      case 2:
        return instance.patch(url, data);
      default:
        return instance.delete(url, data);
    }
  }
}
export default new ApiCall();
