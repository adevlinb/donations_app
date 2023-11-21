import { StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'

export default function QuestionnaireScreen() {
    const [currentPage, setCurrentPage] = useState(0);
    const [pageOne, setPageOne] = useState({
        social_justice: false,
        mental_health: false,
        gender_equality: false,
        lgbtq_equality: false,
        sustainable_development: false,
        disaster_preparedness: false,
    })
    const [pageTwo, setPageTwo] = useState({
        local: false,
        national: false,
        regional: false,
        international: false,
    })
    const [pageThree, setPageThree] = useState({
        nonprofit: false,
        charitable: false,
        community: false,
        individual: false
    })

    const [pageFour, setPageFour] = useState({
        faithBased: false,
        educational: false,
        healthcare: false,
        humanitarian: false,
        environmental: false,
        political: false
    })

    const [pageFive, setPageFive] = useState({
        onceYear: false,
        twiceYear: false,
        fourPlusYear: false,
        onceMonth: false,
    })

    function changePage(direction) {
        if (direction === "backwards") {
            if (currentPage === 0) return;
            else setCurrentPage(currentPage - 1);
        }

        
    }

    return (
        <View>
            <Text>QuestionnaireScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({})