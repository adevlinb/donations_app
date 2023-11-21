import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import smallLogo from "../../../assets/smallLogo.png"
import { Ionicons } from '@expo/vector-icons';

export default function ProfileSetup({ user, nextPage }) {
  return (
    <View style={styles.mainContainer}>
        <View style={styles.header}>
            <Text>Donations.com</Text>
            <View style={styles.logo}><Image source={smallLogo} /></View>
        </View>
        <View style={styles.middleContainer}>
            <View>
                <Text>Welcome, {user.name}</Text>
                <Text>Let's setup your profile!</Text>
            </View>
            <View>
                <View style={styles.iconBorder}><Ionicons name="person" size={50} color="black" /></View>
                
                <Ionicons name="ios-add-circle" size={24} color="blue" />

            </View>
        </View>
        <View style={styles.bottomContainer}>
            <Pressable style={styles.nextButton} onPress={nextPage}>
                <Text style={{ color: "white" }}>Next</Text>
            </Pressable>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: "center",
        padding: 10,
        width: "100%",
        height: "100%",
        justifyContent: "space-between",
    },
    middleContainer: {
        width: "100%",
        flexGrow: 1,
        alignItems: "center",
        paddingVertical: 10
    },
    bottomContainer: {
        width: "100%",
        alignItems: "center",
    },
    header: {
        width: "100%",
        height: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    logo: {
        position: "absolute",
        right: 0
    },
    nextButton: {
        padding: 20,
        borderRadius: 7.5,
        width: "50%",
        alignItems: "center",
        backgroundColor: "rgb(24,46,42)",
    },
    iconBorder: {
        borderColor: "black",
        borderWidth: 2,
        borderRadius: "50%"
    }

})