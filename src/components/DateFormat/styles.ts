import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import colors from "../../utils/color";

const styles = StyleSheet.create({
    releaseDate: {
        fontSize: RFValue(15),
        color: colors.branco,
    },
})

export default styles;