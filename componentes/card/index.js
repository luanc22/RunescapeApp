import React from 'react';
import { View, Image, Text } from 'react-native';
import Gnome from '../../assets/gnomechild.png';
import styles from './styles';

export default function Card() {
  return (
    <View style={ styles.container }>
      <View style={ styles.box }>
        <Image source={ Gnome } style={ styles.image } />
        <View style={ styles.boxtext }>
        <Text style={ styles.name }>Gnome Child</Text>
        <Text style={ styles.text }>"Is there a god? There is now!"</Text>
        </View>
      </View>
    </View>
  );
}