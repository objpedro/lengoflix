import { StyleSheet } from "react-native";
import colors from '../../utils/color'
import { RFValue } from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.preto,
    },
    header: {
        fontSize: RFValue(20),
        color: colors.azul,
        marginBottom: 30,
    },
    input: {
        width: '100%',
        borderRadius: 10,
        color: colors.preto,
        paddingHorizontal: 20,
        backgroundColor: colors.branco,
        marginBottom: 10,
    },
    btnLogin: {
        width: '100%',
        marginTop: 20,
        backgroundColor: colors.azul,
        borderRadius: 10,
        padding: '4%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtBtnLogin: {
        color: colors.branco,
        fontSize: RFValue(15),
    },
    labelError: {
        alignSelf: 'flex-start',
        color: colors.error,
        marginBottom: 8,
    },
    forgotPasswordContainer: {
        marginTop: 10,
    },
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
    },
    btnSignUp: {
        marginTop: 30,
    }
})

export { styles }