import React from 'react';
import { Text, View } from 'react-native';
import styles from '../style/styles';

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.footer}>
                Author: Juuso Seppälä
            </Text>
        </View>
    )
}