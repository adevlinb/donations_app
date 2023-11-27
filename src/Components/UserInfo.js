// IMPORTS
import { StyleSheet, Text, View } from 'react-native'

// COMPONENTS


// APIS

export default function UserInfo() {
  return (
    <View style={styles.userInfoContainer}>
        <View style={styles.picContainer}><Image source={{ uri: user.profilePic}} style={styles.profilePic}/></View>
        <Text style={styles.userName}>{user?.firstName[0].toUpperCase()}{user?.firstName.slice(1)} {user?.lastName[0].toUpperCase()}{user?.lastName.slice(1)}</Text>
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