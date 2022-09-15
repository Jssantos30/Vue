import axios from "axios";

let API_URL_Random = "https://random-data-api.com/api/v2";

export const userService = {
    users:  () => {
        return axios.get(`${API_URL_Random}/users?size=100`)
    }
}