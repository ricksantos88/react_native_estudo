
import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  StyleSheet
} from 'react-native';

//Componente Navegação
import BarraNavegacao from './BarraNavegacao';

//Imagens
const logo = require('../imgs/logo.png');
const menuCliente = require('../imgs/menu_cliente.png');
const menuContato = require('../imgs/menu_contato.png');
const menuEmpresa = require('../imgs/menu_empresa.png');
const menuServico = require('../imgs/menu_servico.png');

//Componente Navegação
export default class CenaPrincipal extends Component {
  render() {
    return (
      <View>
        <StatusBar 
          //hidden
          backgroundColor='#ccc'
        />
        <BarraNavegacao />
        <View style={styles.logo}>
            <Image source={logo} />
        </View>

        <View style={styles.menu}>

            <View style={styles.menuGrupo}>
                <Image source={menuCliente} style={styles.imgMenu} />
                <Image source={menuContato} style={styles.imgMenu} />
            </View>

            <View style={styles.menuGrupo}>
                <Image source={menuEmpresa} style={styles.imgMenu} />
                <Image source={menuServico} style={styles.imgMenu} />
            </View>

        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
    logo: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10
    },
    menu: {
        alignItems: 'center'
    },
    menuGrupo: {
        flexDirection: 'row'
        
    },
    imgMenu: {
        margin: 15
    }
});
