import axios from 'axios'
import config from '@/api/config/axios.config'

const instance = axios.create(config)

export default instance