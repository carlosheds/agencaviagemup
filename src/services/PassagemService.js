import axios from "axios";

const PASSAGEM_API_URL="http://localhost:8080/passagem"

class PassagemService {
    getPassagens() {
        return axios.get(PASSAGEM_API_URL)
    }

    getPassagemById(id) {
        return axios.get(`${PASSAGEM_API_URL}/${id}`)
    }

    createPassagem(passagem) {
        return axios.post(PASSAGEM_API_URL,passagem)
    }

    updatePassagem(id,passagem) {
        return axios.put(`${PASSAGEM_API_URL}/${id}`, passagem)
    }

    deletePassagem(id) {
        return axios.delete(`${PASSAGEM_API_URL}/${id}`)
    }
}

export default new PassagemService();