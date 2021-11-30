import React from 'react';
import { View, Text, StyleSheet  } from 'react-native';

// import { Container } from './styles';

const Chat = () => {
  return (
      <View style={styles.container}>
          <Text>Chat</Text>
      </View>
  );
}

export default Chat;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8b195',
    },
});