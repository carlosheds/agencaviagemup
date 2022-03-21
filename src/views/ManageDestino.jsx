import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DestinoService from "../services/DestinoService";

export default function Create() {
  const [pais, setPais] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const criarOuEditarDestino = (e) => {
    e.preventDefault();

    const destino = { pais,estado,cidade};

    if (id) {
        DestinoService.updateDestino(id, destino)
        .then((response) => {
            navigate("/destinos")
        })

    } else {
        DestinoService.createDestino(destino)
        .then((response) => {
            navigate("/destinos")
        })
    }
  }

  useEffect(() => {
      function getDestinoById() {
        if (id) {
            DestinoService.getDestinoById(id)
            .then((response) => {
                setPais(response.data.pais);
                setEstado(response.data.estado);
                setCidade(response.data.cidade);
            })
            .catch((error) => {
                console.log(error);
            })
        }
      }
      getDestinoById()
  }, [id]);

  return (
    <div className="container py-3">
      <form>
        <fieldset>
          <legend>
            <h2 className="text-center">{id ? "Editar" : "Criar"}</h2>
          </legend>
          <div className="mb-3">
            <label htmlFor="Nome" className="form-label">
              Pais
            </label>
            <input
              type="text"
              id="pais"
              className="form-control"
              placeholder="País"
              value={pais}
              onChange={(e) => setPais(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Idade" className="form-label">
              Estado
            </label>
            <input
              type="text"
              id="estado"
              className="form-control"
              placeholder="Estado"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Cidade" className="form-label">
              Cidade
            </label>
            <input
              type="text"
              id="cidade"
              className="form-control"
              placeholder="Cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary" onClick={(e) => criarOuEditarDestino(e)}>
            Enviar
          </button>
          <Link
            to="/destinos"
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
