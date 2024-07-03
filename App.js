
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import CustomDrawerContent from "./src/component/CustomDrawerContent";
import EmployeeInsights from "./src/screens/EmployeeInsights";
// import MyTimesheet from "./src/screens/MyTimesheet";
import MyDetailedTimesheet from "./src/screens/MyDetailedTimesheet";
import Help from "./src/screens/Help";
import { Colors } from "./src/constant";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import TopNavebar from "./src/screens/MyTimesheetTopNav/TopNavebar";
import Loginscreen from "./src/screens/Loginscreen";
import ForgotPassword from "./src/screens/ForgotPassword";
import ResetPassword from "./src/screens/ResetPassword";
import TimerScreen from "./src/screens/TimerScreen";

const StackNav = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator >
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="profile" component={ProfileScreen} />
        <Stack.Screen name="Employee Insights" component={EmployeeInsights} />
        {/* <Stack.Screen name="Forgot Password" component={Forgor} /> */}
        <Stack.Screen
          name="My Detailed Timesheet"
          component={MyDetailedTimesheet}
        />
        <Stack.Screen name="Help" component={Help} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Login"
        screenOptions={{
          drawerStyle: {
            backgroundColor: Colors.white,
            
          },
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />
      }
    
      >
         
        {/* <Drawer.Screen name="Home" component={HomeScreen} /> */}
        <Drawer.Screen options={{headerShown:false}} name="Login" component={Loginscreen}/>

        <Drawer.Screen name="profile" component={ProfileScreen} />
        <Drawer.Screen name="Employee Insights" component={EmployeeInsights} />
        <Drawer.Screen name="My Timesheet" component={TopNavebar} />
        <Drawer.Screen name="Timer" component={TimerScreen}/>
        <Drawer.Screen
          name="My Detailed Timesheet"
          component={MyDetailedTimesheet}
        />
        <Drawer.Screen name="Help" component={Help} />
        <Drawer.Screen options={{
          headerShown:false
        }} name="Forgot Password" component={ForgotPassword}/>
        <Drawer.Screen options={{
          headerShown:false
        }} name="Reset Password" component={ResetPassword}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
