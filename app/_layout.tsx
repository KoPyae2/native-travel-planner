import { CreateTripContexProvider} from "@/context/CreateTripContex";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useState } from "react";

export default function RootLayout() {

  const [tripsData, setTripsData] = useState([]);


  useFonts({
    'roboto-regular': require('../assets/fonts/Roboto-Regular.ttf'),
    'roboto-light': require('../assets/fonts/Roboto-Light.ttf'),
    'roboto-bold': require('../assets/fonts/Roboto-Bold.ttf'),
  })
  return (
    <CreateTripContexProvider>
      <Stack screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="index" options={{ headerShown: false }} /> */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </CreateTripContexProvider>
  );
}
