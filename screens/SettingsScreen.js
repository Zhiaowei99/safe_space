import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import FormButton from '../components/FormButton';
import { CommonActions } from "@react-navigation/native";

const SettingsScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <FormButton buttonTitle='Logout' onPress={() =>
                navigation.dispatch(CommonActions.reset({
                    index: 0,
                    routes: [{ name: "Login" }]
                }))}
            />
        </View>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        fontSize: 20,
        color: '#333333'
    }
});