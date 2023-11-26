// IMPORTS
import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native';

// COMPONENTS
import Header from '../Components/Header';
import BottomNav from '../Navigation/BottomNav';

// APIS

export default function ThankYouScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <Header navigation={navigation} />
			<View style={styles.thankYouContainer}>
                <Text style={{ fontWeight: 700, fontSize: 22.5}}>Thank you for reaching out!</Text>
                <View style={{ gap: 20 }}>
                    <Text style={{ fontWeight: 700, fontSize: 15, textAlign: 'center'}}>Your message has been received, and a member of our team will be in contact with you shortly.</Text>
                    <Text style={{ fontWeight: 700, fontSize: 15, textAlign: 'center'}}>Have a wonderful day!</Text>
                </View>
			</View>
			<View style={styles.submitContainer}>
				<Pressable style={styles.submitButton} onPress={() => navigation.navigate("Home")}><Text style={{color: "white", fontWeight: 600}}>Home</Text></Pressable>
			</View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flexGrow: 1,
    },
	thankYouContainer: {
		width: "100%",
		flexGrow: 1,
        alignItems: "center",
        justifyContent: 'space-evenly',
        padding: 40
	},
	submitContainer: {
		flexGrow: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	submitButton: {
		padding: 10,
        borderRadius: 7.5,
        width: "50%",
        alignItems: "center",
        backgroundColor: "rgb(24,46,42)",
	}

})