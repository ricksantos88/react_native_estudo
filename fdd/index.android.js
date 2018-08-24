import React from 'react';
import { AppRegistry, Text, View } from 'react-native';

//Formatações 
const Estilos = {

  principal: {
    flex: 1, //preenche 1:1 
    backgroundColor: 'cornflowerblue'
  },
  
  topo: {
    flex: 2,
    backgroundColor: 'brown'
  },
  conteudo: {
    flex: 8,
    backgroundColor: 'yellowgreen'
  },
  rodape: {
    flex: 1,
    backgroundColor: 'orangered'
  },

};

//Cria o Componente.
const app2 = () => {
  
  const { principal , topo , conteudo , rodape } = Estilos; 

  return(

    <View style={ principal }>
      <Text style={ topo }>Topo</Text>
      <Text style={ conteudo }>Conteudo</Text>
      <Text style={ rodape }>Rodapé</Text>
    </View>
  );
};

AppRegistry.registerComponent('fdd', () => app2);