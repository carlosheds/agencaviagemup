import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return(
        <section className="container-fluid">

    <div className="home-herosection text-center row align-items-center justify-content-center">
        <div>
            <h1 className="display-4">Agencia De Viagens Up</h1>
            <h4 className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis a</h4>
        </div>
    </div>

    <div className="row d-sm-flex flex-row p-4 mt-5 mb-5 ">
        <div className="col-sm-6 align-self-center flex-grow-1 ">
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, laudantium minima quae unde qui, ex aliquid animi officia, dolore alias praesentium ut? Deleniti sunt reprehenderit, eum adipisci esse incidunt nesciunt?</p>
            <Link className="button btn-lg btn-primary" to="/clientes">Ver Clientes</Link>
        </div>
        <div className="col-sm-4 offset-sm-2 ">
            <img src="./assets/icons/user.png" width="200" alt="" className="img-fluid" />
        </div>
    </div>

    <div className="row d-sm-flex flex-row-reverse p-4 mt-5 mb-5">
        <div className="col-sm-6 offset-sm-2 align-self-center flex-grow-1 ">
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, laudantium minima quae unde qui, ex aliquid animi officia, dolore alias praesentium ut? Deleniti sunt reprehenderit, eum adipisci esse incidunt nesciunt?</p>
            <Link className="button btn-lg btn-primary" to="/destinos">Ver Destinos</Link>
        </div>
        <div className="col-sm-4">
            <img src="./assets/icons/place.png" width="200" alt="" className="img-fluid" />
        </div>
    </div>

    <div className="row d-sm-flex flex-row p-4 mt-5 mb-5">
        <div className="col-sm-6 align-self-center flex-grow-1 ">
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, laudantium minima quae unde qui, ex aliquid animi officia, dolore alias praesentium ut? Deleniti sunt reprehenderit, eum adipisci esse incidunt nesciunt?</p>
            <Link className="button btn-lg btn-primary" to="/passagens">Ver Passagens</Link>
        </div>
        <div className="col-sm-4 offset-sm-2 ">
            <img src="./assets/icons/tickets.png" width="200" alt="" className="img-fluid" />
        </div>
    </div>

</section>

    )
}