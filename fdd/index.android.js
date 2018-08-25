import React from 'react';
import { AppRegistry, Text, View , Button , Image } from 'react-native';

//Formatações 
const Estilos = {
  principal: {
    //padding: 40
  },
};

//

//Cria o Componente.
const app2 = () => {
  
  const { principal } = Estilos; 

  return(

    <View style={ principal }>
      <Image source={ {uri:'https://i.pinimg.com/originals/5b/de/68/5bde68bcb6cf289c4e4eca036c8da026.jpg'} }
             style={ {width: 300, height: 400} }/>
    </View>
  );
};

AppRegistry.registerComponent('fdd', () => app2);