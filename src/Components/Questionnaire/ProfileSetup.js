// IMPORTS
import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';
import { useEffect } from 'react';
import smallLogo from "../../../assets/logos/smallLogo.png";
import * as ImagePicker from "expo-image-picker";

// COMPONENTS
import ProfilePicBackup from '../ProfilePicBackup';

// APIS
import { formatPhoneNumber } from '../../utilities/constants';


export default function ProfileSetup({ user, nextPage, profileUpdate, setProfileUpdate, hasGalleryPermission, setHasGalleryPermission, image, setImage }) {

    function handleChange(text, input) {
        if (input === "phoneNumber") {
            textNums = text.replace(/[^0-9\\.]+/g, '');
            setProfileUpdate({ ...profileUpdate, [input]: textNums });
        }
        if (input === "donationGoal") {
            textNums = text.replace(/[^0-9\\.]+/g, '');
            setProfileUpdate({ ...profileUpdate, [input]: text });
        }
    }

    useEffect(() => {
        if (!user?.mediaGalleryPermission) {
            (async () => {
                const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
                setHasGalleryPermission(galleryStatus.status === "granted");
            })()
        }
    }, [])

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


    return (
        <View style={styles.mainContainer}>
            <View style={styles.header}>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>Donations.com</Text>
                <View style={styles.logo}><Image source={smallLogo} /></View>
            </View>
            <View style={styles.middleContainer}>
                <View style={{alignItems: "center"}}>
                    <Text style={{ fontSize: 35, fontWeight: "bold" }}>Welcome, {user?.formattedName}!</Text>
                    <Text style={{ fontSize: 20 }}>Let's setup your profile.</Text>
                </View>
                <Pressable onPress={pickImage}>
                    {image ?  <Image source={{uri: image.uri}} style={{ height: 0.08 * image.height, width: 0.08 * image.width, margin: 10, alignSelf: "center" }} /> : <ProfilePicBackup />}
                    <Text style={{color:"blue", alignSelf: "center"}} >{image ? "Choose a different photo?" : "Upload Your Profile Picture"}</Text>
                </Pressable>
                <View style={styles.inputContainer}>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>Phone Number:</Text>
                    <TextInput maxLength={14} value={() => formatPhoneNumber(profileUpdate.phoneNumber)} style={styles.textInputs} placeholder='(000) 000-0000' keyboardType="numeric" onChangeText={(text) => handleChange(text, "phoneNumber")}></TextInput>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>Donation Goal:</Text>
                    <TextInput value={profileUpdate.donationGoal} style={styles.textInputs} placeholder='$0.00' onChangeText={(text) => handleChange(text, "donationGoal")}></TextInput>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <Pressable style={styles.nextButton} onPress={nextPage}>
                    <Text style={{ color: "white" }}>Next</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: "center",
        padding: 15,
        width: "100%",
        height: "100%",
        justifyContent: "space-between",
    },
    middleContainer: {
        width: "100%",
        flexGrow: 1,
        alignItems: "center",
        paddingVertical: 10,
        gap: 25,
    },
    bottomContainer: {
        width: "100%",
        alignItems: "center",
    },
    header: {
        width: "100%",
        height: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    logo: {
        position: "absolute",
        right: 0
    },
    nextButton: {
        padding: 10,
        borderRadius: 7.5,
        width: "50%",
        alignItems: "center",
        backgroundColor: "rgb(24,46,42)",
    },
    addSign: {
        position: "absolute",
        bottom: 0,
        right: 45,
        zIndex: 1,
    },
    inputContainer: {
        width: "100%",
        paddingHorizontal: 10,
    },
    textInputs: {
        width: "100%",
        alignSelf: "stretch",
        height: 30,
        borderStyle: "solid",
        borderColor: "grey",
        borderWidth: 1,
        borderRadius: 7.5,
        paddingHorizontal: 5,
    }

})