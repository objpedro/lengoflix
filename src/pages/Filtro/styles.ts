import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import colors from "../../utils/color";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.preto,
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
        flexDirection: 'row',
        marginBottom: 10,
    },
    searchFilme: {
        width: '80%',
        paddingHorizontal: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor: '#fff',
    },
    searchButton: {
        width: '20%',
        backgroundColor: colors.azul,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textSearchButton: {
        color: '#fff',
    }
})

export { styles };