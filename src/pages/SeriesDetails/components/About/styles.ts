import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import colors from "../../../../utils/color";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.preto,
        padding: 20,
    },
    tituloOriginal: {
        fontSize: RFValue(10),
        color: colors.branco,
    },
    //genres
    genresContainer: {
        marginBottom: 10,
    },
    genres: {
        fontSize: RFValue(10),
        color: colors.branco,
        height: 15,
    },
    //network
    networksContainer: {
        marginBottom: 10,
        justifyContent: 'center',
    },
    containerLogo: {
        backgroundColor: colors.branco,
        borderRadius: 5,
        padding: 3,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    networks: {
        resizeMode: "contain",
        width: 40,
        height: 40,
    },
    //ratings
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

export { styles }