import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import styles from './styles';

export default function Footer() {
  return (
    <View style={styles.container}>
        <Text style ={styles.title}> Aplicativo criado por Luan </Text>
        <Text style ={styles.title}> Esse aplicativo foi criado apenas para fins de estudo </Text>
    </View>
  );
}