import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../../utils/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  linearGradient: {
    flex: 1,
  },
  poster: {
    resizeMode: 'stretch',
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
});
