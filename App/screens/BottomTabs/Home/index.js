import * as React from 'react';
import { View, Text, SafeAreaView, StatusBar, } from 'react-native';
import { Colors } from '../../../utils/Colors';
import RecoList from './components/RecoList';
import TopBar from './components/TopBar';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.primaryBlack, }}>
      <StatusBar  backgroundColor={Colors.primaryBlack} barStyle='light-content' />
      <TopBar />
      <RecoList />
    </SafeAreaView>
  );
}