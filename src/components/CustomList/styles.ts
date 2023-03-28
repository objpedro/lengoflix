import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import colors from "../../utils/color";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.preto,
        padding: 20,
        justifyContent: 'center',
    },
    header: {
        color: colors.branco,
        fontSize: RFValue(20),
        marginBottom: 10,
    },
    body: {
        flexDirection: 'row',
    },
    poster: {
        resizeMode: "cover",
        width: 100,
        height: 150,
        marginRight: 10,
        borderRadius: 5,
    },
})

export { styles };