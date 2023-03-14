import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { utilFonts } from "../../../../utils/fonts";
import colors from "../../../../utils/color";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.branco,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        borderRadius: 5,
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