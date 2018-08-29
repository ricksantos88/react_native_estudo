import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import Topo from './src/components/topo';
import Icone from './src/components/icone';

class app3 extends Component {

  constructor(props) {
    super(props);

    this.state = { escolhaUsuario: '',
                   escolhaComputador: '',
                   resultado: '' };
  }

  jokempo(escolhaUsuario) {
    const numeroAleatorio = Math.floor(Math.random() * 3);
    let escolhaComputador = '';

    switch (numeroAleatorio) {
      case 0:
        escolhaComputador = 'pedra'; break;
      case 1:
        escolhaComputador = 'papel'; break;
      case 2:
        escolhaComputador = 'tesoura'; break;  
      default: escolhaComputador = '';          
    }

    let resultado = '';

    if (escolhaComputador === 'pedra') {
      if (escolhaUsuario === 'pedra') {
        resultado = 'Empate';
      }
      if (escolhaUsuario === 'papel') {
        resultado = 'Você Ganhou';
      }
      if (escolhaUsuario === 'tesoura') {
        resultado = 'Você Perdeu';
      }
    }

    if (escolhaComputador === 'papel') {
      if (escolhaUsuario === 'papel') {
        resultado = 'Empate';
      }
      if (escolhaUsuario === 'tesoura') {
        resultado = 'Você Ganhou';
      }
      if (escolhaUsuario === 'pedra') {
        resultado = 'Você Perdeu';
      }
    }

    if (escolhaComputador === 'tesoura') {
      if (escolhaUsuario === 'tesoura') {
        resultado = 'Empate';
      }
      if (escolhaUsuario === 'pedra') {
        resultado = 'Você Ganhou';
      }
      if (escolhaUsuario === 'papel') {
        resultado = 'Você Perdeu';
      }
    }    

    this.setState({ escolhaUsuario, escolhaComputador, resultado });
  }

  render() {
    return (
      <View>

        <Topo />

        <View style={styles.painelAcoes}>  
          <View style={styles.btnEscolha}>
            <Button title='Pedra' onPress={() => { this.jokempo('pedra'); }} />
          </View>
          <View style={styles.btnEscolha}>
            <Button title='Papel'onPress={() => { this.jokempo('papel'); }} />
          </View>
          <View style={styles.btnEscolha}>
            <Button title='Tesoura'onPress={() => { this.jokempo('tesoura'); }} />
          </View>
        </View>

        <View style={styles.palco}>
          <Text style={styles.txtResultado}>{ this.state.resultado }</Text>

          <Icone escolha={this.state.escolhaComputador} jogador='Computador' />
          <Icone escolha={this.state.escolhaUsuario} jogador='Você' />
        </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  },
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  },
  palco: {
    alignItems: 'center',
    marginTop: 10
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60
  },
});


AppRegistry.registerComponent('app3', () => app3);
