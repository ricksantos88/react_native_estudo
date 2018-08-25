import React from 'react';
import { AppRegistry, Text, View , Button } from 'react-native';

//Formatações 
const Estilos = {
  principal: {
    paddingTop: 40
  }
};

//
const botaoPressionado = ()=> {
  alert('Botão Pressionado');
}

//Cria o Componente.
const app2 = () => {
  
  const { principal } = Estilos; 

  return(

    <View style={ principal }>
      <Button
        onPress={botaoPressionado}
        title="Click Aqui"
        color="#841584"
        accessibilityLabel="Click aqui para ler notícias!!!"
      />
    </View>
  );
};

AppRegistry.registerComponent('fdd', () => app2);