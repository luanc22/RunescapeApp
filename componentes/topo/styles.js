import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingHorizontal: 20,
        height: 100,
        justifyContent: 'start',
        display: 'flex',
        alignItems: "center",
        backgroundColor: '#8e1600',
        position: "fixed",
        borderBottomWidth: 3,
    },
    title: {
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#fff',
    },
    image: {
        width: 40,
        height: 40,
        alignContent: "flex-start",
    }
})

export default styles;