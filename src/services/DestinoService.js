import axios from "axios";

const DESTINO_API_URL="http://localhost:8080/destino"

class DestinoService {
    getDestinos() {
        return axios.get(DESTINO_API_URL)
    }

    getDestinoById(id) {
        return axios.get(`${DESTINO_API_URL}/${id}`)
    }

    createDestino(destino) {
        return axios.post(DESTINO_API_URL,destino)
    }

    updateDestino(id,destino) {
        return axios.put(`${DESTINO_API_URL}/${id}`, destino)
    }

    deleteDestino(id) {
        return axios.delete(`${DESTINO_API_URL}/${id}`)
    }
}

export default new DestinoService();