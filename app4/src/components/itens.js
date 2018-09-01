
import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';

export default class Itens extends Component {

  constructor(props) {
    super(props);
    console.log('Contruindo a Aplicação contructor()');
  }

  render() {
    //console.log('Renderizando Component render()');
    return (
      <View style={styles.item}>
        <View style={styles.foto}>
          <Image style={{ height: 100, width: 100 }} source={{ uri: this.props.props.foto }} />
        </View>
        <View style={styles.detalhesItens}>
          <Text style={styles.txtTitulo}>{ this.props.props.titulo}</Text>
          <Text style={styles.txtValor}>R$:{ this.props.props.valor}</Text>
          <Text style={styles.txtDetalhes}>Local:{ this.props.props.local_anuncio}</Text>
          <Text style={styles.txtDetalhes}>Data Publicação:{ this.props.props.data_publicacao}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    borderWidth: 0.5,
    borderColor: '#999',
    margin: 10,
    padding: 10,
    flexDirection: 'row'
  },
  foto: {
    width: 102,
    height: 102
  },
  detalhesItens: {
    marginLeft: 20,
    flex: 1
  },
  txtTitulo: {
    fontSize: 18,
    color: 'blue',
    marginBottom: 5
  },
  txtValor: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  txtDetalhes: {
    fontSize: 16
  }
});
