import { View, Text, Image } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

export default function OptionCard({ option,selectedOption }: { option: any,selectedOption:string }) {
    return (
        <View
            style={[{
                padding: 15,
                borderRadius: 10,
                borderColor: 'gray',
                backgroundColor: Colors.LightGray,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }, selectedOption === option.title ? { borderWidth: 2, borderColor: Colors.Primary } : {}]}
        >
            <View>
                <Text
                    style={{
                        fontSize: 20,
                        fontFamily: 'roboto-bold',
                    }}
                >
                    {option.title}
                </Text>
                <Text
                    style={{
                        fontSize: 16,
                        fontFamily: 'roboto-regular',
                        color: Colors.Gray
                    }}
                >
                    {option.desc}
                </Text>
            </View>
            <Text 
            style={{
                fontSize: 40,
            }}
            >
                {option.icon}
            </Text>
        </View>
    )
}