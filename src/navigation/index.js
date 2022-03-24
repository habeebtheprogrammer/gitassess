import React from "react"
import { createStackNavigator } from '@react-navigation/stack';
import {
    NavigationContainer,
} from '@react-navigation/native';
import BottomTab from "./BottomTab";
import Orgs from "../screen/orgs";

const Stack = createStackNavigator();

const Navigation = (props) => {
    const navigationRef = React.useRef();

    return (
        <NavigationContainer
            ref={navigationRef}
        >
            <Stack.Navigator >
                <Stack.Screen name="Home" component={BottomTab} options={{ headerShown: false }} />
                <Stack.Screen name="Orgs" component={Orgs} options={{ headerShown: false }} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default Navigation;

