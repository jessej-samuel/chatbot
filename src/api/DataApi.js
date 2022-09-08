import axios from "axios";
const DataApi = axios.create({
  baseURL: "http://192.168.87.92:5000",
  data: {},
});
export default DataApi;