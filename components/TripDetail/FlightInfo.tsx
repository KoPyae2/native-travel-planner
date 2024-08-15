import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

export default function FlightInfo({ flightData }: { flightData: any }) {
  return (
    <View
      style={{
        marginTop: 10,
        backgroundColor: Colors.LightBlue,
        padding:10,
        borderRadius:12,
        borderWidth:1,
        borderColor:Colors.LightGray
      }}
    >
      <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
       
      }}
      >
        <Text style={{ fontFamily: 'roboto-bold', fontSize: 20 }}>✈️ Flights</Text>
        {/* <TouchableOpacity
          style={{
            backgroundColor: Colors.Primary,
            width: 100,
            padding: 5,
            borderRadius: 5,
            marginTop: 6
          }}
        >
          <Text style={{ textAlign: 'center', color: Colors.White, fontFamily: 'roboto-bold' }}>Book Here</Text>
        </TouchableOpacity> */}

      </View>
      <Text style={{ fontFamily: 'roboto-regular', fontSize: 18 }}>Airline: <Text style={{ fontFamily: 'roboto-bold', fontSize: 18 }}>{flightData[0]?.airline}</Text></Text>
      <Text style={{ fontFamily: 'roboto-regular', fontSize: 17 }}>Price: <Text style={{ fontFamily: 'roboto-bold', fontSize: 18 }}>{flightData[0]?.price}</Text></Text>

    </View>
  )
}