import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PassagemService from "../services/PassagemService";
import ClienteService from "../services/ClienteService";
import DestinoService from "../services/DestinoService";

export default function Create() {
  const [preco, setPreco] = useState("");
  const [cliente, setCliente] = useState({ id_cliente: "", nome: "" });
  const [destino, setDestino] = useState({ id_destino: "", cidade: "" });
  const [clientes, setClientes] = useState([]);
  const [destinos, setDestinos] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const getAllClientes = () => {
    ClienteService.getAllClientes()
      .then((response) => {
        setClientes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getAllClientes();
  }, [])

  const getAllDestinos = () => {
    DestinoService.getDestinos()
      .then((res) => {
        setDestinos(res.data);
        console.log(res.data);
      })
  }
  useEffect(() => {
    getAllDestinos();
  }, [])

  const criarOuEditarPassagem = (e) => {
    e.preventDefault();

    const passagem = { preco, cliente, destino };

    if (id) {
      PassagemService.updatePassagem(id, passagem)
        .then((response) => {
          navigate("/passagens")
        })

    } else {
      PassagemService.createPassagem(passagem)
        .then((response) => {
          navigate("/passagens")
        })
    }
  }

  useEffect(() => {
    function getPassagemById() {
      if (id) {
        PassagemService.getPassagemById(id)
          .then((response) => {
            setPreco(response.data.preco);
            setCliente({ id_cliente: response.data.cliente.id_cliente, nome: response.data.cliente.nome });
            setDestino({ id_destino: response.data.destino.id_destino, cidade: response.data.destino.cidade });
          })
          .catch((error) => {
            console.log(error);
          })
      }
    }
    getPassagemById()
  }, [id]);

  return (
    <div className="container py-3">
      <form>
        <fieldset>
          <legend>
            <h2 className="text-center">{id ? "Editar" : "Criar"}</h2>
          </legend>
          <div className="form-groupd mb-3">
            <label htmlFor="preco" className="form-label">
              Preço
            </label>
            <input
              type="text"
              id="preco"
              className="form-control"
              placeholder="Preço"
              value={preco}
              onChange={(e) => setPreco(Number.parseFloat(e.target.value))}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="ClienteId_cliente" className="form-label">
              Cliente
            </label>
            <select
              id="ClienteId_cliente"
              name="ClienteId_cliente"
              className="form-select"
              onChange={(e) =>
                setCliente({ id_cliente: Number.parseInt(e.target.value) })
              }
            >
              <option value="DEFAULT" >{id ? cliente.nome : 'Escolha um cliente'}</option>
              {clientes.map((cliente) => (
                <option key={cliente.id_cliente} value={cliente.id_cliente}>
                  {cliente.nome}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group mb-3">
            <label htmlFor="Destino" className="form-label">
              Destino
            </label>
            <select
              id="Destino"
              name="Destino"
              className="form-select"
              onChange={(e) =>
                setDestino({ id: Number.parseInt(e.target.value) })
              }
            >
              <option value="DEFAULT" >{id ? destino.cidade : 'Escolha um destino'}</option>
              {destinos.map((destino) => (
                <option key={destino.id} value={destino.id}>
                  {destino.nome}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn btn-primary" onClick={(e) => criarOuEditarPassagem(e)}>
            Enviar
          </button>
          <Link
            to="/passagens"
            className="btn btn-danger"
            style={{ marginLeft: "10px" }}
          >
            Cancelar
          </Link>
        </fieldset>
      </form>
    </div>
  );
}
