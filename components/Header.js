import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import styles from '../style/styles';

export default function Header() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>
                Brew-O-Meter
            </Text>
        </SafeAreaView>
    )
}
