import React from 'react';
import './home-style.css';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="bg-home">
        <section className="container">
            <div className="row">
                <div className="col-12">
                    <div className="introducao text-center p-5">
                        <h1>Lista dos cachorros da Pet SHop</h1>
                        <p>pesquise sobres os cachorros que já passaram por aqui!</p>
                        <Link to="/pesquisa/" className="btn-introducao" role="button">Acesse Aqui</Link>
                    </div>
                </div>
            </div>
        </section>
    </div>
);


export default Home;