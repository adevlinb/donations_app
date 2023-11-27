// IMPORTS
import { StyleSheet, Text, View, Image } from 'react-native';
import { useContext } from 'react';
import { User } from '../Context/UserContext';

// COMPONENTS
import ProfilePicBackup from './ProfilePicBackup';

// APIS

export default function UserInfo() {
    const { user } = useContext(User);

    return (
        <View style={styles.userInfoContainer}>
            <View style={styles.picContainer}><Image source={{ uri: user.profilePic } || <ProfilePicBackup />} style={styles.profilePic} /></View>
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
        backgroundColor: "red",
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