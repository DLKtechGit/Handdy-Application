import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { Colors } from '../constant';
import { useNavigation } from '@react-navigation/native';
import  Arrow from 'react-native-vector-icons/FontAwesome5'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={{width:80,height:80}} source={require("../assets/Images/logimg.png")}/>
        <Text style={styles.logoText}>Time Snap</Text>
      </View>
      <View style={{justifyContent:"center",alignItems:"center"}}>
      <Text style={styles.title}>Reset Password </Text>
      <View style={styles.underline}></View>
      <View style={styles.inputContainer}>
      <View>
        <Icons size={25} style={{marginTop:10}} color={Colors.primary} name='lock'/>
        </View>
        <View>
      <TextInput
        style={styles.input}
        placeholder="New Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      </View>
      </View>
      <View style={styles.inputContainer}>
      <View>
        <Icons size={25} style={{marginTop:10}} color={Colors.primary} name='lock'/>
        </View>
        <View>
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      </View>
      </View>
      <TouchableOpacity  style={styles.button} onPress={() =>navigation.navigate("Employee Insights")}>
        <Text style={styles.loginText}>Reset <Arrow size={15} name='arrow-right'/> </Text> 
        
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  header: {
    // flexDirection:"row",
    alignItems: 'center',
    justifyContent:"center",
    marginBottom: 40,
  },
  logoText: {
    fontSize: 36,
    // marginTop:30,
    fontWeight: 'bold',
    color:Colors.primary , 
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2C3E50', // Dark blue color
  },
  underline: {
    width: 150,
    height: 4,
    backgroundColor: Colors.primary,
    marginBottom: 30,
  },
  input: {
   marginTop:8,
   marginLeft:5,
   width:400
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 10,
    fontSize:20,
    borderRadius:10,
    height:50,
    justifyContent:"center",
    alignItems:"center",
    width:"20%"
    
  },
  forgotPassword: {
    marginTop: 20,
    color: '#2C3E50', 
    textAlign: 'center',
  },
  loginText:{
    fontSize:20,
    fontWeight:"bold",
    color:Colors.white
  },
  inputContainer:{
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    // justifyContent:"center",
    flexDirection:"row"
  }
//   
});

export default ResetPassword;
