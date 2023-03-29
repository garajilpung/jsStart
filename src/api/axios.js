import axios from "axios"

const instance = axios.create({
  baseURL:"https://api.themoviedb.org/3",
  params: {
    api_key:"60c87fdda208dda377b52f0ed89394ec",
    language: "ko-KR"
  }
})

export default instance

