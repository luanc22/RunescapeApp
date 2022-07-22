import React from 'react';
import { ScrollView } from 'react-native';
import Conteudo from '../conteudo/conteudotelahistorico';
import Footer from '../footer/index';


export default function TelaHistorico() {
    return (
        <ScrollView>
            <Conteudo />
            <Footer />
        </ScrollView>
    );
}

