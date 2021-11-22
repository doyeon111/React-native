import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Detail from '../screens/Detail';
import Tabs from './Tabs';

const Stack = createStackNavigator();

export default () => {
    return(
    <Stack.Navigator
        //mode="modal" //위아래로 작동
        screenOptions={{
            headerStyle: {
                backgroundColor: "black",
                borderBottomColor: "black",
                shadowColor: "black"
            },
            headerTintColor: "white",
            headerBackTitleVisible: false,
            gestureEnabled: true
        }}
    >
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
    );
}