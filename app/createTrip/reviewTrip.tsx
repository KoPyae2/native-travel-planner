import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Href, useNavigation, useRouter } from 'expo-router'
import { Colors } from '@/constants/Colors'
import { CreateTripContex } from '@/context/CreateTripContex';
import moment from 'moment';

export default function ReviewTrip() {
    const { tripsData, setTripsData } = useContext<any>(CreateTripContex);
    const navigation = useNavigation()
    const router = useRouter()

    const buildTrip = () => {
        router.replace('/createTrip/generateTrip' as Href<string | object>)
    }

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTitle: '',
            headerTitleAlign: 'center',
            headerTransparent: true
        })
    }, [])
    return (
        <View
            style={{
                padding: 20,
                paddingTop: 100,
                backgroundColor: Colors.White,
                height: '100%'
            }}
        >
            <Text
                style={{
                    fontSize: 30,
                    fontFamily: 'roboto-bold',
                    marginTop: 20,
                    paddingBottom: 20
                }}
            >ReviewTrip</Text>
            <View>
                <Text
                    style={{
                        fontSize: 16,
                        fontFamily: 'roboto-regular',
                    }}
                >Before generating your trip, please review your selection</Text>
            </View>
            {/* Destination  */}
            <View
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 20,
                marginTop:20
            }}
            >
                <Text
                style={{
                    fontSize: 30,
                }}
                >📍</Text>
                <View>
                    <Text 
                    style={{
                        fontFamily: 'roboto-regular',
                        fontSize: 20,
                        color: Colors.Gray
                    }}
                    >Destination</Text>
                    <Text
                    style={{
                        fontFamily: 'roboto-regular',
                        fontSize: 20
                    }}
                    >{tripsData.locationInfo.name}</Text>
                </View>
            </View>

            {/* Date  */}
            <View
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 20,
                marginTop:26
            }}
            >
                <Text
                style={{
                    fontSize: 30,
                }}
                >🗓️</Text>
                <View>
                    <Text 
                    style={{
                        fontFamily: 'roboto-regular',
                        fontSize: 20,
                        color: Colors.Gray
                    }}
                    >Travel Date</Text>
                    <Text
                    style={{
                        fontFamily: 'roboto-regular',
                        fontSize: 20
                    }}
                    >{moment(tripsData.startDate).format('DD-MMM')} To {moment(tripsData.endDate).format('DD-MMM')} ({tripsData.totaNumberOfDays} days)</Text>
                </View>
            </View>

            {/* Travel info  */}
            <View
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 20,
                marginTop:26
            }}
            >
                <Text
                style={{
                    fontSize: 30,
                }}
                >🚎</Text>
                <View>
                    <Text 
                    style={{
                        fontFamily: 'roboto-regular',
                        fontSize: 20,
                        color: Colors.Gray
                    }}
                    >Who is Traveling</Text>
                    <Text
                    style={{
                        fontFamily: 'roboto-regular',
                        fontSize: 20
                    }}
                    >{tripsData.traveleData.title}</Text>
                </View>
            </View>

            {/* Budget info  */}
            <View
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 20,
                marginTop:26
            }}
            >
                <Text
                style={{
                    fontSize: 30,
                }}
                >💰</Text>
                <View>
                    <Text 
                    style={{
                        fontFamily: 'roboto-regular',
                        fontSize: 20,
                        color: Colors.Gray
                    }}
                    >Budget</Text>
                    <Text
                    style={{
                        fontFamily: 'roboto-regular',
                        fontSize: 20
                    }}
                    >{tripsData.budget}</Text>
                </View>
            </View>

            <TouchableOpacity
                    onPress={buildTrip}
                    style={{
                        padding: 15,
                        backgroundColor: Colors.Primary,
                        borderRadius: 10,
                        alignItems: 'center',
                        marginTop: 30
                    }}
                >
                    <Text
                        style={{
                            color: Colors.White,
                            fontFamily: 'roboto-bold',
                            fontSize: 20
                        }}
                    >Build My Trip</Text>
                </TouchableOpacity>

        </View>
    )
}