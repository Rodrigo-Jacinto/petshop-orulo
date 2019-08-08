import React, { Component } from "react";
import './pesquisa-style.css';
import Resultado from '../../components/resultado.js';
import api from '../../services/api';
import { Link } from 'react-router-dom';

export default class Pesquisa extends Component {

    state = {
        cachorros: [],

    }

    enviaForm = async (event) => {

        event.preventDefault();

        let inputs = {}
        inputs.nome = this.nome.value;
        inputs.raca = this.raca.value;
        inputs.dono = this.dono.value;

        let dados = this.camposVazios(inputs);

        //caso retorne false, significa que nenhum campo foi preenchido, e dispara o alerta
        if (!dados) {
            alert("Preencha pelo menos um campo !!!");
        }
        else {

            //envia os dados de busca para o backend
            let response = await api.post('/pesquisa', dados);

            //verifica se foi retornado algum resultado
            if (response.data.length === 0) {
                alert("Nenhum cachorro foi encontrado !!");
            }
            else {

                this.setState({ cachorros: response.data });
            }
        }

    }

    camposVazios = (inputs) => {

        //Em caso clicar no botão de busca sem preencher nenhum campo
        if (inputs.nome === "" && inputs.raca === "" && inputs.dono === "") {
            return false;
        }
        //caso algum campo de busca tenha sido preenchido, elimina os valores vazios
        else {
            for (let key in inputs) {

                if (inputs[key] === "") {
                    delete inputs[key];
                }
            }

            return inputs;
        }

    }

    render() {

        let cachorros = this.state.cachorros;

        return ([
            <section class="container-fluid pesquisa-bg">

                <div class="container">
                    <div class="pesquisa p-5">
                        <form onSubmit={this.enviaForm}>
                            <div class="row">

                                <div class="form-group  col-12 col-md-4">
                                    <input type="text" ref={(input) => { this.nome = input }} class="form-control" placeholder="nome do cachorro" />
                                </div>

                                <div class="form-group col-12 col-md-4">
                                    <input type="text" ref={(input) => { this.raca = input }} class="form-control" placeholder="raça do cachorro" />
                                </div>

                                <div class="form-group col-12 col-md-4">
                                    <input type="text" ref={(input) => { this.dono = input }} class="form-control" placeholder="dono do cachorro" />
                                </div>

                            </div>

                            <div class="row">
                                <div class="col-12 text-center pt-3">
                                    <button type="submit" class="btn-busca">Buscar</button>
                                </div>
                            </div>

                        </form>
                    </div>

                </div>

            </section>,

            <section className="container inicio">

                <div className="row">
                    <div className="col-md-12 col-12">

                        <Link to="/" class="btn-inicio">Voltar ao Início</Link>
                    </div>
                </div>

            </section>,

            <section class="container resultado">
                <div className="row">

                    {
                        cachorros.map((cachorro => {
                            return (
                                <Resultado dados={cachorro} />
                            );

                        }))
                    }

                </div>

            </section>


        ]);
    }

}