import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import colors from "../../../../utils/color";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.branco,
        marginBottom: 10
    },
    seasonName: {
        color: colors.preto,
        padding: 10,
    },
    episodeList: {
        marginBottom: 10,
    }
})

export { styles }