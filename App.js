import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const Welcome = () => {
    return (
        <View style={styles.container}>
            <Text>
                These are my modules this semester:
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight || 0,
    },
});

export default Welcome;