import React from 'react';

export default function Passagens() {
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Nome do Cliente</th>
                    <th>Destino da Viagem</th>
                    <th>Preço</th>
                    
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Dado 1</td>
                    <td>Dado 1</td>
                    <td>Dado 1</td>
                    <td>
                        <a href="#">Editar</a>|
                        <a href="#">Detalhes</a>|
                        <a href="#">Deletar</a>|
                    </td>
                </tr>
                <tr>
                    <td>Dado 2</td>
                    <td>Dado 2</td>
                    <td>Dado 2</td>
                    <td>
                        <a href="#">Editar</a>|
                        <a href="#">Detalhes</a>|
                        <a href="#">Deletar</a>|
                    </td>
                </tr>
            </tbody>
        </table>
    )
}