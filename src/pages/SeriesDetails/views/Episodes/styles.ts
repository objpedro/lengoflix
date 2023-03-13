import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import colors from "../../../../utils/color";
import { utilFonts } from "../../../../utils/fonts";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.branco,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    seasonName: {
        color: colors.preto,
        fontSize: RFValue(20),
    },
    epCount: {
        fontSize: RFValue(15),
    },
    episodeList: {
        marginBottom: 10,
    }
})

export { styles }