
import React, { Component } from 'react';
import {
  Text
} from 'react-native';

export default class Itens extends Component {

  constructor(props) {
    super(props);
    console.log('Contruindo a Aplicação contructor()');
  }

  componentWillMount() {
    //console.log('Fazendo algo antes de renderizar componentWillMount()');
  }

  componentDidMount() {
    //console.log('Fazendo algo depois de renderizar componentDidMount()');
  }

  render() {
    //console.log('Renderizando Component render()');
    return (
      <Text>Detalhes do Item ...</Text>
    );
  }
}

