import React from 'react';
import { View, Text, StyleSheet  } from 'react-native';

// import { Container } from './styles';

const Home = () => {
    return (
        <View style={styles.container}>
        <Text>Home</Text>
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c06c84',

    },
});