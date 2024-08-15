import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

export default function Profile() {
  return (
    <View
    style={{
      padding: 30,
      paddingTop: 50,
      backgroundColor: Colors.White,
      height: '100%'
    }}
    >
      <Text>profile</Text>
    </View>
  )
}