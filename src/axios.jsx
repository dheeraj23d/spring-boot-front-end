import axios from "axios";

const API = axios.create({
  baseURL: "https://demo-deployment-usbw.onrender.com/api",
});
delete API.defaults.headers.common["Authorization"];
export default API;
