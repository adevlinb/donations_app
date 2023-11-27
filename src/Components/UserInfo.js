// IMPORTS
import { StyleSheet, Text, View, Image } from 'react-native';
import { useContext } from 'react';
import { User } from '../Context/UserContext';
import { Ionicons } from '@expo/vector-icons';

// COMPONENTS
import {  ProfilePicBackup } from "./ProfilePicBackup.js"

// APIS

export default function UserInfo() {
    const { user } = useContext(User);

    return (
        <View style={styles.userInfoContainer}>
            <View style={styles.picContainer}>
                {user.profilePic === "" ? 
                    <ProfilePicBackup />
                :
                    <Image source={{ uri: user.profilePic }} style={styles.profilePic} />
                }
            </View>

            <Text style={styles.userName}>{user?.formattedName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    userInfoContainer: {
        alignItems: "center",
        justifyContent: "center",
        height: "25%",
    },
    picContainer: {
        borderRadius: "50%",
        overflow: "hidden",
        margin: 10
    },
    profilePic: {
        width: 90,
        height: 90
    },
    userName: {
        textDecorationLine: 'underline',
    },
})