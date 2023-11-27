// IMPORTS
import { StyleSheet, Text, View, SafeAreaView, Image, Pressable, TextInput } from 'react-native'
import { useContext, useState, useEffect } from 'react';
import { User } from '../Context/UserContext';
import * as ImagePicker from "expo-image-picker";

// COMPONENTS
import Header from '../Components/Header'
import BottomNav from '../Navigation/BottomNav'
import UserInfo from '../Components/UserInfo';

// APIS
import * as usersAPI from "../utilities/users-api";
import * as usersService from "../utilities/users-service";
import { formatPhoneNumber } from '../utilities/constants';


export default function ManageProfileScreen({ navigation }) {
	const { user } = useContext(User);
	const [image, setImage] = useState(null);
    const [formData, setFormData] = useState(user);
	const [editFirstName, setEditFirstName] = useState(false);
	const [editLastName, setEditLastName] = useState(false);
	const [editDonationGoal, setEditDonationGoal] = useState(false);
	const [editPhoneNumber, setEditPhoneNumber] = useState(false);

	console.log(user)


	useEffect(() => {
        if (!user?.mediaGalleryPermission) {
            (async () => {
                const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
                setHasGalleryPermission(galleryStatus.status === "granted");
            })()
        }
    }, [])

	function handleChange(text, input) {
        if (input === "phoneNumber") {
            textNums = text.replace(/[^0-9\\.]+/g, '');
            setFormData({ ...formData, [input]: textNums });
        }

        else return setFormData({ ...formData, [input]: text });
        
    }

    async function pickImage() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4,3],
            quality: 1,
        });

        if (result?.canceled || result?.cancelled) setImage(null)
        else setImage(result?.assets[0]) 
    }

	async function submitProfileUpdates() {
        let photoURL = null;

        if (image) {
            const imageData = new FormData();
            imageData.append('photo', {
                name: image.fileName,
                type: image.type,
                photo: image.uri,
                uri: Platform.OS === 'ios' ? image.uri.replace('file://', '') : image.uri,
            });
            // UPLOAD PHOTO
            photoURL = await usersAPI.uploadProfilePhoto(imageData)
        }
        
        // UPDATE PROFILE
        if (image) formData.profilePic = photoURL.url
        formData.phoneNumber = parseInt(formData.phoneNumber)
        formData.donationGoal = parseInt(formData.donationGoal)
        const updatedProfile = await usersAPI.updateProfile(formData);
        setUser(updatedProfile);
        return usersService.updateUserStorage(updatedProfile);
    }

	return (
        <SafeAreaView style={{ flexGrow: 1 }}>
            <Header navigation={navigation} />
			<View style={styles.mainContainer}>
				<UserInfo />
				<View style={styles.mainInputContainer}>
					<View style={{alignItems: "center", flexDirection: "row"}}>
						<View style={styles.inputContainer}>
							<Text style={styles.placeholderText}>First Name</Text>
							{editFirstName ? <TextInput value={formData.firstName} onChangeText={(text) => handleChange(text, "firstName")}></TextInput> : <Text>{formData.firstName}</Text>}
						</View>
						<Pressable onPress={() => setEditFirstName(!editFirstName)}><Text style={editFirstName ? styles.cancel : styles.edit }>{editFirstName ? "cancel" : "edit"}</Text></Pressable>
					</View>
					<View style={{alignItems: "center", flexDirection: "row"}}>
						<View style={styles.inputContainer}>
							<Text style={styles.placeholderText}>Last Name</Text>
							{editLastName ? <TextInput value={formData.lastName} onChangeText={(text) => handleChange(text, "lastName")}></TextInput> : <Text>{formData.lastName}</Text>}
						</View>
						<Pressable onPress={() => setEditLastName(!editLastName)}><Text style={editLastName ? styles.cancel : styles.edit }>{editLastName ? "cancel" : "edit"}</Text></Pressable>
					</View>	
					<View style={{alignItems: "center", flexDirection: "row"}}>
						<View style={styles.inputContainer}>
							<Text style={styles.placeholderText}>Donation Goal</Text>
							{editDonationGoal ? <TextInput value={formData.donationGoal} inputMode="decimal" placeholder="$0.00" onChangeText={(text) => handleChange(text, "donationGoal")}></TextInput> : <Text>{formData.donationGoal}</Text>}
						</View>
						<Pressable onPress={() => setEditEmail(!editDonationGoal)}><Text DonationGoal={editEmail ? styles.cancel : styles.edit }>{editEmail ? "cancel" : "edit"}</Text></Pressable>
					</View>
					<View style={{alignItems: "center", flexDirection: "row"}}>
						<View style={styles.inputContainer}>
							<Text style={styles.placeholderText}>Phone Number</Text>
							{editPhoneNumber ? <TextInput maxLength={14} value={() => formatPhoneNumber(formData.phoneNumber)} style={styles.textInputs} placeholder='(000) 000-0000' inputMode='tel' keyboardType="numeric" onChangeText={(text) => handleChange(text, "phoneNumber")}></TextInput> : <Text value={() => formatPhoneNumber(formData.phoneNumber)} style={styles.textInputs}></Text>}
						</View>
						<Pressable onPress={() => setEditPhoneNumber(!editPhoneNumber)}><Text style={editPhoneNumber ? styles.cancel : styles.edit }>{editPhoneNumber ? "cancel" : "edit"}</Text></Pressable>
					</View>
				</View>
				<View style={styles.submitContainer}>
					<Pressable style={styles.submitButton} onPress={submitProfileUpdates}><Text style={{color: "white"}}>Save Changes</Text></Pressable>
				</View>
			</View>
            <BottomNav navigation={navigation}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 15
    },
	mainInputContainer: {
		height: "40%",
		justifyContent: "space-evenly",
	},
	inputContainer: {
		flexGrow: 1,
		height: 40,
		justifyContent: "center",
	},
	placeholderText: {
		color: "#B0B0B0",
		fontSize: "10px"
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
	},
	edit: {
		color: "#007AFF", 
		textDecorationLine: 'underline',
	},
	cancel: {
		color: "red", 
		textDecorationLine: 'underline',
	}
})