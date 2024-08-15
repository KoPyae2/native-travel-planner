import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Colors } from '@/constants/Colors'
import { Href, useRouter } from 'expo-router'
import { hp, wp } from '@/helper/common'
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient'
import Animated, { FadeInDown } from 'react-native-reanimated'

export default function Login() {
  const router = useRouter()
  const { height: deviceHeight } = Dimensions.get('window');
  return (
    <View style={styles.container}>
      <Image style={{ width: '100%', height: deviceHeight + 60, position: 'absolute' }} source={require('../assets/images/getstart.jpg')} />
      <Animated.View style={styles.box} entering={FadeInDown.duration(600)}>
        {/* <LinearGradient 
        colors={['rgba(255,255,255,0)','rgba(255,255,255,0.5)','white','white']}
        style={styles.gradient}
        start={{x:.5,y:0}}
        end={{x:.5,y:.8}}
        /> */}
        <Animated.Text
          entering={FadeInDown.delay(400).springify()}
          style={{
            fontSize: 30,
            fontFamily: 'roboto-bold',
            textAlign: 'center',
            paddingBottom: 24
          }}>Ai Travel Planner</Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(500).springify()}
          style={{
            fontSize: 16,
            fontFamily: 'roboto-regular',
            textAlign: 'center',
            color: Colors.Gray,
            paddingBottom: 34
          }}
        >Discover your next adventure effortlessly. Personalized itineraries at your fingertips. Travel smarter with AI-driven indights.</Animated.Text>
        <Animated.View
          entering={FadeInDown.delay(500).springify()}>
          <TouchableOpacity onPress={() => router.push('auth/sign-in' as Href<string | object>)} style={styles.button}>
            <Animated.Text entering={FadeInDown.delay(600).springify()} style={{ color: Colors.White, textAlign: 'center', fontFamily: 'roboto-bold', fontSize: 20 }}>Get Start</Animated.Text>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: hp(100),
  },
  box: {
    width: wp(100),
    padding: 20,
    position: 'absolute',
    bottom: -54,
    backgroundColor: Colors.White,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingBottom: 40
  },
  gradient: {
    width: wp(100),
    height: hp(65),
    position: 'absolute',
    bottom: -60
  },
  button: {
    backgroundColor: Colors.Primary,
    padding: 15,
    borderRadius: 20
  }
})