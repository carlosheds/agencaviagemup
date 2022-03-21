import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PassagemService from '../services/PassagemService';

export default function Passagens() {
    const [passagens, setPassagens] = useState([]);

    const getAllPassagens = () => {
        PassagemService.getPassagens()
            .then((res) => {
                setPassagens(res.data);
                console.log(res.data);
            })
    }


    useEffect(() => {
        getAllPassagens();
    }, [])

    const deletePassagem = (id) => {
        PassagemService.deletePassagem(id)
            .then((response) => {
                getAllPassagens();
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
            <Link to="/gerenciar-passagem" className=" btn btn-primary">Adicionar</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>Preço</th>
                        <th>Cliente</th>
                        <th>Destino</th>

                    </tr>
                </thead>
                <tbody>
                    {passagens.map((passagem) => (
                        <tr key={passagem.id_passagem}>
                            <td>{passagem.preco}</td>
                            <td>{passagem.cliente.nome}</td>
                            <td>{passagem.destino.cidade}</td>
                            <td>
                                <Link to={`/gerenciar-passagem/${passagem.id_passagem}`} className="btn btn-info">Editar</Link>|
                                <button onClick={() => deletePassagem(passagem.id_passagem)} className="btn btn-danger">Deletar</button>|
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </>
    )
}