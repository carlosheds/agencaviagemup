import React from 'react';

export default function ListaDepoimentos(props) {
    const arr = props.data;
    const listaItems = arr.map((dep,index) => {
        return(
            <div key={index}>
                <li className="list-group-item" key={index}><strong> Nome </strong>: {dep.nome}</li>
                <li className="list-group-item" key={index+1}><strong>E-mail</strong>: {dep.email}</li>
                <li className="list-group-item" key={index+2}><strong>Mensagem</strong>: <p>{dep.mensagem}</p></li>
            </div>
            
            )
});

// const data = props.data;    
// const listaItems = [
//     <div key={0}>
//         <li className="list-group-item" key={1}>{data[0].nome}</li>
//         <li className="list-group-item" key={2}>{data[0].email}</li>
//         <li className="list-group-item" key={3}>{data[0].mensagem}</li>
//     </div>
// ]
        

    return <ul className="list-group">{listaItems}</ul>
}