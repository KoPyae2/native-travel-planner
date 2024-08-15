import { View, Text, FlatList, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Href, useNavigation, useRouter } from 'expo-router'
import { Colors } from '@/constants/Colors'
import { SelectBudgetOptions } from '@/constants/Option'
import OptionCard from '@/components/CreateTrip/OptionCard'
import { CreateTripContex } from '@/context/CreateTripContex'

export default function SelectBudget() {
    const [selectedOption, setSelectedOption] = useState({} as any)
    const { tripsData, setTripsData } = useContext<any>(CreateTripContex);

    const navigation = useNavigation()
    const router = useRouter()

    const onBudgetSelectContinue = () => { 
        if(!selectedOption.title){
            ToastAndroid.show('Please select budget', ToastAndroid.SHORT)
            return 
          }
          router.push('createTrip/reviewTrip' as Href<string | object>)
    }

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTitle: '',
            headerTitleAlign: 'center',
            headerTransparent: true
        })
    }, [])

    useEffect(() => {
        selectedOption && setTripsData({ ...tripsData, budget: selectedOption.title })
    }, [selectedOption])
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
            >Budget</Text>
            <View>
                <Text
                    style={{
                        fontFamily: 'roboto-regular',
                        fontSize: 16,
                    }}
                >Choose spending habits for your trip</Text>

                <FlatList
                    data={SelectBudgetOptions}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => setSelectedOption(item)}
                            style={{ marginVertical: 5 }}
                        >
                            <OptionCard option={item} selectedOption={selectedOption.title} />
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.title}
                />
                <TouchableOpacity
                    onPress={onBudgetSelectContinue}
                    style={{
                        padding: 15,
                        backgroundColor: Colors.Primary,
                        borderRadius: 10,
                        alignItems: 'center',
                        marginTop: 20
                    }}
                >
                    <Text
                        style={{
                            color: Colors.White,
                            fontFamily: 'roboto-bold',
                            fontSize: 20
                        }}
                    >Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}