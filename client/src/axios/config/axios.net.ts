import axios from 'axios'
import config from '@/axios/config/axios.config'

const instance = axios.create(config)

export default instance