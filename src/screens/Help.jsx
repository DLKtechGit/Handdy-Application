// src/screens/Help.js
import React from "react";
import { ScrollView, Text, View, StyleSheet, Image } from "react-native";
import { Colors } from "../constant";

const Help = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{justifyContent:"center",alignItems:"center"}}>
      <Text style={styles.header}>Help Center</Text>

      <View style={styles.section}>
        <Image style={{width:200,height:200}} source={require("../assets/Images/Getstart.jpg")}/>
        <Text style={styles.subHeader}>Getting Started</Text>
        <Text style={styles.text}>
          Welcome to [Your App Name]! Our app helps you manage your time and track your tasks efficiently. Here’s a quick guide to get you started:
        </Text>
        <Text style={styles.listItem}>
          1. <Text style={styles.bold}>Login</Text>: Use your credentials to log in to the app.
        </Text>
        <Text style={styles.listItem}>
          2. <Text style={styles.bold}>Dashboard</Text>: View a summary of your activities and tasks.
        </Text>
        <Text style={styles.listItem}>
          3. <Text style={styles.bold}>Employee Insights</Text>: Get detailed insights about your performance and productivity.
        </Text>
        <Text style={styles.listItem}>
          4. <Text style={styles.bold}>Timesheets</Text>: View and manage your timesheets.
        </Text>
      </View>
      

      <View style={styles.section}>
                <Image style={{width:200,height:200}} source={require("../assets/Images/FeaturesImg.jpg")}/>

        <Text style={styles.subHeader}>Features</Text>
        <Text style={styles.text}>
          - <Text style={styles.bold}>Date Range Selection</Text>: Easily select date ranges for generating reports.
        </Text>
        <Text style={styles.text}>
          - <Text style={styles.bold}>Report Generation</Text>: Generate detailed reports based on your selected date range.
        </Text>
        <Text style={styles.text}>
          - <Text style={styles.bold}>Profile Management</Text>: Update your profile information.
        </Text>
        <Text style={styles.text}>
          - <Text style={styles.bold}>Help Center</Text>: Access this help center anytime for assistance.
        </Text>
      </View>
      

      <View style={styles.section}>
      <Image style={{width:200,height:200}} source={require("../assets/Images/FAQ.jpg")}/>

        <Text style={styles.subHeader}>Frequently Asked Questions</Text>
        <Text style={styles.question}>
          Q: How do I reset my password?
        </Text>
        <Text style={styles.answer}>
          A: Go to the login screen, tap on "Forgot Password" and follow the instructions.
        </Text>
        <Text style={styles.question}>
          Q: How can I contact support?
        </Text>
        <Text style={styles.answer}>
          A: You can contact support through the app by navigating to the "Contact Us" section in the Help Center.
        </Text>
        <Text style={styles.question}>
          Q: How do I generate a report?
        </Text>
        <Text style={styles.answer}>
          A: Go to the "Employee Insights" section, select the desired date range, and tap on "Generate Report".
        </Text>
      </View>

      <View style={styles.section}>
      <Image style={{width:200,height:200}} source={require("../assets/Images/trouble.jpg")}/>

        <Text style={styles.subHeader}>Troubleshooting</Text>
        <Text style={styles.text}>
          - <Text style={styles.bold}>App Crashes</Text>: Ensure your app is up-to-date. Try restarting the app or your device.
        </Text>
        <Text style={styles.text}>
          - <Text style={styles.bold}>Login Issues</Text>: Check your internet connection and ensure your login credentials are correct.
        </Text>
        <Text style={styles.text}>
          - <Text style={styles.bold}>Feature Not Working</Text>: Contact support if a specific feature is not working as expected.
        </Text>
      </View>
      
      <View style={styles.section}>
      <Image style={{width:200,height:200}} source={require("../assets/Images/contact.jpg")}/>

        <Text style={styles.subHeader}>Contact Us</Text>
        <Text style={styles.text}>
          If you need further assistance, please reach out to our support team:
        </Text>
        <Text style={styles.contact}>
          Email: <Text style={styles.bold}>support@yourapp.com</Text>
        </Text>
        <Text style={styles.contact}>
          Phone: <Text style={styles.bold}>+1 800 123 4567</Text>
        </Text>
        <Text style={styles.text}>
          Our support team is available Monday to Friday, 9 AM to 5 PM (PST).
        </Text>
      </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.black,
    marginBottom: 20,
    textAlign: "center",
  },
  section: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    width:"50%"
  
  },
  subHeader: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.black,   
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
  },
  listItem: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
    marginLeft: 10,
  },
  bold: {
    fontWeight: "bold",
    color: "#333",
  },
  question: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
  },
  answer: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
    marginLeft: 10,
  },
  contact: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
  },
});

export default Help;



