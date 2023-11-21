import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Questions({ user, nextPage, submitQuestionnaire, updatedQuest, setUpdatedQuest }) {
    const QUEST_KEY = {
        2: "passionateIssues",
        3: "locationScope",
        4: "organizationType",
        5: "specifics",
        6: "donationFrequency",
    }

    return (
        <View>
            <Text>Questions</Text>
        </View>
    )
}

const styles = StyleSheet.create({})