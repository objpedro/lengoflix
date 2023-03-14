import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { utilFonts } from "../../utils/fonts";
import colors from "../../utils/color";

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        padding: 20,
        marginTop: 16,
    },
    seasonNumber: {
        fontSize: RFValue(20),
        color: colors.branco,
    },
    episodeName: {
        fontSize: RFValue(10),
        color: colors.branco,
    },
    body: {
        padding: 20,
    },
    airDateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    airDate: {
        fontSize: RFValue(15),
        color: colors.branco,
    },
    voteAverage: {
        fontSize: RFValue(15),
        color: colors.branco,
    },
    overview: {
        fontSize: RFValue(15),
        color: colors.branco,
    }

})

export { styles }