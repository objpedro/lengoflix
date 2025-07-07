import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../../utils/color';

const styles = StyleSheet.create({
    btnLogin: {
        width: '100%',
        marginTop: 20,
        backgroundColor: colors.azul,
        borderRadius: 10,
        padding: '4%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    txtBtnLogin: {
        color: colors.branco,
        fontSize: RFValue(15),
    },
})

export { styles };