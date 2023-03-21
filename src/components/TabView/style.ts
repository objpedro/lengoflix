import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../../utils/color';

const styles = StyleSheet.create({
    tabNavigator: {
        backgroundColor: colors.azul,
        elevation: 1,
    },
    txtNameScreen: {
        fontSize: RFValue(15),
        color: colors.branco,
    },
    tabBarIcon: {
        width: '100%',
    },
    tabBarIndicatorStyle: {
        backgroundColor: colors.branco,
    }
})

export { styles };