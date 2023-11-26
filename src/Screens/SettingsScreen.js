// IMPORTS
import { StyleSheet, Text, View, SafeAreaView, Image, Pressable } from 'react-native'
import { useContext } from 'react';
import { User } from '../Context/UserContext';

// COMPONENTS
import Header from '../Components/Header'
import BottomNav from '../Navigation/BottomNav'
import SettingsNav from '../Navigation/SettingsNav';

// APIS



export default function SettingsScreen({ navigation }) {
	const { user } = useContext(User);

	return (
        <SafeAreaView style={styles.mainContainer}>
            <Header navigation={navigation} />
			<View style={styles.userInfoContainer}>
				<View style={styles.picContainer}><Image source={{ uri: user.profilePic}} style={styles.profilePic}/></View>
				<Text style={styles.userName}>{user.name}</Text>
			</View>
			<View style={styles.settingsContainer}>
				<Text style={styles.labelText}>Settings:</Text>
				<SettingsNav navigation={navigation}/>
			</View>
            <BottomNav navigation={navigation}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flexGrow: 1,
		padding: 15,
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
	settingsContainer: {
		padding: 15
	},
	labelText: {
		fontWeight: "bold",
		fontSize: 20,
	},


})