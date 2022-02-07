import React from 'react';

export default function Promocoes() {
    return(
        <div className="container text-center">
    <h1 className="display-4 mb-5">Promoções</h1>
    

    <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
        <div className="col">
            <div className="card h-100">
                <img src="./assets/img/africa.jpg" className="card-img-top" alt="Pacote Africa" />
                <div className="card-body">
                    <h5 className="card-title">Pacote Africa</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas corrupti itaque cumque corporis soluta, eos, debitis animi, architecto asperiores aliquid delectus tempora placeat laboriosam officia esse quia. Velit, eius repellat!</p>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100">
                <img src="./assets/img/asia.jpg" className="card-img-top" alt="Pacote Asia" />
                <div className="card-body">
                    <h5 className="card-title">Pacote Asia</h5>
                    <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet fuga harum voluptate, vero commodi tenetur fugit dolor eveniet praesentium temporibus doloremque debitis dicta reiciendis quasi quaerat corporis modi earum nemo.</p>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100">
                <img src="./assets/img/northamerica.jpg" className="card-img-top" alt="Pacote América do Norte" />
                <div className="card-body">
                    <h5 className="card-title">Pacote América do Norte</h5>
                    <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero laboriosam, nam cumque modi excepturi repellendus. Vitae quia quaerat itaque impedit error omnis modi maiores? Saepe libero praesentium asperiores eius quae.</p>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100">
                <img src="./assets/img/europe.jpeg" className="card-img-top" alt="Pacote Europa" />
                <div className="card-body">
                    <h5 className="card-title">Pacote Europa</h5>
                    <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit atque voluptate explicabo distinctio minus sequi animi quasi praesentium accusantium est, quo similique? Odit deleniti ad quidem veniam alias tempora quas.</p>
                </div>
            </div>
        </div>
    </div>
</div>
        
    )
}