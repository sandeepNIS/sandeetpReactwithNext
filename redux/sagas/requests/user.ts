import axios from "axios";

export function requestGetUser() {
  return axios.request({
    method: "get",
    url: "http://localhost:3080/account/list"
  });
}