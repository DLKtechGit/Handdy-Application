import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Arrow from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../constant';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={{width: 80, height: 80}} source={require("../assets/Images/logimg.png")}/>
        <Text style={styles.logoText}>Time Snap</Text>
      </View>
      
      <View style={{justifyContent: "center", alignItems: "center"}}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.underline}></View>
        <View style={{width: "100%", justifyContent: "center", alignItems: "center"}}>
          <View style={styles.inputContainer}>
            <Icons size={25} style={{marginTop: 10}} color={Colors.primary} name='email'/>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Icons size={25} style={{marginTop: 10}} color={Colors.primary} name='lock'/>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Employee Insights")}>
            <Text style={styles.loginText}>Login <Arrow size={15} name='arrow-right'/> </Text> 
          </TouchableOpacity>
        </View>
      </View>
      
      <TouchableOpacity onPress={() => navigation.navigate('Forgot Password')}>
        <Text style={styles.forgotPassword}>Forgot password? </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Reset Password')}>
        <Text style={styles.forgotPassword}>Reset? </Text>
      </TouchableOpacity>
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
    alignItems: 'center',
    justifyContent: "center",
    marginBottom: 40,
  },
  logoText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2C3E50',
  },
  underline: {
    width: 50,
    height: 4,
    backgroundColor: Colors.primary,
    marginBottom: 30,
  },
  inputWrapper: {
    flex: 1,
    marginLeft: 10,
  },
  input: {
    height: '100%',
    width: '100%',
    color: Colors.gray,
    outlineStyle: 'none', // For web to remove the default browser outline
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 10,
    fontSize: 20,
    borderRadius: 10,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    width: "20%",
  },
  forgotPassword: {
    marginTop: 20,
    color: '#2C3E50', 
    textAlign: 'center',
  },
  loginText: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.white,
  },
  inputContainer: {
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
    flexDirection: "row",
    width: "25%",
  }
});

export default LoginScreen;
