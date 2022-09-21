import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'black',
    },
    tituloDoFilme: {
        fontSize: 20,
        marginBottom: 10,
        color: '#fff'
    },
    poster: {
        resizeMode: "cover",
        width: '100%',
        height: '40%',
        marginRight: 10,
        marginBottom: 20,
        borderRadius: 5,
    },
    descricao:{
        fontSize: 15,
        color: '#fff'
    }
})

export default styles;