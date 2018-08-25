import React from 'react';
import { AppRegistry, Text, View , Button , TouchableOpacity } from 'react-native';

//Formatações 
const Estilos = {
  principal: {
    paddingTop: 40
  },
  botao:{
    backgroundColor: '#48BBEC',
    padding: 10,
    borderColor: '#1d8eb8',
    borderWidth: 1,
    borderRadius: 8,
    //shadowColor: '#000',
    //shadowOffSet: {width: 0, height: 2},
    //shadowOpacity: 0.4
  }, 
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
};

//
const botaoPressionado = ()=> {
  alert('Botão Pressionado');
};

//Cria o Componente.
const app2 = () => {
  
  const { principal , botao , textoBotao } = Estilos; 

  return(

    <View style={ principal }>
      <TouchableOpacity style={ botao }>
        <Text style={ textoBotao }>Clique Aqui</Text>
      </TouchableOpacity>
    </View>
  );
};

AppRegistry.registerComponent('fdd', () => app2);