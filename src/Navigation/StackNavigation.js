// IMPORTS
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useContext } from 'react';
import { User } from '../Context/UserContext';
import { Pressable } from 'react-native';


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
import * as usersService from "../utilities/users-service";

export default function StackNavigation() {
    const Stack = createNativeStackNavigator();
    const Drawer = createDrawerNavigator();
    const { user, setUser, questionnaire } = useContext(User);

    function logout() {
        usersService.logOut();
        setUser(null);
    }

    return (
        <NavigationContainer>

            {user && questionnaire?.questionsComplete && 
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
                <Drawer.Screen name="Search" component={SearchScreen} options={{ headerShown: false }}/>
                <Drawer.Screen name="ManageProfile" component={ManageProfileScreen} options={{ headerShown: false }}/>
                <Drawer.Screen name="MyDonations" component={MyDonationsScreen} options={{ headerShown: false }}/>
                <Drawer.Screen name="Favorites" component={FavoritesScreen} options={{ headerShown: false }}/>
                <Drawer.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }}/>
                <Drawer.Screen name="Contact" component={ContactScreen} options={{ headerShown: false }}/>
                <Drawer.Screen name="Cart" component={CartScreen} options={{ headerShown: false }}/>
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


