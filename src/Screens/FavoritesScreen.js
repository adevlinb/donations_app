// IMPORTS
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import { useState, useEffect } from 'react';
import NoFavorites from "../../assets/no-favorites.png";

// COMPONENTS
import Header from '../Components/Header';
import BottomNav from '../Navigation/BottomNav';
import { UserInfo } from '../Components/UserInfo';

// APIS



export default function FavoritesScreen({ navigation }) {
	const [userFavorites, setUserFavorites] = useState([])

	useEffect(() => {
		async function getFavorites() {
			// call function to get user favorites
			// setUserFavorites(results);
		}
		getFavorites()
	}, [])


	return (
        <SafeAreaView style={styles.mainContainer}>
            <Header navigation={navigation} />
			<UserInfo />
			<View style={styles.bodyContainer}>
				{userFavorites.length > 0 ? 
					<>
						<Text>My Favorites:</Text>
						<Text>Show Favorites here...</Text>
					</>
				:
					<>
						<Text style={{fontWeight: 500, fontSize: 15}}>Oops! There’s nothing here.</Text> 
						<Text style={{fontWeight: 500, fontSize: 15}}>You have not selected favorites</Text>
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