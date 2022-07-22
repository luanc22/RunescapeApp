import React from 'react';
import {View, ScrollView } from 'react-native';
import Card from '../card/index';
import Conteudo from '../conteudo/conteudotelainicial';
import Footer from '../footer/index';



export default function TelaInicial() {
    return (
        <View>
            <ScrollView>
                <Card />
                <Conteudo />
                <Footer />
            </ScrollView>
        </View >
    );
}

