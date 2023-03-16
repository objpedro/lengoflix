import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import colors from "../../utils/color";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: colors.preto,
    },
    poster: {
        resizeMode: "cover",
        width: '100%',
        height: RFValue(200),
        marginRight: 10,
        justifyContent: 'flex-end'
    },
    linearGradient: {
        marginTop: 16,
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
        fontSize: RFValue(11),
        color: colors.branco,
        height: 15,
    },
    runTimeContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    tmdbLogo: {
        resizeMode: "center",
        width: 30,
        height: '100%',
        marginRight: 10,
    },
    releaseDateContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    releaseDate: {
        fontSize: RFValue(15),
        color: colors.branco,
    },
    voteAverageContainer: {
        flexDirection: 'row',
    },
    voteAverage: {
        fontSize: RFValue(15),
        color: colors.branco,
    },
    descricao: {
        fontSize: RFValue(15),
        color: colors.branco,
    }
})

export default styles;