import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { useState } from 'react'
import { useContext, } from 'react';
import { User } from '../Context/UserContext';
import ProfileSetup from '../Components/Questionnaire/ProfileSetup';
import QuestIntro from '../Components/Questionnaire/QuestIntro';
import Questions from '../Components/Questionnaire/Questions';

export default function QuestionnaireScreen() {
    const { user, questionnaire, setQuestionnaire } = useContext(User);
    const [currentPage, setCurrentPage] = useState(0);
    const [updatedQuest, setUpdatedQuest] = useState(questionnaire);

    function nextPage() {

    }

    async function submitQuestionnaire() {

    }

    return (
        <SafeAreaView>
            {currentPage === 0 && <ProfileSetup user={user} nextPage={nextPage} />}
            {currentPage === 1 && <QuestIntro user={user} nextPage={nextPage}/>}
            {currentPage >= 2 && <Questions user={user} currentPage={currentPage} nextPage={nextPage} submitQuestionnaire={submitQuestionnaire} updatedQuest={updatedQuest} setUpdatedQuest={setUpdatedQuest} />}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})