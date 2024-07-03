import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { View } from 'react-native'
import DayView from './DayView'
import MonthView from './MonthView'
import DateRange from './DateRange'
import { Colors } from '../../constant'

const Tab = createMaterialTopTabNavigator()

const TopNavebar = () => {
  return (
    <Tab.Navigator
    initialRouteName='Day View'
    screenOptions={{
        tabBarLabelStyle:{
            fontSize:12,
            fontWeight:"700",
            width:150,

        },
        tabBarActiveTintColor:Colors.primary,
        tabBarInactiveTintColor:Colors.black
        
        
        
       
    }}
    >
        <Tab.Screen  name='Day View' component={DayView}/>
        <Tab.Screen name='Date Range' component={DateRange}/>
        <Tab.Screen name='Month View' component={MonthView}/>
        {/* <Tab.Screen name='Date Range' component={DateRange}/> */}
    </Tab.Navigator>
  )
}

export default TopNavebar
