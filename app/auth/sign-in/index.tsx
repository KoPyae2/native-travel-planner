import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Href, useNavigation, useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/configs/FirebaseConfig';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function SignIn() {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const router = useRouter();

  const onSignIn = () => {
    if (email.length === 0 || password.length === 0) {
      ToastAndroid.show('Please fill all fields', ToastAndroid.BOTTOM)
      return
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        router.replace('/mytrip' as Href<string | object>)
      })
      .catch((error) => {
        ToastAndroid.show('Login Error ->'+error, ToastAndroid.BOTTOM)
      });
  }

  useEffect(() => {
    navigation.setOptions({ headerShown: false })
  }, [])
  return (
    <View style={{ padding: 30, paddingTop: 50, backgroundColor: Colors.White, height: '100%' }}>
      <TouchableOpacity onPress={() => router.push('/')}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Animated.Text
        entering={FadeInDown.delay(100).springify()}
        style={{
          fontFamily: 'roboto-bold',
          fontSize: 30,
          paddingTop: 30
        }}
      >Let's Sign You In</Animated.Text>
      <Animated.Text
        entering={FadeInDown.delay(200).springify()}
        style={{
          fontFamily: 'roboto-regular',
          fontSize: 30,
          color: Colors.Gray,
          marginTop: 10
        }}
      >Welcome Back</Animated.Text>
      <Animated.Text
        entering={FadeInDown.delay(300).springify()}
        style={{
          fontFamily: 'roboto-regular',
          fontSize: 30,
          color: Colors.Gray,
          marginTop: 10
        }}
      >You've been missed</Animated.Text>

      {/* Email */}
      <Animated.View
        entering={FadeInDown.delay(400).springify()}
        style={{ marginTop: 20 }}
      >
        <Text
          style={{
            fontFamily: 'roboto-regular',
          }}
        >Email</Text>
        <TextInput
          onChange={(e) => setEmail(e.nativeEvent.text)}
          style={style.input} placeholder='Enter your email'></TextInput>
      </Animated.View>

      {/* Password */}
      <Animated.View
        entering={FadeInDown.delay(500).springify()}
        style={{ marginTop: 20 }}
      >
        <Text
          style={{
            fontFamily: 'roboto-regular',
          }}
        >Password</Text>
        <TextInput
          onChange={(e) => setPassword(e.nativeEvent.text)}
          secureTextEntry={!showPass} style={style.input} placeholder='Enter Passsword'></TextInput>
        <TouchableOpacity onPress={() => setShowPass(!showPass)} style={{ position: 'absolute', right: 20, top: 56 }}>
          <Entypo name={showPass ? 'eye' : 'eye-with-line'} size={24} color="black" />
        </TouchableOpacity>
      </Animated.View>

      {/* sign in button */}
      <Animated.View
        entering={FadeInDown.delay(600).springify()}
      >
        <TouchableOpacity
          onPress={onSignIn}
          style={{
            padding: 18,
            backgroundColor: Colors.Primary,
            borderRadius: 30,
            marginTop: 40
          }}
        >
          <Text
            style={{
              fontFamily: 'roboto-bold',
              color: Colors.White,
              textAlign: 'center'
            }}
          >Sign In</Text>
        </TouchableOpacity>
      </Animated.View>


      {/* sign up button */}
      <Animated.View
        entering={FadeInDown.delay(700).springify()}
      >
        <TouchableOpacity
          onPress={() => router.replace('auth/sign-up' as Href<string | object>)}
          style={{
            padding: 16,
            backgroundColor: Colors.White,
            borderRadius: 30,
            marginTop: 20,
            borderWidth: 1,
            borderColor: Colors.Primary
          }}
        >
          <Text
            style={{
              fontFamily: 'roboto-bold',
              textAlign: 'center'
            }}
          >Create Account</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>

  )
}

const style = StyleSheet.create({
  input: {
    padding: 14,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 20
  }
})