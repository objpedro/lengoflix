import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import colors from "../../utils/color";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'black',
    },
    tituloDoFilme: {
        fontSize: RFValue(30),
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
    poster: {
        resizeMode: "cover",
        width: '100%',
        height: '40%',
        marginRight: 10,
        marginBottom: 20,
        borderRadius: 5,
    },
    descricao: {
        fontSize: RFValue(15),
        color: colors.branco,
    }
})

export default styles;