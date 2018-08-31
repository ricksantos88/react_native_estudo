
import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import axios from 'axios';
import Item from './itens';

export default class ListaItems extends Component {

  constructor(props) {
    super(props);

    this.state = { listaItems: [] };
  }

  componentWillMount() {
    //console.log('Fazendo algo antes de renderizar componentWillMount()');
    const url = 'http://faus.com.br/recursos/c/dmairr/api/itens.html';
    //Requisição HTTP
    axios.get(url)
      .then((response) => {
        this.setState({ listaItems: response.data });
      })
      .catch(() => {
        console.log('Erro ao recuperar informação.');
      });
  }

  render() {
    return (
      <View>
        { this.state.listaItems.map((item) => {
          return (
            <Text key={item.titulo}>{ item.titulo }</Text>
          );
        }) }
      </View>
    );
  }
}

