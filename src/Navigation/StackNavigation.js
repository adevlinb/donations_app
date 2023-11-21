import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LoginScreen';
import HomeScreen from '../Screens/HomeScreen';
import { useContext, useEffect } from 'react';
import { User } from '../Context/UserContext';
import * as UsersService from '../utilities/users-service';



export default function StackNavigation() {
    const Stack = createNativeStackNavigator();
    const { user, setUser } = useContext(User);

    useEffect(() => {
        async function getUser() {
            if (!user) {
                const results = await UsersService.getUser();
                setUser(results);
            }
        }
        getUser();
    }, [])

    // UsersService.logOut()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {user ? 
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                :
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}