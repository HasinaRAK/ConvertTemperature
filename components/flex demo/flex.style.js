import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor: 'black',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-evenly'
    },
    box1 : {
        backgroundColor:'blue',
        width:100,
        height:100,
    },
    box2 : {
        backgroundColor:'white',
        width:100,
        height:100,
    },
    box3 : {
        backgroundColor:'red',
        width:100,
        height:100,
    },
})