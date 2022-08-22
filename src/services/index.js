import axios from "axios";

const requestApi = {
    getAnswer() {
        return axios.get(`https://api.chucknorris.io/jokes/random`)
            .then(response => response.data,)
            .catch(({ response }) => {
                if (response) {
                    return response
                }
            })
    }
}

export default requestApi;