import React, { Component } from 'react';
import { View, Text } from 'react-native';
function Welcome() {
    return (
        <Text>Welcome to C346 - Mobile App Development</Text>
    );
}
class ModuleInfo extends Component {
    render() {
        return (
            <Text>These are my modules this semester:</Text>
        );
    }
}
export default function App() {
    return (
        <View>
            <ModuleInfo />
        </View>
    );
}
