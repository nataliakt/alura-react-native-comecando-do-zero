import React from 'react';
import { SafeAreaView, View, StatusBar } from 'react-native';

import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

import Cesta from './src/telas/Cesta';

export default function App() {
  let [ fontesCarregadas ] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  if (!fontesCarregadas) {
    return <View />;
  }

  return <SafeAreaView>
    <StatusBar />
    <Cesta />
  </SafeAreaView>;
}
