import axios from 'axios'

const port = process.env.PORT || 8082

export default () => {
  return axios.create({
    baseURL: `http://localhost:${port}/`
  })
}
