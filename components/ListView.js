import React, {useState} from 'react'
import {StyleSheet,
Text,
View,
SafeAreaView,
SectionList,
TouchableOpacity,
} from 'react-native'

const DATA =[ {
    title: "01/05/2020",   // corresponde al dia actual
    data: ["+50","+6","+9"] // alementos agregados ese dia 
},
{
    title: "01/05/2020",   // corresponde al dia actual
    data: ["+50","+6","+9"] // alementos agregados ese dia 
},
{
    title: "01/05/2020",   // corresponde al dia actual
    data: ["+50","+6","+9"] // alementos agregados ese dia 
},
{
    title: "01/05/2020",   // corresponde al dia actual
    data: ["+50","+6","+9"] // alementos agregados ese dia 
},
{
    title: "01/05/2020",   // corresponde al dia actual
    data: ["+50","+6","+9"] // alementos agregados ese dia 
}
]

const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );



const ListView = () => {

   return(
        <SafeAreaView style={styles.container}>
            <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <Item title={item} />}
            renderSectionHeader={({ section: { title } }) => (
                
            <Text style={styles.header}>{title}</Text>
            )}
            />
        </SafeAreaView>
   );
}

export default ListView ;

const styles = StyleSheet.create({
    container: { 
      flex: 1,
      borderWidth:  1,
      borderStyle: "solid",
      borderColor: 'gray',
      marginEnd:5,
      marginLeft:5,
    },
    item: {
      backgroundColor: "#ffff",
      padding: 5,
      marginVertical: 8
    },
    header: {
      fontSize: 20,
      marginEnd:5,
      marginLeft:5,
      backgroundColor: "#fff",
      textShadowColor: '#fff',
      backgroundColor: "#58ACFA",
      borderWidth:  1,
      borderStyle: "solid",
      borderColor: 'gray'
    },
    title: {
      fontSize: 20,
      borderWidth:  1,
      borderStyle: "solid",
      borderColor: 'gray'
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
      },
  });

