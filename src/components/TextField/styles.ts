import { StyleSheet } from "react-native";
import colors from '../../utils/color'
import { RFValue } from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        width: '100%',
        borderRadius: 10,
        color: colors.preto,
        paddingHorizontal: 20,
        backgroundColor: colors.branco,
        marginBottom: 10,
    },
    passwordFieldContainer: {
        flexDirection: 'row',
        width: '100%',
        borderRadius: 10,
        paddingLeft: 20,
        backgroundColor: colors.branco,
    },
    passwordField: {
        width: '80%',
        color: colors.preto,
    },
    btnEye: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtBtnCadastrar: {
        color: colors.branco,
        fontSize: RFValue(15),
    }
})

export { styles }