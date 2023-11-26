// IMPORTS
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Pressable } from 'react-native'
import { useContext, useState } from 'react';
import { User } from '../Context/UserContext';

// COMPONENTS
import Header from '../Components/Header';
import BottomNav from '../Navigation/BottomNav';

// APIS


export default function ContactScreen({ navigation }) {
	const { user } = useContext(User);
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phoneNumber: "",
		message: "",
	})

	function handleChange(text, input) {
        if (input === "phoneNumber") {
            textNums = text.replace(/[^0-9\\.]+/g, '');
            return setFormData({ ...formData, [input]: textNums });
        }
		return setFormData({ ...formData, [input]: text });
    }

	async function handleSubmitMessage() {
		
	}


	return (
        <SafeAreaView style={styles.mainContainer}>
            <Header navigation={navigation} />
			<View style={styles.userInfoContainer}>
                <View style={styles.picContainer}><Image source={{ uri: user.profilePic}} style={styles.profilePic}/></View>
                <Text style={styles.userName}>{user.name}</Text>
            </View>
			<View style={styles.mainInputContainer}>
				<View style={styles.nameInputContainer}>
					<View style={styles.inputContainerSide}>
						<Text style={styles.placeholderText}>First Name</Text>
						<TextInput value={formData.firstName} onChangeText={(text) => handleChange(text, "firstName")}></TextInput>
					</View>
					<View style={styles.inputContainerSide}>
						<Text style={styles.placeholderText}>Last Name</Text>
						<TextInput value={formData.lastName} onChangeText={(text) => handleChange(text, "lastName")}></TextInput>
					</View>	
				</View>
				<View style={styles.inputContainer}>
					<Text style={styles.placeholderText}>Email</Text>
					<TextInput value={formData.email} inputMode="email" placeholder="example@example.com" onChangeText={(text) => handleChange(text, "email")}></TextInput>
				</View>
				<View style={styles.inputContainer}>
					<Text style={styles.placeholderText}>Phone Number</Text>
					<TextInput value={`${formData.phoneNumber.length > 0 ? "(" : ""}${formData.phoneNumber.slice(0,3)}${formData.phoneNumber.length > 3 ? ") " : ""}${formData.phoneNumber.slice(3,6)}${formData.phoneNumber.length >= 7 ? "-" : ""}${formData.phoneNumber.slice(6,10)}`} style={styles.textInputs} placeholder='(000) 000-0000' inputMode='tel' keyboardType="numeric" onChangeText={(text) => handleChange(text, "phoneNumber")}></TextInput>
				</View>
				<View style={styles.textBox}>
					<Text style={styles.placeholderText}>Types your message here...</Text>
					<TextInput value={formData.message}  style={styles.textBoxInput} multiline numberOfLines={4} onChangeText={(text) => handleChange(text, "message")}></TextInput>
				</View>
			</View>
			<View style={styles.submitContainer}>
				<Pressable style={styles.submitButton} onPress={handleSubmitMessage}><Text style={{color: "white"}}>Submit</Text></Pressable>
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
	mainInputContainer: {
		width: "100%",
		height: "40%",
		justifyContent: "space-evenly",
		paddingHorizontal: 25,
		gap: 10
	},
	nameInputContainer: {
		flexDirection: "row",
		justifyContent: "space-between"
	},
	inputContainer: {
        borderStyle: "solid",
        borderWidth: 1.5,
		borderColor: "#B0B0B0",
		width: "100%",
		height: 40,
		paddingHorizontal: 5,
		justifyContent: "center",
	},
	inputContainerSide: {
        borderStyle: "solid",
        borderWidth: 1.5,
		borderColor: "#B0B0B0",
		width: "48%",
		height: 40,
		paddingHorizontal: 5,
		justifyContent: "center",
	},
	placeholderText: {
		color: "#B0B0B0",
		fontSize: "10px"
	},
	textBox: {
		flexGrow: 1,
		borderStyle: "solid",
        borderWidth: 1.5,
		borderColor: "#B0B0B0",
		width: "100%",
		height: 40,
		paddingVertical: 5,
		paddingHorizontal: 5,
		justifyContent: "center",
	},
	textBoxInput: {
		flexGrow: 1,
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