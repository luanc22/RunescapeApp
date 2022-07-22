import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: '#e1c699',
    paddingVertical: 20,
    borderTopWidth: 1,
  },
  box: {
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: 300,
    borderWidth: 2,

  },
  boxtext: {
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: 300,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2
  },
  image: {
    width: 300,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginLeft: 20,
  },
  name: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold',
    paddingHorizontal: 30
    
  },
  text: {
    fontStyle: 'italic',
    margin: 10,
  }
});

export default styles;