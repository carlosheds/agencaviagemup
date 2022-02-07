import React from 'react';
import Depoimentos from '../components/Depoimentos';

export default function Contato() {
    return (
        <div className="row text-center align-itens-center d-flex flex-column justify-content-center">

            <h1 className="display-4">Contato</h1>
            <p className="mb-5">Deixe-nos uma mensagem</p>
            <Depoimentos data={[{nome:"Carlos",email:'carlos@me.com',mensagem:'Sensacional!'}]}/>
        </div>

    )
}