import React, { Component } from 'react';
import IconDog from './img/icon-dog.png';

class Resultado extends Component {

    render() {
        let [cachorro] = this.props.dados.cachorros;
        let {dono, telefone} = this.props.dados;

        return (

                <div class="col-md-4 col-sm-12 col-12">

                    <div class="card-cachorro mr-3 mb-3">
                        <div class="cabecalho-card">
                            <span>
                                <img src={IconDog} alt="logo cachorro" />
                            </span>
                            <h2>{cachorro.nome}</h2>
                        </div>


                        <div class="corpo-card">
                            <ul>
                                <li> <span>Raça: </span>{cachorro.raca}</li>
                                <li><span>Genêro: </span>{cachorro.genero}</li>
                                <li><span>Castrado: </span>{cachorro.castrado}</li>
                                <li><span>Nascimento: </span>{cachorro.nascimento}</li>
                                <li><span>Data: </span>{cachorro.dataPetshop}</li>
                                <li><span>Dono: </span>{dono}</li>
                                <li><span>Telefone: </span>{telefone}</li>
                            </ul>
                        </div>
                    </div>

                </div>
        );

    }
}
export default Resultado;