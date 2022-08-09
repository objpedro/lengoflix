import React from 'react';
import { View, StatusBar } from 'react-native';

import { Home } from './src/pages/Home';

export default function App() {
  return (
    <View>
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}