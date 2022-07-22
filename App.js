import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Topo from './componentes/topo/index';
import Card from './componentes/card/index';
import Conteudo from './componentes/conteudo/index';
import Footer from './componentes/footer/index';

export default function App() {
  return (
    <View style={styles.container}>
      <Topo />
      <StatusBar style="auto" />
      <ScrollView style={styles.container}>
      <Card />
      <Conteudo />
      <Footer />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
