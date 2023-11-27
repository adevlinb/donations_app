// IMPORTS
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import Croods from "../../../assets/croods.png";

// COMPONENTS

// APIS


export default function QuestIntro({ user, nextPage }) {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.topContainer}>
                <Text style={{ fontSize: 35, fontWeight: "bold" }}>Hey, {user?.formattedName}!</Text>
                <Text style={{ fontSize: 20}}>Before we start we just have a few questions...</Text>
            </View>
            <View style={styles.middleContainer}>
                <Image source={Croods}/>
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