import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useState, useContext, useEffect } from 'react';
import { User } from '../Context/UserContext';
import * as usersAPI from "../utilities/users-api";
import * as usersService from "../utilities/users-service";
import ProfileSetup from '../Components/Questionnaire/ProfileSetup';
import QuestIntro from '../Components/Questionnaire/QuestIntro';
import Questions from '../Components/Questionnaire/Questions';

export default function QuestionnaireScreen() {
    const { user, setUser, questionnaire, setQuestionnaire } = useContext(User);
    const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
    const [image, setImage] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [updatedQuest, setUpdatedQuest] = useState(questionnaire);
    const [profileUpdate, setProfileUpdate] = useState({
        phoneNumber: "",
        donationGoal: "",
    })

    useEffect(() => {
        async function checkQuest() {
            if (user && !questionnaire) {
                const quest = await usersAPI.getQuestionnaire(user._id);
                setQuestionnaire(quest)
                setUpdatedQuest(quest);
            }
        }
        checkQuest()
    }, [questionnaire])

    function nextPage() {
        setCurrentPage(prev => prev += 1)
    }

    async function submitQuestionnaire() {
        let photoURL = null;

        if (image) {
            const imageData = new FormData();
            // imageData.append('file', {
            //     name: image.name,
            //     type: image.type,
            //     photo: image.uri,
            //     uri: Platform.OS === 'ios' ? image.uri.replace('file://', '') : image.uri,
            // });
            imageData.append('photo', {
                name: image.fileName,
                type: image.type,
                photo: image.uri,
                uri: Platform.OS === 'ios' ? image.uri.replace('file://', '') : image.uri,
            });
            // UPLOAD PHOTO
            photoURL = await usersAPI.uploadProfilePhoto(imageData)
        }
        
        // UPDATE QUESTIONNAIRE
        updatedQuest.questionsComplete = true;
        const quest = await usersAPI.submitQuestionnaire(updatedQuest);
        setQuestionnaire(quest);
        
        // UPDATE PROFILE
        if (image) profileUpdate.profilePic = photoURL.url
        profileUpdate.phoneNumber = parseInt(profileUpdate.phoneNumber)
        profileUpdate.donationGoal = parseInt(profileUpdate.donationGoal)
        const updatedProfile = await usersAPI.updateProfile(profileUpdate);
        setUser(updatedProfile);
        usersService.updateUserStorage(updatedProfile);

        // need to update token in local Storage!!
    }

    if (!questionnaire) return null;

    return (
        <SafeAreaView>
            {currentPage === 0 && <ProfileSetup user={user} nextPage={nextPage} profileUpdate={profileUpdate} setProfileUpdate={setProfileUpdate} hasGalleryPermission={hasGalleryPermission} setHasGalleryPermission={setHasGalleryPermission} image={image} setImage={setImage} />}
            {currentPage === 1 && <QuestIntro user={user} nextPage={nextPage}/>}
            {currentPage >= 2 && <Questions user={user} currentPage={currentPage} setCurrentPage={setCurrentPage} nextPage={nextPage} submitQuestionnaire={submitQuestionnaire} updatedQuest={updatedQuest} setUpdatedQuest={setUpdatedQuest} />}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})