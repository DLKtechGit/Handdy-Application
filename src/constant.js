export const Colors = {
    primary: "#08B3E9",
    primaryLight:'#E4F4F8',
    white: "#ffff",
    black: "#000",
    background: "#F5F5F5",
    gray: "#777",
    orange: "#FF9500",
    cardBackground: "#FFFFFF",
    // secondary: "#08B3E9",
    borderColor: "#eee",
    successColor: "#32CD32",
    Yellow: "#E7D912",
    red:"#FF0000",
    borderDarl:"#ccc"
  };
  








//   import React, { useState } from "react";
// import { StyleSheet, Text, View } from "react-native";
// import "react-native-gesture-handler";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import HomeScreen from "./src/screens/HomeScreen";
// import ProfileScreen from "./src/screens/ProfileScreen";
// import CustomDrawerContent from "./src/component/CustomDrawerContent";
// import EmployeeInsights from "./src/screens/EmployeeInsights";
// import MyDetailedTimesheet from "./src/screens/MyDetailedTimesheet";
// import Help from "./src/screens/Help";
// import { Colors } from "./src/constant";
// import Icons from "react-native-vector-icons/MaterialCommunityIcons";
// import TopNavebar from "./src/screens/MyTimesheetTopNav/TopNavebar";
// import Loginscreen from "./src/screens/Loginscreen";

// const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

// const DrawerNav = () => (
//   <Drawer.Navigator
//     initialRouteName="Employee Insights"
//     screenOptions={{
//       drawerStyle: {
//         backgroundColor: Colors.white,
//         width: "80%",
//       },
//     }}
//     drawerContent={(props) => <CustomDrawerContent {...props} />}
//   >
//         <Drawer.Screen name="Employee Insights" component={EmployeeInsights} />

//     <Drawer.Screen name="profile" component={ProfileScreen} />
//     <Drawer.Screen name="My Timesheet" component={TopNavebar} />
//     <Drawer.Screen
//       name="My Detailed Timesheet"
//       component={MyDetailedTimesheet}
//     />
//     <Drawer.Screen name="Help" component={Help} />
//     <Stack.Screen name="Login" options={{
//       headerShown:false
//     }}>
//             {(props) => (
//               <Loginscreen {...props} onLogin={() => setIsLoggedIn(true)} />
//             )}
//           </Stack.Screen>
//   </Drawer.Navigator>
// );

// export default function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <NavigationContainer>
//       {isLoggedIn ? (
//         <Stack.Navigator initialRouteName="Employee Insights">
//           <Stack.Screen
//             options={{ headerShown: false }}
//             name="Home"
//             component={DrawerNav}
//           />
//           <Stack.Screen name="Employee Insights" component={EmployeeInsights} />

//           <Stack.Screen name="profile" component={ProfileScreen} />
//           <Stack.Screen
//             name="My Detailed Timesheet"
//             component={MyDetailedTimesheet}
//           />
//           <Stack.Screen name="Help" component={Help} />
//         </Stack.Navigator>
//       ) : (
//         <Stack.Navigator>
//           <Stack.Screen name="Login" options={{
//             headerShown:false
//           }}>
//             {(props) => (
//               <Loginscreen {...props} onLogin={() => setIsLoggedIn(true)} />
//             )}
//           </Stack.Screen>
//         </Stack.Navigator>
//       )}
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
