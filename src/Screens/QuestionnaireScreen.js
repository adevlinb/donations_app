import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useState, useContext, useEffect } from 'react';
import { User } from '../Context/UserContext';
import * as usersAPI from "../utilities/users-api";
import ProfileSetup from '../Components/Questionnaire/ProfileSetup';
import QuestIntro from '../Components/Questionnaire/QuestIntro';
import Questions from '../Components/Questionnaire/Questions';

export default function QuestionnaireScreen() {
    const { user, questionnaire, setQuestionnaire } = useContext(User);
    const [currentPage, setCurrentPage] = useState(0);
    const [updatedQuest, setUpdatedQuest] = useState(questionnaire);
    const [profileUpdate, setProfileUpdate] = useState({
        phoneNumber: "",
        donationGoal: ""
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
        // upload photo
        // add photourl
        // update profile
        // update user state
        updatedQuest.completed = true
        const quest = await usersAPI.submitQuestionnaire(updatedQuest);
        setQuestionnaire(quest);
    }

    if (!questionnaire) return null;

    return (
        <SafeAreaView>
            {currentPage === 0 && <ProfileSetup user={user} nextPage={nextPage} profileUpdate={profileUpdate} setProfileUpdate={setProfileUpdate} />}
            {currentPage === 1 && <QuestIntro user={user} nextPage={nextPage}/>}
            {currentPage >= 2 && <Questions user={user} currentPage={currentPage} setCurrentPage={setCurrentPage} nextPage={nextPage} submitQuestionnaire={submitQuestionnaire} updatedQuest={updatedQuest} setUpdatedQuest={setUpdatedQuest} />}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})