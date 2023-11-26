// IMPORTS
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import { useContext, useState, useEffect } from 'react';
import { User } from '../Context/UserContext';
import NoFavorites from "../../assets/no-favorites.png";

// COMPONENTS
import Header from '../Components/Header';
import BottomNav from '../Navigation/BottomNav';

// APIS



export default function MyDonationsScreen({ navigation }) {
	const { user } = useContext(User);
	const [activeDonations, setActiveDonations] = useState([])
	const [pastDonations, setPastDonations] = useState([])

	useEffect(() => {
		async function getDonations() {
			// call function to get donations
			// setUserFavorites(results);
		}
		getDonations()
	}, [])

	return (
        <SafeAreaView style={styles.mainContainer}>
            <Header navigation={navigation} />
			<View style={styles.userInfoContainer}>
                <View style={styles.picContainer}><Image source={{ uri: user.profilePic}} style={styles.profilePic}/></View>
                <Text style={styles.userName}>{user.name}</Text>
            </View>
			<View style={styles.bodyContainer}>
				{activeDonations.length > 0 && pastDonations.length > 0 ? 
					<>
						<Text>My Active Donations:</Text>
						<Text>Show Active Donations here...</Text>
						<Text>My Past Donations:</Text>
						<Text>Show Past Donations here...</Text>
					</>
				:
					<>
						<Text style={{fontWeight: 500, fontSize: 15}}>Oops! There’s nothing here.</Text> 
						<Text style={{fontWeight: 500, fontSize: 15}}>You have not made any donations, yet!</Text>
						<Image source={NoFavorites} style={styles.noFavImage}/>
					</>
				}
			</View>
            <BottomNav navigation={navigation}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
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
	bodyContainer: {
		alignItems: "center",
		flexGrow: 1,
		width: "100%"
	},
	noFavImage: {
		width: "100%",
		height: 300,
		resizeMode: "contain",
	}

})