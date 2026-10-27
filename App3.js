import React, { Component } from 'react';
import { View, Text } from 'react-native';
function Welcome(props) {
    return (
        <Text>Welcome to {props.code} - {props.name}</Text>
    );
}
class ModuleInfo extends Component {
    render() {
        return (
            <View>
                <Text>These are my modules this semester:</Text>
                <Welcome
                    code="C346"
                    name="Mobile App Development"
                />
                <Welcome
                    code="C105"
                    name="Introduction to Programming"
                />
                <Welcome
                    code="C337"
                    name="Immersive Technologies"
                />
            </View>
        );
    }
}
export default function App() {
    return (
        <View>
            <ModuleInfo/>
        </View>
    );
}