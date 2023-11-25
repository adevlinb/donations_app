import { StyleSheet, Text, View, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import smallLogo from "../../assets/logos/smallLogo.png";

export default function Header({ navigation }) {
  return (
    <View style={styles.header}>
        <Ionicons onPress={() => {navigation.toggleDrawer()}} name="menu" size={24} color="black" />
        <Text>Donations.com</Text>
        <Image source={smallLogo} />
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
        alignItems: "center",
    },
})