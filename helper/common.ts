import { Dimensions } from "react-native"

const { width:deviceWidth,height:deviceHeight } = Dimensions.get('window')

export const wp = (percentage:number)=>{
    const width = deviceWidth
    return (width * percentage) / 100
}

export const hp = (percentage:number)=>{
    const height = deviceHeight
    return (height * percentage) / 100
}