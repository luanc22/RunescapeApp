import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

export default function Conteudo() {
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>Sobre o jogo</Text>

      <Text style={ styles.text }>Old School RuneScape é um jogo de RPG online multijogador desenvolvido e publicado pela Jagex. O jogo foi lançado em 22 de fevereiro de 2013, quando o Old School RuneScape foi lançado, ele era originalmente uma versão de agosto de 2007 do RuneScape. Apesar de ter uma equipe de desenvolvimento menor e um cronograma de atualização relativo mais lento, o Old School RuneScape tem uma base de jogadores maior do que o RuneScape novo.</Text>

      <Text style={ styles.subtitle }>História do Runescape</Text>
      <Text style={ styles.era }>Era DeviousMUD (1998-2001)</Text>
      <Text style={ styles.text }>Foi criado oficialmente em 1998, por Andrew Gower, que foi o criador do DeviousMUD, precursor do RuneScape. </Text>

      <Text style={ styles.era }>Era RuneScape Classic (2001-2004)</Text>
      <Text style={ styles.text }>Após ser reescrito e renomeado, a primeira versão do RuneScape foi lançada ao público em 2001, na forma de versão beta.</Text>

      <Text style={ styles.era }>Era RuneScape 2 (2004-2008)</Text>
      <Text style={ styles.text }>RuneScape 2 chegou em 2004 introduzindo uma 'engine' mais forte e gráficos tridimensionais, um novo sistema de combate com melhoras nos sistemas de sons do jogo, incluido músicas e novas adições extras em conteúdo.</Text>

      <Text style={ styles.era }>Era RuneScape HD (2008-2013)</Text>
      <Text style={ styles.text }>Em Julho de 2008, a Jagex, empresa que administra o RuneScape trouxe para o jogo uma grande mudança nos gráficos, incluindo texturas detalhadas, luzes realísticas e sombras, então começou uma nova era no jogo.</Text>   
      
      <Text style={ styles.era }>Era Old School RuneScape (2013-presente)</Text>
      <Text style={ styles.text }>É uma versão do jogo criada a partir dos códigos guardados de 2007 pré-atualização dos gráficos e foi criado a partir da vontade da comunidade, essa versão também pode ser chamada de "2007scape", é a versão mais jogada do jogo atualmente e a mais famosa.</Text>

      <Text style={ styles.era }>Era RuneScape 3 (2013-presente)</Text>
      <Text style={ styles.text }>É a nova geração do RuneScape, foi anunciado em 2013 e tinha um cliente baseado em HTML5, efeitos de tempo melhorados em ambientes existentes, interfaces customizáveis, áudio melhorado, um novo site da comunidade e um foco em uma história focada no jogador (a qual o RuneScape antigo não possuia).</Text>
    </View>
  )
}