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
    btnCadastrar: {
        width: '100%',
        marginTop: 20,
        backgroundColor: colors.azul,
        borderRadius: 10,
        padding: '4%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtBtnCadastrar: {
        color: colors.branco,
        fontSize: RFValue(15),
    }
})

export { styles }