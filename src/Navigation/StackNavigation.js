import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../Screens/LoginScreen';
import SignUpScreen from '../Screens/SignUpScreen';


export default function StackNavigation() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}