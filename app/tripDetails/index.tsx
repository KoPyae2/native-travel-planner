import { View, Text, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { Colors } from '@/constants/Colors';
import moment from 'moment';
import FlightInfo from '@/components/TripDetail/FlightInfo';
import HotelList from '@/components/TripDetail/HotelList';
import Plan from '@/components/TripDetail/Plan';

export default function TripDetails() {
  const navigation = useNavigation();
  const { trip } = useLocalSearchParams();
  const [tripDetails, setTripsDetails] = useState({} as any)
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    navigation.setOptions({
      headerShown: true,
      headerTitle: '',
      headerTitleAlign: 'center',
      headerTransparent: true
    })
      setTripsDetails(JSON.parse(trip as any));
      setLoading(false)
  }, [trip])

  return (
    
    <ScrollView
      style={{
        backgroundColor: Colors.White,
        height: '100%'
      }}
    >
      <Image
        style={{ width: '100%', height: 360, objectFit: 'cover' }}
        source={{ uri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=' + tripDetails?.tripData?.locationInfo?.photoRef + '&key='+process.env.EXPO_PUBLIC_GOOGLE_PLACE_API_KEY }} />
      <View
        style={{
          padding: 15,
          backgroundColor: Colors.White,
          height: '100%',
          marginTop: -30,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30
        }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 5,
          }}
        >
          <Text
            style={{
              fontFamily: 'roboto-regular',
              fontSize: 16,
              color: Colors.Gray
            }}
          >{moment(tripDetails?.tripData?.startDate).format('DD MMM YYYY')}</Text>
          <Text
            style={{
              fontFamily: 'roboto-regular',
              fontSize: 16,
              color: Colors.Gray
            }}
          >- {moment(tripDetails?.tripData?.endData).format('DD MMM YYYY')}</Text>
        </View>
        <Text
          style={{
            fontFamily: 'roboto-regular',
            fontSize: 16,
            color: Colors.Gray
          }}
        >🚙 {tripDetails?.tripData?.traveleData?.title}</Text>
        <Text>{loading}</Text>
        {/* Flight info  */}
        {
          !loading && <FlightInfo flightData={tripDetails.tripPlan.flights} />
        }

        
        {/* <FlightInfo flightData={tripDetails.tripPlan.flights} /> */}

        {/* Hotels list  */}
        {
          !loading && <HotelList hotelList={tripDetails?.tripPlan?.hotels} />
        }
        

        {/* day plan */}
        {
          !loading && <Plan plan={tripDetails?.tripPlan?.itinerary} />
        }
      </View>
    </ScrollView>
  )
}