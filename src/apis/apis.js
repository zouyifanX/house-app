import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000'

export const LoginApi = (param)=>axios.post('/login',param)

export const HouseList = ()=>axios.get('/getHouseList')

