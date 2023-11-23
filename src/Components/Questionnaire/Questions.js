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
            <Pressable onPress={() => handleUpdateQuest(item[0])} style={item[1].response ? [styles.itemSelected, styles.shadowProp] : [styles.itemNotSelected, styles.shadowProp]}>
                <Text style={{fontWeight: 700}}>{item[1].prompt}</Text>
            </Pressable>
        )
    };

    if (!updatedQuest) return null;

    return (
        <View style={styles.mainContainer}>
            <View style={styles.topContainer}>
                <Text style={{fontWeight: 500, fontSize: 25}}>{updatedQuest["questions"][QUEST_KEY[currentPage]]}</Text>
            </View>
            {/* <View style={styles.middleContainer}> */}
                <FlatList contentContainerStyle={styles.middleContainer} numColumns={2} data={Object.entries(updatedQuest[QUEST_KEY[currentPage]])} keyExtractor={(item, idx) => [QUEST_KEY[currentPage]] + item?.prompt + idx} renderItem={renderItem} />
            {/* </View> */}
            <View style={styles.bottomContainer}>
                {currentPage === 6 && 
                    <Pressable style={styles.endQuestButton} onPress={submitQuestionnaire}>
                        <Text style={{ color: "white", fontWeight: "bold" }}>START DONATING</Text>
                    </Pressable>
                }
                <View style={{flexDirection: "row", alignItems: "center", gap: 5}}>
                    <Pressable onPress={() => setCurrentPage(2)} style={currentPage === 2 ? styles.dotSelected : styles.dotNotSelected}></Pressable>
                    <Octicons name="dash" size={15} color="#D9D9D9" />
                    <Pressable onPress={() => setCurrentPage(3)} style={currentPage === 3 ? styles.dotSelected : styles.dotNotSelected}></Pressable>
                    <Octicons name="dash" size={15} color="#D9D9D9" />
                    <Pressable onPress={() => setCurrentPage(4)} style={currentPage === 4 ? styles.dotSelected : styles.dotNotSelected}></Pressable>
                    <Octicons name="dash" size={15} color="#D9D9D9" />
                    <Pressable onPress={() => setCurrentPage(5)} style={currentPage === 5 ? styles.dotSelected : styles.dotNotSelected}></Pressable>
                    <Octicons name="dash" size={15} color="#D9D9D9" />
                    <Pressable onPress={() => setCurrentPage(6)} style={currentPage === 6 ? styles.dotSelected : styles.dotNotSelected}></Pressable>
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
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        marginTop: 40,
    },
    middleContainer: {
        width: "100%",
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
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
    endQuestButton: {
        padding: 10,
        borderRadius: 7.5,
        width: "50%",
        alignItems: "center",
        backgroundColor: "rgb(24,46,42)",
        marginBottom: "25%",
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
        padding: 20,
        borderRadius: 5
    },
    itemSelected: {
        backgroundColor: "red",
        width: 140,
        height: 140,
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        padding: 20,
        borderRadius: 5
    },
    dotNotSelected: {
        backgroundColor: "#686868",
        width: 25,
        height: 25,
        borderRadius: "50%",
        shadowColor: 'black',
        shadowOffset: {width: 1, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 2.5,
    },
    dotSelected: {
        width: 27.5,
        height: 27.5,
        borderRadius: "50%",
        color: "",
        borderColor: "#C7C7C7",
        borderWidth: 1,
        backgroundColor: "#577E6B",
        shadowColor: 'black',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 1,
        shadowRadius: 5,
    },
    shadowProp: {
        shadowColor: 'black',
        shadowOffset: {width: 1, height: 4},
        shadowOpacity: 1,
        shadowRadius: 5,
    }
})