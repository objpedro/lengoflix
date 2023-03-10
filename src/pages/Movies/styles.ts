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
        color: colors.branco,
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
        width: '100%',
        paddingHorizontal: 20,
        flexDirection: 'row'
    },
    searchFilme: {
        backgroundColor: colors.branco,
        color: colors.preto,
    },
    searchButton: {
        backgroundColor: colors.branco,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default styles;