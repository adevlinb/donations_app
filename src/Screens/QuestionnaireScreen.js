import { StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import { useContext, } from 'react';
import { User } from '../Context/UserContext';

export default function QuestionnaireScreen() {
    const { user, questionnaire, setQuestionnaire } = useContext(User);
    const [currentPage, setCurrentPage] = useState(0);
    const [updatedQuest, setUpdatedQuest] = useState(questionnaire);
    const QUEST_KEY = {
        0: "passionateIssues",
        1: "locationScope",
        2: "organizationType",
        3: "specifics",
        4: "donationFrequency",
    }

    function changePage(direction) {
        if (direction === "backwards") {
            if (currentPage === 0) return;
            return setCurrentPage(prev => prev - 1);
        }

        if (direction === "forwards") {
            if (currentPage === 4) return;
            return setCurrentPage(prev => prev + 1);
        }
    }

    async function submitQuestionnaire() {

    }

    return (
        <View>
            <Text>Hello, {user.name}!</Text>
            <Text>QuestionnaireScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({})