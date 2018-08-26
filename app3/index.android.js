import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

class MeuComponente extends Component {  
  render(){
    return(
      <View>
          <Text>{this.props.teste}</Text>
         
      </View>
    );
  };
};

class app3 extends Component{

  constructor(props){
    super(props);
    this.state = {texto : 'Texto Teste 2222' };
  }

  alteraTexto(){
    this.setState({texto : 'Outra Coisa'})
  }

  render(){
    return(
      <View>
        <MeuComponente teste={this.state.texto}></MeuComponente>
        <Button 
          title='Botão'
          onPress={() => { this.alteraTexto() }}
        />
      </View>
    );
  };
}

AppRegistry.registerComponent('app3', () => app3);
