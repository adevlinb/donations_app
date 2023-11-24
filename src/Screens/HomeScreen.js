import { StyleSheet, Text, SafeAreaView, Pressable, View, Image } from 'react-native'
import { logOut } from '../utilities/users-service'
import { useContext, } from 'react';
import { User } from '../Context/UserContext';
import { Ionicons } from '@expo/vector-icons';
import smallLogo from "../../assets/logos/smallLogo.png";
import { useState } from 'react';

export default function HomeScreen() {
    const { user, setUser } = useContext(User);
    const [sideNav, setSideNav] = useState(false);


    function logout() {
        logOut();
        setUser(null);
    }
    return (
        <SafeAreaView style={styles.mainView}>
            <View style={styles.header}>
                <Ionicons onPress={() => setSideNav(!sideNav)} name="menu" size={24} color="black" />
                <Text>Donations.com</Text>
                <Image source={smallLogo} />
            </View>
            <View style={styles.statsContainer}>
                <Text>Stats</Text>
            </View>
            <View style={styles.subHeader}>
                <Text>SubHeader and refresh</Text>
            </View>
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
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: 10
    },
    statsContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: 10,
        backgroundColor: "red",
        borderRadius: 5
    }
})