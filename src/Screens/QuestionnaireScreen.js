import { StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import { useContext, } from 'react';
import { User } from '../Context/UserContext';

export default function QuestionnaireScreen() {
    const { questionnaire } = useContext(User);
    const [currentPage, setCurrentPage] = useState(0);
    const [updatedQuest, setUpdatedQuest] = useState(questionnaire);

    function changePage(direction) {
        console.log(updatedQuest)
        if (direction === "backwards") {
            if (currentPage === 0) return;
            else setCurrentPage(currentPage - 1);
        }

        if (direction === "forwards") {
            
        }
        
    }

    return (
        <View>
            <Text>QuestionnaireScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({})