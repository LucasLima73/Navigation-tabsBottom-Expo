import React from 'react';
import { View, Text, StyleSheet  } from 'react-native';

// import { Container } from './styles';

const Find = () => {
    return (
        <View style={styles.container}>
        <Text>Find</Text>
        </View>
    );
}

export default Find;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f67280',

    },
});