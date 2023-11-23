import { StyleSheet, Text, View, Pressable, ScrollView, ListView, FlatList, TouchableOpacity } from 'react-native'
import { Octicons } from '@expo/vector-icons';

export default function Questions({ user, nextPage, submitQuestionnaire, updatedQuest, setUpdatedQuest, currentPage, setCurrentPage }) {
    const QUEST_KEY = {
        2: "passionateIssues",
        3: "locationScope",
        4: "organizationType",
        5: "specifics",
        6: "donationFrequency",
    }



    function handleUpdateQuest(key) {
        const newQuest = JSON.parse(JSON.stringify(updatedQuest));
        newQuest[QUEST_KEY[currentPage]][key].response = !newQuest[QUEST_KEY[currentPage]][key].response;
        setUpdatedQuest(newQuest)
    }

    const renderItem = ({ item }) => {

        return (
            <Pressable onPress={() => handleUpdateQuest(item[0])} style={item[1].response ? styles.itemSelected : styles.itemNotSelected}>
                <Text>{item[1].prompt}</Text>
            </Pressable>
        )
    };

    if (!updatedQuest) return null;

    return (
        <View style={styles.mainContainer}>
            <View style={styles.topContainer}>
                <Text>{updatedQuest["questions"][QUEST_KEY[currentPage]]}</Text>
            </View>
            <View style={styles.middleContainer}>
                <FlatList numColumns={2} data={Object.entries(updatedQuest[QUEST_KEY[currentPage]])} keyExtractor={(item, idx) => [QUEST_KEY[currentPage]] + item?.prompt + idx} renderItem={renderItem} />
            </View>
            <View style={styles.bottomContainer}>
                <Pressable style={styles.nextButton} onPress={currentPage === 6 ? submitQuestionnaire : nextPage}>
                    <Text style={{ color: "white", fontWeight: "bold" }}>{currentPage === 6 ? "START DONATING" : "NEXT"}</Text>
                </Pressable>
                <View style={{flexDirection: "row"}}>
                    <Pressable onPress={() => setCurrentPage(2)}><Octicons name="dot-fill" size={35} color="black" /></Pressable>
                    <Pressable onPress={() => setCurrentPage(3)}><Octicons name="dot-fill" size={35} color="black" /></Pressable>
                    <Pressable onPress={() => setCurrentPage(4)}><Octicons name="dot-fill" size={35} color="black" /></Pressable>
                    <Pressable onPress={() => setCurrentPage(5)}><Octicons name="dot-fill" size={35} color="black" /></Pressable>
                    <Pressable onPress={() => setCurrentPage(6)}><Octicons name="dot-fill" size={35} color="black" /></Pressable>
                </View>
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
    promptContainer: {
        width: 140,
        height: 149,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1
    },
    itemNotSelected: {
        backgroundColor: "grey",
        width: 140,
        height: 140,
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        padding: 20
    },
    itemSelected: {
        backgroundColor: "red",
        width: 140,
        height: 140,
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        padding: 20
    }
})