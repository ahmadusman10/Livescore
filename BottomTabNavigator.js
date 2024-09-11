import React from 'react';
import { BottomTabBarHeightContext, createBottomTabNavigator, useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons'; // Import your icon library
import ScoreScreen from './screens/ScoreScreen';
import NewsScreen from './screens/NewsScreen';
import WatchScreen from './screens/WatchScreen';
import FavScreen from './screens/FavScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false,
            tabBarActiveTintColor: '#7873FB',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle:{
                height:70,
            },
        }}
        >
            <Tab.Screen
                name="Score"
                component={ScoreScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="soccer" color={color} size={31} />
                    ),
                    tabBarLabelStyle: {
                        fontSize: 15,
                      }
                    
                }}
            />
            <Tab.Screen
                name="Watch"
                component={WatchScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="television" color={color} size={31} />
                    ),
                }}
            />
            <Tab.Screen
                name="News"
                component={NewsScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="newspaper" color={color} size={31} />
                    ),
                    
                }}
            />
            <Tab.Screen
                name="Favourites"
                component={FavScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="star" color={color} size={31} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
