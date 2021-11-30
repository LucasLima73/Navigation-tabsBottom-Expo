import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// import { Container } from './styles';

const Setting = () => {
    return (
        <View style={styles.container}>
        <Text>Setting</Text>
        </View>
    );
}

export default Setting;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#355c7d',

    },
});