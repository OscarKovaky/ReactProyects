import React from 'react'
import {Text,StyleSheet,View} from 'react-native'


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
    
    })


export default function ProfileScreem() {
    return(
       <View style = {styles.container}>
             <Text>Profile</Text>
       </View>

    );
}