
import React, { Component } from 'react';
import {
  View,
  ScrollView
} from 'react-native';

import axios from 'axios';
import Itens from './itens';

export default class ListaItens extends Component {

  constructor(props) {
    super(props);

    this.state = { listaItens: [] };
  }

  componentWillMount() {
    //console.log('Fazendo algo antes de renderizar componentWillMount()');
    const url = 'http://faus.com.br/recursos/c/dmairr/api/itens.html';
    //Requisição HTTP
    axios.get(url)
      .then((response) => {
        this.setState({ listaItens: response.data });
      })
      .catch(() => {
        console.log('Erro ao recuperar informação.');
      });
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: '#DDD' }}>
        { this.state.listaItens.map(item => (<Itens key={item.titulo} props={item} />)) }
      </ScrollView>
    );
  }
}

