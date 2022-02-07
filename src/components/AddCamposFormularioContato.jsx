import React, { useState } from 'react';

export default function AddCamposFormularioContato(props) {
    const campoLimpo = {nome:'',email:'',mensagem:''}
    const [camposFormulario, setCamposFormulario] = useState(campoLimpo);

    function handleChange(e) {
        const inputName = document.querySelector('#inputName');
        const inputEmail = document.querySelector('#inputEmail');
        const inputMsg = document.querySelector('#InputMessage');

        setCamposFormulario({
            nome: e.target.id == "inputName" ? e.target.value : inputName.value,
            email: e.target.id == "inputEmail" ? e.target.value : inputEmail.value,
            mensagem: e.target.id == "InputMessage" ? e.target.value : inputMsg.value
        })
    }
    
    // function handleClick() {
    //     let inputName = document.querySelector('#inputName');
    //     let inputEmail = document.querySelector('#inputEmail');
    //     let inputMsg = document.querySelector('#InputMessage');
    //     setCamposFormulario({
    //         nome: this.inputName.value,
    //         email:this.inputEmail.value,
    //         mensagem:this.inputMsg.value
    //     })
    // }

    function handleSubmit(e) {
        props.handleSubmit(camposFormulario);
        setCamposFormulario(campoLimpo);
        e.preventDefault();
    }

    function resetHandleClick() {
        setCamposFormulario(campoLimpo);
    }
    return(
        <div className="container w-50" >
                <form className="mt-5" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="inputName" className="form-label">Nome</label>
                        <input type="text" name="txtNome" className="form-control" id="inputName"  value={camposFormulario.nome} onChange={handleChange} aria-describedby="nameHelmp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control"  id="inputEmail" value={camposFormulario.email} onChange={handleChange} aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputMessage" className="form-label">Mensagem</label>
                        <textarea type="textarea" className="form-control" id="InputMessage" value={camposFormulario.mensagem} onChange={handleChange}></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary" >Enviar</button>
                    <button type="reset" className="btn btn-warning" onClick={resetHandleClick}>Limpar</button>
                </form>
            </div>

    )
}