import axios from 'axios'
const api = axios.create({ baseURL: 'https://financialmodelingprep.com/api/v3' })
api.defaults.params = {}
api.defaults.params['apikey'] = '54dd5147443111a26b3bdbf48cc20324'
export default api