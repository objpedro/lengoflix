import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../../utils/color';

const baseText = {
  color: colors.branco,
};

const styles = StyleSheet.create({
  // Containers principais
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.preto,
  },
  containerContent: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.azulMarinho,
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    padding: 20,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },

  // Texto
  textLoading: {
    ...baseText,
    marginRight: 10,
    fontSize: RFValue(15),
  },
  tituloDoFilme: {
    ...baseText,
    fontSize: RFValue(16),
    marginBottom: 5,
  },
  tituloOriginal: {
    ...baseText,
    fontSize: RFValue(10),
    paddingVertical: 10,
  },
  genres: {
    ...baseText,
    fontSize: RFValue(11),
    height: 15,
  },
  releaseDate: {
    ...baseText,
    fontSize: RFValue(15),
  },
  voteAverage: {
    ...baseText,
    fontSize: RFValue(15),
  },
  descricao: {
    ...baseText,
    fontSize: RFValue(13),
  },
  tagline: {
    ...baseText,
    fontSize: RFValue(10),
    paddingVertical: 10,
    fontStyle: 'italic',
  },

  // Estrutura
  poster: {
    resizeMode: 'cover',
    width: '100%',
    height: RFValue(200),
    justifyContent: 'flex-end',
  },
  linearGradient: {
    marginTop: 16,
  },
  genresContainer: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  runTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tmdbLogo: {
    resizeMode: 'center',
    width: 30,
    height: '100%',
    marginRight: 10,
  },
  containerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  releaseDateContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  voteAverageContainer: {
    flexDirection: 'row',
  },

  // Utilitários
  divider: {
    backgroundColor: colors.branco,
    paddingVertical: 0.04,
  },
  overviewContainer: {
    height: '20%',
  },
});

export default styles;
