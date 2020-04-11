import axios from 'axios'

const key = process.env.REACT_APP_OPENWEATHER_API_KEY

export const GetWeather = location => {
  return new Promise((resolve, reject) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${location.latitude}&lon=${location.longitude}&appid=${key}`)
      .then(response => resolve(response.data))
      .catch(error => reject(error))
  })
}
