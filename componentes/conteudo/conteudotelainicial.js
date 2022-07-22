import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default function ConteudoTelaInicial() {
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>Sobre o jogo</Text>

      <Text style={ styles.text }>Old School RuneScape é um jogo de RPG online multijogador desenvolvido e publicado pela Jagex. O jogo foi lançado em 22 de fevereiro de 2013, quando o Old School RuneScape foi lançado, ele era originalmente uma versão de agosto de 2007 do RuneScape. Apesar de ter uma equipe de desenvolvimento menor e um cronograma de atualização relativo mais lento, o Old School RuneScape tem uma base de jogadores maior do que o RuneScape novo.</Text>
    </View>
  )
}