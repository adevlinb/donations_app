// IMPORTS
import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useContext } from 'react';
import { User } from '../Context/UserContext';
import changeAccountIcon from "../../assets/logos/changeAccountIcon.png"
import { Entypo } from '@expo/vector-icons';

// SCREENS

// APIS
import * as usersService from "../utilities/users-service";

export default function CustomDrawerItems(props) {
    const { user } = useContext(User);

    function logout() {
        usersService.logOut();
        setUser(null);
    }

    return (
        <DrawerContentScrollView style={styles.mainContainer} contentContainerStyle={styles.contentMainContainer} {...props}>
            <View style={styles.userInfoContainer}>
                <View style={styles.picContainer}><Image source={{ uri: user.profilePic}} style={styles.profilePic}/></View>
                <Text style={styles.userName}>{user.name}</Text>
            </View>
            <DrawerItem label="Home" labelStyle={styles.itemLabels} style={styles.itemStyle} onPress={() => props.navigation.navigate("Home")}/>
            <DrawerItem label="Search" labelStyle={styles.itemLabels} style={styles.itemStyle} onPress={() => props.navigation.navigate("Search")}/>
            <DrawerItem label="ManageProfile" labelStyle={styles.itemLabels} style={styles.itemStyle} onPress={() => props.navigation.navigate("ManageProfile")}/>
            <DrawerItem label="MyDonations" labelStyle={styles.itemLabels} style={styles.itemStyle} onPress={() => props.navigation.navigate("MyDonations")}/>
            <DrawerItem label="Favorites" labelStyle={styles.itemLabels} style={styles.itemStyle} onPress={() => props.navigation.navigate("Favorites")}/>
            <DrawerItem label="Settings" labelStyle={styles.itemLabels} style={styles.itemStyle} onPress={() => props.navigation.navigate("Settings")}/>
            <DrawerItem label="Contact" labelStyle={styles.itemLabels} style={styles.itemStyle} onPress={() => props.navigation.navigate("Contact")}/>
            <DrawerItem label="Cart" labelStyle={styles.itemLabels} style={styles.itemStyle} onPress={() => props.navigation.navigate("Cart")} icon={ () => <View style={{marginRight: -25}}><Entypo name="shopping-cart" size={24} color="black" /></View>} />
            <View style={styles.bottomContainer}>
                <Pressable style={styles.logoutButton}><Text style={styles.logoutButtonText}>Logout</Text></Pressable>
                <Pressable style={styles.changeAccountContainer}><Image source={changeAccountIcon}/><Text>Change Account</Text></Pressable>
            </View>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    contentMainContainer: {
        flexGrow: 1
    },
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
    itemLabels: {
        fontWeight: 700, 
        color: "black"
    },
    itemStyle: {
        marginTop: 0, 
        marginBottom: 0,
    },
    bottomContainer: {
        justifyContent: "space-evenly",
        flexGrow: 1,
        paddingLeft: 15
    },
    logoutButton: {
        width: "50%",
        borderRadius: 7.5,
        alignItems: "center",
        backgroundColor: "rgb(24,46,42)",
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    logoutButtonText: {
        color: "white",
        fontWeight: "600",
    },
    changeAccountContainer: {
        flexDirection: "row",
        alignItems: "center"
    }
})