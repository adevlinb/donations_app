// IMPORTS
import { StyleSheet, Text, View, SafeAreaView, Image, Pressable } from 'react-native'
import { useContext, useState, useEffect } from 'react';
import { User } from '../Context/UserContext';

// COMPONENTS
import Header from '../Components/Header'
import BottomNav from '../Navigation/BottomNav'

// APIS



export default function ManageProfileScreen({ navigation }) {
	const { user } = useContext(User);
	const [image, setImage] = useState(null);
    const [profileUpdate, setProfileUpdate] = useState(user)


	// useEffect(() => {
    //     if (!user?.mediaGalleryPermission) {
    //         (async () => {
    //             const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
    //             setHasGalleryPermission(galleryStatus.status === "granted");
    //         })()
    //     }
    // }, [])

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
        if (image) profileUpdate.profilePic = photoURL.url
        profileUpdate.phoneNumber = parseInt(profileUpdate.phoneNumber)
        profileUpdate.donationGoal = parseInt(profileUpdate.donationGoal)
        const updatedProfile = await usersAPI.updateProfile(profileUpdate);
        setUser(updatedProfile);
        return usersService.updateUserStorage(updatedProfile);
    }

	return (
        <SafeAreaView style={styles.mainContainer}>
            <Header navigation={navigation} />
			<View style={styles.userInfoContainer}>
				<View style={styles.picContainer}><Image source={{ uri: user.profilePic}} style={styles.profilePic}/></View>
				<Text style={styles.userName}>{user.name}</Text>
			</View>
			<View>
				<Text>Body Container</Text>
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