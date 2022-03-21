import axios from "axios";

const CLIENTE_API_URL="http://localhost:8080/cliente"

class ClienteService {
    getClientes() {
        return axios.get(CLIENTE_API_URL)
    }

    getClienteById(id) {
        return axios.get(`${CLIENTE_API_URL}/${id}`)
    }

    createCliente(cliente) {
        return axios.post(CLIENTE_API_URL,cliente)
    }

    updateCliente(id,cliente) {
        return axios.put(`${CLIENTE_API_URL}/${id}`, cliente)
    }

    deleteCliente(id) {
        return axios.delete(`${CLIENTE_API_URL}/${id}`)
    }
}

export default new ClienteService();