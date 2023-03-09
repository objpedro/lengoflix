import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import colors from "../../utils/color";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'black',
    },
    poster: {
        resizeMode: "cover",
        width: '100%',
        height: RFValue(200),
        marginRight: 10,
        justifyContent: 'flex-end'
    },
    tituloDoFilme: {
        fontSize: RFValue(20),
        color: colors.branco,
        marginBottom: 5,
    },
    containerInfo: {
        alignItems: 'center',
        marginBottom: 10,
        flexDirection: 'row',
    },
    tituloOriginal: {
        fontSize: RFValue(10),
        color: colors.branco,
        marginBottom: 10,
    },
    genresContainer: {
        padding: 20
    },
    genres: {
        fontSize: RFValue(10),
        color: colors.branco,
        height: 15,
    },
    imdbLogo: {
        resizeMode: "cover",
        borderRadius: 3,
        width: 30,
        height: 15,
        marginRight: 10,
    },
    metacriticLogo: {
        resizeMode: "cover",
        width: 15,
        height: 15,
        marginRight: 10,
    },
    nota: {
        fontSize: RFValue(15),
        color: colors.branco,
        marginRight: 20,
    },
    descricao: {
        fontSize: RFValue(15),
        color: colors.branco,
    }
})

export default styles;