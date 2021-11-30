import React from 'react';
import { View , Text, StyleSheet } from 'react-native';

// import { Container } from './styles';

const Post = () => {
    return (
        <View style={styles.container}>
        <Text>Post</Text>
        </View>
    );
}

export default Post;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6c5b7b',

    },
});