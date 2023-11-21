import { StyleSheet, Text, View, Image } from 'react-native'
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
        <View style={styles.mainContainer}>
            <View style={styles.topContainer}>
                <Text style={{ fontSize: 35, fontWeight: "bold" }}>Hey, {user.name[0].toUpperCase()}{user.name.slice(1)}!</Text>
                <Text style={{ fontSize: 20}}>Before we start we just have a few questions...</Text>
            </View>
            <View style={styles.middleContainer}>
                <Text>Put stuff here.</Text>
            </View>
            <View style={styles.bottomContainer}>
                <Pressable style={styles.nextButton} onPress={nextPage}>
                    <Text style={{ color: "white", fontWeight: "bold" }}>START</Text>
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
    topContainer: {
        marginTop: 40, 
        alignItems: "center",
        gap: 20,
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
    nextButton: {
        padding: 10,
        borderRadius: 7.5,
        width: "50%",
        alignItems: "center",
        backgroundColor: "rgb(24,46,42)",
    },
})