import React, { useLayoutEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Movies from '../screens/Movies';
import Tv from '../screens/Tv';
import Search from '../screens/Search';
import Favs from '../screens/Favs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Platform } from 'react-native';


const Tabs = createBottomTabNavigator();

const getHeaderName = (route) => getFocusedRouteNameFromRoute(route)

export default ({ navigation, route }) => {
    useLayoutEffect(() => {
        const name = getHeaderName(route);
        navigation.setOptions({
            title: getHeaderName(route)
        });
    }, [route]);
    return (
        <Tabs.Navigator
            screenOptions={({route}) => ({
                tabBarStyle:{
                    showLabel: false,
                    backgroundColor: "black",
                    borderTopColor: "black"
                },
        //탭바 아이콘 설정
                tabBarIcon: ({focused}) => {
                    let iconName = Platform.OS === "ios" ? "ios-" : "md-"; //ios와 안드로이드 둘 다 각자 아이콘에 맞게 설정
                    if(route.name === "Movies") {
                        iconName += "film"
                    } else if(route.name === "TV") {
                        iconName += "tv"
                    } else if(route.name === "Search") {
                        iconName += "search"
                    } else if(route.name === "Favs") {
                        iconName += "heart"
                    }
                    return (
                        <Ionicons 
                            name={iconName}
                            color={focused ? "white" : "grey"} 
                            size={26} 
                        />
                    );
                }
            })}
        >
            //탭바 메뉴설정
            <Tabs.Screen options={{ headerShown: false }} name="Movies" component={Movies} />
            <Tabs.Screen options={{ headerShown: false }} name="TV" component={Tv} />
            <Tabs.Screen options={{ headerShown: false }} name="Search" component={Search} />
            <Tabs.Screen options={{ headerShown: false }} name="Favs" component={Favs} />
        </Tabs.Navigator>
    );
}
