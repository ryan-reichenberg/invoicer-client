import axios from "axios"
import { API_URL, API_URL_DEVELOPMENT } from 'src/utils/config'
import isDev from "src/utils/environmentUtils";
const URL = isDev() ? API_URL_DEVELOPMENT : API_URL;

const login = async (username: string,  password: string) =>  {
    const data = await axios.post<string>(URL+'/authenticate', {
        username,
        password
    }).then(user => {
        localStorage.setItem('user', JSON.stringify(user));
        return user.data
    })
    return data
}

export { login }