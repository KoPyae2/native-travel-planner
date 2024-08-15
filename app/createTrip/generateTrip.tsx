import { View, Text, Image, ToastAndroid } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Colors } from '@/constants/Colors'
import { CreateTripContex } from '@/context/CreateTripContex';
import { GenerateTravelPlanPrompt } from '@/constants/Option';
import { chatSession } from '@/configs/AiModal';
import { Href, useRouter } from 'expo-router';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '@/configs/FirebaseConfig';


export default function GenerateTrip() {
  const { tripsData, setTripsData } = useContext<any>(CreateTripContex);
  const [loading, setLoading] = useState(true)
  const user = auth.currentUser;
  const router = useRouter()

  const GenerateAiTrip = async () => {
    setLoading(true)
    const FINAL_PROMPT = GenerateTravelPlanPrompt(
      tripsData.locationInfo.name,
      tripsData.totaNumberOfDays,
      tripsData.totaNumberOfDays - 1,
      tripsData.traveleData.title,
      tripsData.budget
    )
    try {
      const result = await chatSession.sendMessage(FINAL_PROMPT);
      const tripResp = JSON.parse(result.response.text())
      setLoading(false)
      const docId = (Date.now()).toString()
      setDoc(doc(db, 'UserTrips', docId), {
        userEmail: user?.email,
        tripPlan: tripResp,
        tripData: tripsData,
        docId: docId
      }).then(() => {
        router.push('/mytrip' as Href<string | object>)
      }).catch((err) => {
        ToastAndroid.show('Error on store firebase data' + err, ToastAndroid.BOTTOM)
      })

    }
    catch (error) {
      ToastAndroid.show('Error on gemini api' + error, ToastAndroid.BOTTOM)
    }


  }

  useEffect(() => {

    tripsData && GenerateAiTrip()
  }, [])

  return (
    <View
      style={{
        padding: 20,
        paddingTop: 60,
        backgroundColor: Colors.White,
        height: '100%'
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontFamily: 'roboto-bold',
          paddingBottom: 20,
          textAlign: 'center'
        }}
      >Please Wait ...</Text>
      <Text
        style={{
          fontFamily: 'roboto-regular',
          fontSize: 20,
          textAlign: 'center'
        }}
      >We are working to generate your dream trip</Text>
      <Image
        style={{
          width: '100%',
          marginTop: 80,
          objectFit: 'contain'
        }}
        source={require('./../../assets/images/loading.gif')} />
      <Text
        style={{
          fontFamily: 'roboto-regular',
          color: Colors.Gray,
          fontSize: 20,
          textAlign: 'center'
        }}
      >Do not go back</Text>
    </View>
  )
}