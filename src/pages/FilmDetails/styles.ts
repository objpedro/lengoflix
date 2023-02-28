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
    containerInfo: {
        alignItems: 'center',
        marginBottom: 10,
        flexDirection: 'row',
    },
    tituloOriginal: {
        fontSize: 15,
        color: '#fff',
        marginBottom: 10,
    },
    imdbLogo: {
        resizeMode: "cover",
        width: '10%',
        height: '70%',
        marginRight: 10,
    },
    metacriticLogo: {
        resizeMode: "cover",
        width: '6%',
        height: '100%',
        marginRight: 10,
    },
    nota: {
        fontSize: 15,
        color: '#fff',
        marginRight: 20,
    },
    poster: {
        resizeMode: "cover",
        width: '100%',
        height: '40%',
        marginRight: 10,
        marginBottom: 20,
        borderRadius: 5,
    },
    descricao: {
        fontSize: 15,
        color: '#fff'
    }
})

export default styles;