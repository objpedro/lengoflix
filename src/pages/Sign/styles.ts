import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import colors from "../../utils/color";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    },
    iconBackground:{
        backgroundColor: colors.azul,
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10%'
    },
})

export default styles;