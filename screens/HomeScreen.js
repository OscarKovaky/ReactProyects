
import React, {useState} from 'react';
import {
  StyleSheet, 
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from 'react-native';


import Button from '../components/Button'
import CardView from '../components/CardView'



export default function HomeScreen({navigation}) {
 
  const [coin,setCoin] = useState(0);
  const money = '56';
   
  
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS == "ios" ? "padding" : "height"}
    style={styles.container}
    >
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.boxSession}>
        <Button 
                text= "OS"
                theme ="session"   
                onPress = {()=>navigation.navigate('Profile')}
          /> 
        </View>        
      </View>     
      <View style={styles.body}> 
             <Text style={styles.welcomeText}>Buenas noches, Oscar Cuanto Vamos ahorrar Hoy?</Text>
              <TextInput
              style={styles.textImput}
              placeholderTextColor = "#fff"
              value={money}
              /> 
           <View style={[styles.body,styles.row]}>
             <View style={styles.box}>
             <Button 
                    text= "+"
                    theme ="accent"
                    onPress = {() => setCoin(money)}     
                  /> 
             </View>
              <View style={styles.box}>
              <Button 
                    text= "?"
                    theme ="accent"     
                  /> 
              </View> 
              <View style={styles.box}>
             <Button 
                    text= "-"
                    theme ="accent"     
                  /> 
             </View>
             </View>   
           
      </View>
      <View style={styles.footer}>
            <View style={styles.row}>
                 <CardView 
                    value = {coin}
                 />
             </View>        
      </View>
    </View>
    </KeyboardAvoidingView>
  );
}





const styles = StyleSheet.create({
  container:{
    flex:1, 
    backgroundColor: '#E5ECF4' ,
    justifyContent: 'space-evenly',
  },
  header:{
    flex:1,
    alignItems: 'center',
    backgroundColor: '#034494',
   
  },
  body:{
    flex:1,
    backgroundColor: '#034494',
    marginBottom:40
},
footer:{
    flex:1,
    alignItems: 'center',
},
row:{
      flex:1,
      alignSelf: 'center',
      flexDirection: 'row',
      marginEnd: 10,
      marginLeft: 10,
},
box:{
    height:110,
    width:110,
    margin:3,
},
boxSession:{
    height:130,
    width: 130
},
textImput:{
    marginEnd: 40,
    marginLeft: 40,
    fontSize: 20,
    color: "#fff",
    borderColor: '#fff', 
    borderBottomWidth: 1,
    paddingTop: 20
},
  welcomeText:{
    marginEnd: 40,
    marginLeft: 40,
    color: "#fff",
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center'
  },
  text:{
    fontSize: 12,
    color: '#fff',
    alignItems: "center",
    margin: 5
}
});
