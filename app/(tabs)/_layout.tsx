import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Colors } from '@/constants/Colors'

export default function TabLayput() {
    return (
        <Tabs 
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Colors.Primary
            }}>
            <Tabs.Screen name='mytrip'
                options={{
                    tabBarLabel: 'My Trip',
                    tabBarIcon: ({ color }) =>
                        <FontAwesome6 name="location-dot" size={24} color={color} />
                }} />
            <Tabs.Screen name='discover'
                options={{
                    tabBarLabel: 'Discover',
                    tabBarIcon: ({ color }) =>
                        <FontAwesome5 name="globe-asia" size={24} color={color} />
                }} />
            <Tabs.Screen name='profile'
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) =>
                        <FontAwesome name="user-circle" size={24} color={color} />
                }} />
        </Tabs>
    )
}