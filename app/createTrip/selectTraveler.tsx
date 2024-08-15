import { View, Text, FlatList, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Href, useNavigation, useRouter } from 'expo-router'
import { Colors } from '@/constants/Colors'
import { SelectOptions } from '@/constants/Option'
import OptionCard from '@/components/CreateTrip/OptionCard'
import { CreateTripContex } from '@/context/CreateTripContex'

export default function SelectTraveler() {
  const navigation = useNavigation()
  const router = useRouter()
  const [selectedOption, setSelectedOption] = useState({} as any)
  const { tripsData, setTripsData } = useContext<any>(CreateTripContex);


  const onTravelSelectContinue = () => {
    if(!selectedOption.title){
      ToastAndroid.show('Please select traveler', ToastAndroid.SHORT)
      return 
    }
    router.push('createTrip/selectData' as Href<string | object>)
  }

  useEffect(() => {
    selectedOption && setTripsData({ ...tripsData, traveleData: selectedOption })
  }, [selectedOption])

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
      }}>
      <Text
        style={{
          fontSize: 30,
          fontFamily: 'roboto-bold',
          marginTop: 20,
          paddingBottom: 20
        }}
      >Who's is Traveling</Text>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'roboto-regular',
            marginTop: 10,
            paddingBottom: 24
          }}
        >Choose Your traveles</Text>

        {/* <FlatList data={options} keyExtractor={(item:any) => item.name} renderItem={({ item } :any) => <Text>{item}</Text>} /> */}
        <FlatList
          data={SelectOptions}
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
      </View>
      <TouchableOpacity
      onPress={onTravelSelectContinue}
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
  )
}