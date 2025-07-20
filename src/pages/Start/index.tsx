import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import colors from '../../utils/color';

export default function StartScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Lengoflix</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Login/Cadastro</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.outlineButton]}
        onPress={() => navigation.replace('Home')}
      >
        <Text style={[styles.buttonText, styles.outlineText]}>
          Continuar sem login
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c1c1c',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
  },
  button: {
    width: '100%',
    backgroundColor: colors.azul,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 8,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#fff',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  outlineText: {
    color: '#fff',
  },
});
