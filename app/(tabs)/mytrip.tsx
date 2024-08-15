import { View, Text, ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '@/constants/Colors'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import StartnewTripCard from '@/components/MyTrips/StartnewTripCard';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { auth, db } from '@/configs/FirebaseConfig';
import UserTripList from '@/components/MyTrips/UserTripList';
import { Href, useRouter } from 'expo-router';

export default function MyTrip() {
  const user = auth.currentUser;
  const [userTrips, setUserTrips] = useState<any[]>([]);
  const [loading, setLoading] = useState(true)

  const router = useRouter()

  const getMyTrip = async () => {
    setLoading(true)
    const q = query(collection(db, 'UserTrips'), where('userEmail', '==', user?.email))
    const querySnapshot = await getDocs(q);
    setUserTrips([])
    querySnapshot.forEach((doc) => {
      setUserTrips(prev => [...prev, doc.data()])
    });
    setLoading(false)
  }

  useEffect(() => {
    user && getMyTrip()
  }, [])

  return (
    <ScrollView
      style={{
        padding: 30,
        paddingTop: 50,
        backgroundColor: Colors.White,
        height: '100%'
      }}
    >
      {loading && <ActivityIndicator size={'large'} />}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text
          style={{
            fontFamily: 'roboto-bold',
            fontSize: 35
          }}
        >My Trip</Text>
        <TouchableOpacity
        onPress={()=>router.push('/createTrip/searchplace' as Href<string | object>)}
        >
          <MaterialIcons name="add-circle" size={40} color="black" />
        </TouchableOpacity>
      </View>
      {
        userTrips.length === 0 ?
          <StartnewTripCard /> :
          <UserTripList userTrip={userTrips} />
      }
    </ScrollView>
  )
}