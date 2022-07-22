import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Topo from './componentes/topo/index';
import TelaInicial from './componentes/telainicial/index';
import TelaHistorico from './componentes/telahistorico/index';

const Tabs = createBottomTabNavigator();

export default function App() {
  return (

    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer >
        <Topo />

        <Tabs.Navigator>
          <Tabs.Screen name="Início" component={TelaInicial} />
          <Tabs.Screen name="Histórico" component={TelaHistorico} />
        </Tabs.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
