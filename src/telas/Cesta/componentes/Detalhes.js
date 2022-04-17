import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

import Texto from '../../../componentes/Texto';
import logo from '../../../../assets/fazendaIcon.png';

export default function Detalhes(){
    return <>
        <Texto style={estilos.nome}>Cesta de Frutas</Texto>
        <View style={estilos.fazenda}>
            <Image source={logo} style={estilos.imagemFazenda}/>
            <Texto style={estilos.nomeFazenda}>Fazenda do Fred</Texto>
        </View>
        <Texto style={estilos.descricao}>Produtos selecionados por mim, o melhor
        agricultor da zona leste de Belo Horizonte, diretamente para a sua cozinha</Texto>
        <Texto style={estilos.preco}>R$400,00</Texto>
    </>
}

const estilos = StyleSheet.create({
    nome:{
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },
    fazenda:{
        flexDirection: "row",
        paddingVertical: 12,
    },
    imagemFazenda:{
        width: 30,
        height: 32,
    },
    nomeFazenda:{
        fontSize: 16,
        lineHeight: 32,
        marginLeft: 12,
    },
    descricao:{
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 23,
    },
    preco:{
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    }
})