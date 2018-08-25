import React from 'react';
import { AppRegistry, Text, View , Button , Image } from 'react-native';

//Formatações 
const Estilos = {
  principal: {
    padding: 40
  },
  imagem:{
    justifyContent:'flex-end',
    padding: 5
  },
  textoImagem:{
    backgroundColor:'#FFFFFF'
  }
};

//

//Cria o Componente.
const app2 = () => {
  
  const { principal , imagem , textoImagem } = Estilos; 

  return(

    <View style={ principal }>
      <Image style={ imagem } source={ require('./imgs/uvas.png') }>
        <Text style={ textoImagem }>Vicio é foda</Text>
      </Image>
    </View>
  );
};

AppRegistry.registerComponent('fdd', () => app2);