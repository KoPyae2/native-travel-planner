import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect } from 'react'
import HotelCard from './HotelCard';

export default function HotelList({ hotelList }: { hotelList: any }) {
    return (
        <View style={{ marginTop: 10 }}>
            <Text
                style={{
                    fontFamily: 'roboto-bold',
                    fontSize: 20
                }}
            >🏨Hotel Recommendation</Text>
            <FlatList
                style={{ marginTop: 10 }}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={hotelList}
                keyExtractor={(item) => item.geo_coordinates}
                renderItem={({ item }) => (
                    <HotelCard item={item} />
                )}
            />
        </View>
    )
}