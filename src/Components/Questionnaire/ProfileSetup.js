import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';
import React from 'react';
import smallLogo from "../../../assets/logos/smallLogo.png";
import { Ionicons } from '@expo/vector-icons';

export default function ProfileSetup({ user, nextPage, profileUpdate, setProfileUpdate }) {

    function handleChange() {
        setProfileUpdate({ ...profileUpdate, [input]: text });
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.header}>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>Donations.com</Text>
                <View style={styles.logo}><Image source={smallLogo} /></View>
            </View>
            <View style={styles.middleContainer}>
                <View style={{alignItems: "center"}}>
                    <Text style={{ fontSize: 35, fontWeight: "bold" }}>Welcome, {user?.name[0].toUpperCase()}{user?.name.slice(1)}!</Text>
                    <Text style={{ fontSize: 20 }}>Let's setup your profile.</Text>
                </View>
                <Pressable>
                    <View style={styles.iconsContainer}>
                        <Ionicons style={styles.addSign} name="ios-add-circle" size={27} color="blue" />
                        <View style={styles.iconBorder}><Ionicons name="person" size={60} color="black" /></View>
                        <View style={styles.iconBackground}></View>
                    </View>
                    <Text style={{color:"blue"}} >Upload Your Profile Picture</Text>
                </Pressable>
                <View style={styles.inputContainer}>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>Phone Number:</Text>
                    <TextInput style={styles.textInputs} placeholder='(000) 000-0000' keyboardType="numeric" ></TextInput>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>Donation Goal:</Text>
                    <TextInput style={styles.textInputs} placeholder='$0.00'></TextInput>
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
        padding: 15,
        width: "100%",
        height: "100%",
        justifyContent: "space-between",
    },
    middleContainer: {
        width: "100%",
        flexGrow: 1,
        alignItems: "center",
        paddingVertical: 10,
        gap: 25,
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
        padding: 10,
        borderRadius: 7.5,
        width: "50%",
        alignItems: "center",
        backgroundColor: "rgb(24,46,42)",
    },
    iconsContainer: {
        alignItems: "center",
        marginBottom: 10,
    },  
    iconBorder: {
        borderColor: "black",
        borderWidth: 2,
        borderRadius: "50%",
        overflow: "hidden",
    },
    addSign: {
        position: "absolute",
        bottom: 0,
        right: 45,
        zIndex: 1,
    },
    iconBackground: {
        position: "absolute",
        bottom: 5,
        right: 50,
        zIndex: 0,
        height: 15,
        width: 15,
        backgroundColor: "white",
    },
    inputContainer: {
        width: "100%",
        paddingHorizontal: 10,
    },
    textInputs: {
        width: "100%",
        alignSelf: "stretch",
        height: 30,
        borderStyle: "solid",
        borderColor: "grey",
        borderWidth: 1,
        borderRadius: 7.5,
        paddingHorizontal: 5,
    }

})