import React from 'react'
import {Text,StyleSheet,TouchableOpacity,Dimensions} from 'react-native'

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 25
  },
  textSecondary: {
    color: "#060606"
  },
  button: {
    backgroundColor: "#333333",
    flex: 1,
    height:50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 450,
    margin: 30,

  },
  buttonDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: "flex-start",
    paddingLeft: 40
  },
  buttonSecondary: {
    backgroundColor: "#a6a6a6"
  },
  buttonAccent: {
    backgroundColor: "#f09a36"
  },
  buttonSession:{
    borderColor: '#fff', 
    borderWidth: 1 ,
    backgroundColor: '#034494'
  }
});


export default  ({onPress, text, size, theme}) =>{
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  if (size === "double") {
    buttonStyles.push(styles.buttonDouble);
  }

  if (theme === "secondary") {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  } else if (theme === "accent") {
    buttonStyles.push(styles.buttonAccent);
  }else if (theme === "circle") {
    buttonStyles.push(styles.buttonCircle);
  
  }else if (theme === "session") {
  buttonStyles.push(styles.buttonSession);
  }

  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
}