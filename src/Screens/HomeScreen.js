// IMPORTS
import { StyleSheet, Text, SafeAreaView, View, ScrollView } from 'react-native'

// COMPONENTS
import Header from '../Components/Header';

// APIS


export default function HomeScreen({ navigation }) {

    return (
        <ScrollView>
            <SafeAreaView style={styles.mainView}>
                <Header navigation={navigation} />
                <View style={styles.statsContainer}>
                    <View style={styles.stats}>
                        <Text>Stats</Text>
                    </View>
                    <View style={styles.refresh}>
                        <Text>SubHeader and refresh</Text>
                    </View>
                </View>
                <View style={styles.bottomNav}><Text>Bottom Nav</Text></View>
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainView: {
        padding: 5,
        height: "100%",
        alignItems: "center",
        paddingTop: 50
    },
    statsContainer: {
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        borderRadius: 5
    },
    stats: {
        flexDirection: "row",
        backgroundColor: "rgba(0,0,0,0.5)",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: 10,
        zIndex: 5,
        height: 60,
    },
    refresh: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: 10,
        height: 60,
        backgroundColor: "#9DBAB9",
        zIndex: 3,
        position: "absolute",
        top: 50
    },
    bottomNav: {
        position: "sticky",
        bottom: 0,
        backgroundColor: "red",
        height: "10%"
    }

})