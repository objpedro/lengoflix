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
    searchContainer:{
        width: '100%',
        paddingHorizontal: 20,
        flexDirection: 'row'
    },
    searchFilme:{
        backgroundColor: '#fff',
        color: '#000',
    },
    searchButton:{
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default styles;