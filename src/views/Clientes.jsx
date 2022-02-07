import React from 'react';
import { Link } from 'react-router-dom';

export default function Clientes() {
    return(
        <table className="table">
        <thead>
            <tr>
                <th>Nome</th>
                <th>Idade</th>
                
            </tr>
        </thead>
        <tbody>
            <tr>
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