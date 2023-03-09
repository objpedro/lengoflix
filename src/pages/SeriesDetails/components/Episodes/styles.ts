import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import colors from "../../../../utils/color";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.preto,
        padding: 20,
    },
    txt: {
        color: 'white',
    }
})

export { styles }