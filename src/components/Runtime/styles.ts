import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import colors from "../../utils/color";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'black',
    },
    txtHours: {
        fontSize: RFValue(11),
        color: colors.branco,
        height: 15,
    }
})

export default styles;