import axios from "axios"

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
})

export const submitAnswers = async (data: any) => {
  const response = await API.post("/predict", data)
  return response.data
}