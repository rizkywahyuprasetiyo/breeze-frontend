import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'https://belajar-api.simelek.com',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
})

export default axios
