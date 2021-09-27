import React from 'react';
import { SafeAreaView } from 'react-native';
import styles from './style/styles';
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaView style={styles.container} >
      <Header />
      <Form />
      <Footer />
      <StatusBar style="auto" hidden={true}/>
    </SafeAreaView>
  )
}

