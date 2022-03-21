import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ClienteService from '../../services/ClienteService';

export default function Clientes() {
    const [clientes,setClientes] = useState([]);
    const getAllClientes = () => {
    ClienteService.getClientes()
    .then((res)=> {
        setClientes(res.data);
        console.log(res.data);
    })
}


useEffect(() => {
    getAllClientes();
},[])

const deleteCliente = (id) => {
    ClienteService.deleteCliente(id)
      .then((response) => {
        getAllClientes();
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
            <Link to="/gerenciar-cliente" className=" btn btn-primary">Adicionar</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Idade</th>

                    </tr>
                </thead>
                <tbody>
                    {clientes.map((cliente) => (
                        <tr key={cliente.id_cliente}>
                        <td>{cliente.nome}</td>
                        <td>{cliente.idade}</td>
                        <td>
                            <Link to={`/gerenciar-cliente/${cliente.id_cliente}`} className="btn btn-info">Editar</Link>|
                            <button  onClick={() => deleteCliente(cliente.id_cliente)} className="btn btn-danger">Deletar</button>|
                        </td>
                    </tr>
                    ))}
                    
                </tbody>
            </table>
        </>
    )
}