import axios from 'axios'

const client = axios.create({
  baseURL: process.env.API_BASE_URL,
})

const get = async (endpoint) => {
  const res = await client.get(endpoint)
  return res.data
}

const useHttpClient = () => ({
  get,
})

export { useHttpClient }
