import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';


class app3 extends Component{

  constructor(props){
    super(props);

    this.state = {escolhaUsuario: ''}

  }

  jokempo(escolhaUsuario){
    alert(escolhaUsuario);
    this.setState( {  escolhaUsuario : escolhaUsuario })
  }

  render(){
    return(
      <View>
        <Text>Escolha do Computador</Text>
        <Text>Escolha do Usuário >>> { this.state.escolhaUsuario }</Text>
        <Text>Resultado</Text>
        <Button title='Pedra' onPress={ () => { this.jokempo('Pedra')} }/> 
        <Button title='Papel'onPress={ () => { this.jokempo('Papel')} }/>
        <Button title='Tesoura'onPress={ () => { this.jokempo('Tesoura')} }/>
      </View>
    );
  };
}

AppRegistry.registerComponent('app3', () => app3);
