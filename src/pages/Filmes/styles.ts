import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        padding: 20,
    },
    cabecalho: {
        color: '#fff',
        fontSize: 20,
        marginBottom: 10,
    },
    poster: {
        resizeMode: "cover",
        width: 100,
        height: 150,
        marginRight: 10,
        borderRadius: 5,
    },
    searchContainer: {
        marginTop: 20,
        width: '100%',
        paddingHorizontal: 20,
        flexDirection: 'row',
    },
    searchFilme: {
        width: '80%',
        backgroundColor: '#fff',
        color: '#000',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        paddingLeft: 10,
    },
    searchButton: {
        width: '20%',
        backgroundColor: '#1D70A2',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopEndRadius: 10,
        borderBottomEndRadius: 10,
    },
    textButton: {
        color: '#fff',
    }
})

export default styles;