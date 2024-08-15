import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { Colors } from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import PlaceCard from './PlaceCard';

export default function Plan({ plan }: { plan: any }) {
    return (
        <View style={{ marginTop: 10 }}>
            <Text
                style={{
                    fontFamily: 'roboto-bold',
                    fontSize: 20
                }}
            >⛺Plan Detail</Text>
            {
                plan.map((value: any) => (
                    <View style={{
                        marginBottom: 10,
                        backgroundColor: Colors.LightGray,

                    }}>
                        <Text style={styles.dayText}>{value.day}</Text>
                        {
                            value.activities.map((detail: any) => (
                                <PlaceCard detail={detail} />
                            ))
                        }
                    </View>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    dayText: {
        fontFamily: 'roboto-bold',
        fontSize: 18,
        marginTop: 16
    },
    placeText: {
        fontFamily: 'roboto-bold',
        fontSize: 16,
    }
})