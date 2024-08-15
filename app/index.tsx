import Login from "@/components/Login";
import { auth } from "@/configs/FirebaseConfig";
import { Href, Redirect } from "expo-router";
import { Text, View } from "react-native";
export default function Index() {
  const user = auth.currentUser;
  
  return (
    <View
      style={{
      }}
    >
      {
        user ? <Redirect href={'/mytrip' as Href<string | object>} /> : <Login/>
      }
    </View>
  );
}
