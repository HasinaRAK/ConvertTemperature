import {s} from './flex.style'
import { View,Text } from 'react-native'

export function FlexDemo(){
    return <View style={s.container}>
        <View style={s.box1}></View> 
        <View style={s.box2}></View>
        <View style={s.box3}></View>
        
    </View>
}