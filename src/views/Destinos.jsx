import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import DestinoService from '../services/DestinoService';

export default function Destinos() {
    const [destinos,setDestinos] = useState([]);
    const getAllDestinos = () => {
    DestinoService.getDestinos()
    .then((res)=> {
        setDestinos(res.data);
        console.log(res.data);
    })
}


useEffect(() => {
    getAllDestinos();
},[])

const deleteDestino = (id) => {
    DestinoService.deleteDestino(id)
      .then((response) => {
        getAllDestinos();
      })
      .catch((error) => {
        console.log(error);
        const { data } = error.response;
        if (data.status === 500) {
          alert("Erro na API");
        }
      });
  };

    return (
        <>
            <Link to="/gerenciar-destino" className=" btn btn-primary">Adicionar</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>País</th>
                        <th>Estado</th>
                        <th>Cidade</th>

                    </tr>
                </thead>
                <tbody>
                    {destinos.map((destino) => (
                        <tr key={destino.id_destino}>
                        <td>{destino.pais}</td>
                        <td>{destino.estado}</td>
                        <td>{destino.cidade}</td>
                        <td>
                            <Link to={`/gerenciar-destino/${destino.id_destino}`} className="btn btn-info">Editar</Link>|
                            <button  onClick={() => deleteDestino(destino.id_destino)} className="btn btn-danger">Deletar</button>|
                        </td>
                    </tr>
                    ))}
                    
                </tbody>
            </table>
        </>
    )
}