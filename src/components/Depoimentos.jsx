import { useState } from "react";
import AddCamposFormularioContato from "./AddCamposFormularioContato";
import ListaDepoimentos from "./ListaDepoimentos";

export default function Depoimentos(props) {
    const [depoimentos,setDepoimentos] = useState(props.data);

    function addDepoimento(depoimento) {
        setDepoimentos([depoimento])
    }

    return (
        <>
            <AddCamposFormularioContato handleSubmit={addDepoimento} />
            <div className="container">
                <h3 className="mt-5">Última mensagem enviada:</h3>
                <ListaDepoimentos data={depoimentos} />
            </div>
        </>
    )
}