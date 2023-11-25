// IMPORTS
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useContext } from 'react';
import { User } from '../Context/UserContext';
import CustomDrawerItems from './CustomDrawerItems';
import { Entypo } from '@expo/vector-icons';
import { View } from 'react-native';

// SCREENS
import LoginScreen from '../Screens/LoginScreen';
import HomeScreen from '../Screens/HomeScreen';
import QuestionnaireScreen from '../Screens/QuestionnaireScreen';
import SearchScreen from '../Screens/SearchScreen';
import ManageProfileScreen from '../Screens/ManageProfileScreen';
import MyDonationsScreen from '../Screens/MyDonationsScreen';
import FavoritesScreen from '../Screens/FavoritesScreen';
import SettingsScreen from '../Screens/SettingsScreen';
import ContactScreen from '../Screens/ContactScreen';
import CartScreen from '../Screens/CartScreen';

// APIS

export default function StackNavigation() {
    const Stack = createNativeStackNavigator();
    const Drawer = createDrawerNavigator();
    const { user, setUser, questionnaire } = useContext(User);

    return (
        <NavigationContainer>

            {user && questionnaire?.questionsComplete && 
            <Drawer.Navigator initialRouteName="Home" screenOptions={{ drawerStyle: { backgroundColor: "#C6E5E3" }, drawerLabelStyle: {fontWeight: 700, color: "black" }, drawerItemStyle: { marginTop: 0, marginBottom: 0 }}} drawerContent={(props) => <CustomDrawerItems {...props}/>}>
                <Drawer.Screen name="Home" component={HomeScreen} options={{ headerShown: false, title: "Home" }}/>
                <Drawer.Screen name="Search" component={SearchScreen} options={{ headerShown: false, title: "Search" }}/>
                <Drawer.Screen name="ManageProfile" component={ManageProfileScreen} options={{ headerShown: false, title: "Manage Profile" }} />
                <Drawer.Screen name="MyDonations" component={MyDonationsScreen} options={{ headerShown: false, title: "My Donations" }}/>
                <Drawer.Screen name="Favorites" component={FavoritesScreen} options={{ headerShown: false, title: "Favorites" }}/>
                <Drawer.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false, title: "Settings" }}/>
                <Drawer.Screen name="Contact" component={ContactScreen} options={{ headerShown: false, title: "Contact Us" }}/>
                <Drawer.Screen name="Cart" component={CartScreen} options={{ headerShown: false, title: "My Cart", drawerLabelStyle: {fontWeight: 700, color: "black", marginHorizontal: 0, margin: 0}, drawerIcon: () => <View style={{marginRight: -25}}><Entypo name="shopping-cart" size={24} color="black" /></View>}}  />
            </Drawer.Navigator>}
 

            {user && !questionnaire?.questionsComplete && 
            <Stack.Navigator>
                <Stack.Screen name="Questionnaire" component={QuestionnaireScreen} options={{ headerShown: false }} />
            </Stack.Navigator>}

            {!user && 
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            </Stack.Navigator>}

        </NavigationContainer>
    )
}


