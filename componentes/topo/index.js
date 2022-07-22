import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import styles from './styles';
import Icon from '../../assets/App_Icon-Circle.png';

export default function Topo() {
  return (
    <View style={styles.container}>
        <Image source={ Icon } style={styles.image} />
        <Text style ={styles.title}> Old School Runescape </Text>
    </View>
  );
}

