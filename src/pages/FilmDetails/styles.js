import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    tituloDoFilme: {
        fontSize: 20,
        marginBottom: 10
    },
    poster: {
        resizeMode: "cover",
        width: 200,
        height: 300,
        marginRight: 10,
        marginBottom: 20,
        borderRadius: 5,
    },
    descricao:{
        fontSize: 15
    }
})

export default styles;