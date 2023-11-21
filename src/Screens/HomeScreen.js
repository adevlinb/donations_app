import { StyleSheet, Text, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import { logOut } from '../utilities/users-service'
import { useContext, } from 'react';
import { User } from '../Context/UserContext';

export default function HomeScreen() {
    const { user, setUser } = useContext(User);

    function logout() {
        logOut();
        setUser(null);
    }
    return (
        <SafeAreaView style={styles.mainView}>
            <Text>HomeScreen</Text>
            <Pressable onPress={logout}>
                <Text>Logout</Text>
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainView: {
        padding: 5,
        height: "100%",
        alignItems: "center",
        paddingTop: 50
    },
})