import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LoginScreen';
import HomeScreen from '../Screens/HomeScreen';
import QuestionnaireScreen from '../Screens/QuestionnaireScreen';
import { useContext, useEffect } from 'react';
import { User } from '../Context/UserContext';
import * as UsersService from '../utilities/users-service';
import * as usersAPI from "../utilities/users-api";



export default function StackNavigation() {
    const Stack = createNativeStackNavigator();
    const { user, setUser, questionnaire } = useContext(User);

    return (
        <NavigationContainer>

            {user && questionnaire?.complete && 
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
            }

            {user && !questionnaire?.complete && 
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


