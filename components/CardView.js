import React from 'react'
import {Text,StyleSheet, View} from 'react-native'




const styles = StyleSheet.create({
    container: {
      flex:1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      marginBottom: 10,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: '#C2C2C2',
      alignContent: 'center'
    },
    header:{
        flex: 1,
        justifyContent: 'space-evenly',
        margin: 20,
        alignItems: 'center'
    },
    body:{
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingBottom: 5,
    },
    piePag:{
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingBottom: 5,
        backgroundColor: '#fff'
    },
    row:{
      flexDirection: 'row'
    },
    titulo:{
       fontSize:20,
       
    },
    balance: {   
        margin:5,
        fontSize:20
    },
})

export default  ({value}) => {

    const fecha = "11/05/21"
    const balance = value
    const titulo = "Cuenta en pesos:"
    const Usuario = "Oscar"
    const id = "15698"
    const pie_Pag = "Saldo actual"

return (
    <View style={styles.container}>
    <View style={styles.header}>
        <View style={styles.row}>
            <Text style= {styles.titulo}>
            {titulo}
            </Text>
        </View>
    </View>
    <View style={styles.body}>
        <View style={styles.row}>
            <Text style ={styles.usuario}>
                {balance}
            </Text>
        </View>   
    </View>
    <View style={styles.piePag}>
        <View style={styles.row}>
                <Text style ={styles.usuario}>
                {pie_Pag}
                </Text>
            </View>  
        </View>
    </View>

);


}

