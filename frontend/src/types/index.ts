export interface Question {
  id: number
  text: string
  options: string[]
}

export interface PredictionResponse {
  prediction: string
  explanation: string
}