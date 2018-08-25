import React from 'react';
import { AppRegistry, Text, View , TouchableOpacity , Image , Alert } from 'react-native';

//Formatações 
const Estilos = {

  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  },

  botao:{
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal:40,
    marginTop: 20
  },

  textoBotao:{
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold'
  }

};

//
const gerarNovaFrase = () =>{
  var numeroAleatorio = Math.random();
  numeroAleatorio =  Math.floor(numeroAleatorio * 13);

  //Frases
  var frases = Array()
  frases[0] = 'A esperança é como o sol. Se você apenas acredita quando vê, você nunca vai sobreviver à noite.';
  frases[1] = 'A Força não pertence aos Jedi. Dizer que um Jedi morre, a Força morre, é vaidade.';
  frases[2] = 'É assim que vamos ganhar. Não lutando contra o que odiamos, mas salvando o que amamos.';
  frases[3] = 'Transmita o que aprendeu. Força, mestria. Mas fraqueza, insensatez, fracasso também. Sim, fracasso acima de tudo. O maior professor, o fracasso é. Luke, nós somos o que eles crescem além. Esse é o verdadeiro fardo de todos os mestres.';
  frases[4] = 'Faça. Ou não faça. Não existe a tentativa.';
  frases[5] = 'Faça. Ou não faça. Não existe a tentativa.';
  frases[6] = 'Verdadeiramente maravilhosa, a mente de uma criança é.';
  frases[7] = 'Guerras não faz grande ninguém.';
  frases[8] = 'O medo é o caminho para o lado negro. O medo leva a raiva, a raiva leva ao ódio, o ódio leva ao sofrimento.';
  frases[9] = 'Sempre passar o que você aprendeu.';
  frases[10] = 'Seres luminosos somos nós. Não esta matéria bruta.';
  frases[11] = 'Que a Força esteja com você.';
  frases[12] = 'Lembre-se: seu foco determina a sua realidade.';

  var fraseEscolhida = frases[ numeroAleatorio ];

  alert(fraseEscolhida);

}

//Cria o Componente.
const app2 = () => {
  
  const { principal , botao , textoBotao } = Estilos; 

  return(

    <View style={ principal }>
      <Image source={ require('./imgs/logo.png') }/>
      <TouchableOpacity 
          onPress={gerarNovaFrase}
          style={ botao }>
        <Text style={ textoBotao }>Frases Yoda</Text>
      </TouchableOpacity>
    </View>
  );
};
//Renderiza para o dispositivo
AppRegistry.registerComponent('fdd', () => app2);