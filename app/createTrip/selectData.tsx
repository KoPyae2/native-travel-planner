import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Href, useNavigation, useRouter } from 'expo-router'
import { Colors } from '@/constants/Colors'
import CalendarPicker from "react-native-calendar-picker";
import { CreateTripContex } from '@/context/CreateTripContex';
import moment from 'moment';

export default function SelectData() {
    const navigation = useNavigation()
    const router = useRouter()
    const [startData, setStartData] = useState<string | undefined>(undefined);
    const [endData, setEndData] = useState<string | undefined>(undefined);
    const { tripsData, setTripsData } = useContext<any>(CreateTripContex);

    const onDateChange = (date: any, type: string) => {
        switch (type) {
            case 'START_DATE':
                setStartData(moment(date).format('YYYY-MM-DD'));
                break;
            case 'END_DATE':
                setEndData(moment(date).format('YYYY-MM-DD'));
                break;
            default:
                break
        }
    }

    const onDataSelectContinue = () => {
        if(!startData || !endData) {
            ToastAndroid.show('Please Select Start Date & End Date', ToastAndroid.BOTTOM)
            return
        }
        const startMoment = moment(startData, 'YYYY-MM-DD');
        const endMoment = moment(endData, 'YYYY-MM-DD');
        const totalNoOfDays = endMoment.diff(startMoment, 'days');
        setTripsData({ ...tripsData, startDate: startData, endDate: endData,totaNumberOfDays:totalNoOfDays+1 })
        router.push('/createTrip/selectBudget' as Href<string | object>)

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
            >Travel Datas</Text>
            <View
                style={{
                    marginTop: 30
                }}
            >
                <CalendarPicker
                    onDateChange={onDateChange}
                    allowRangeSelection
                    minDate={new Date()}
                    selectedRangeStyle={{ backgroundColor: Colors.Primary }}
                    selectedDayTextStyle={{
                        color: Colors.White
                    }}
                />
            </View>

            <TouchableOpacity
                onPress={onDataSelectContinue}
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