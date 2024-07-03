import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,StatusBar} from 'react-native';
import { Avatar, Title } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Colors } from '../constant';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const CustomDrawerContent = (props) => {
  const { state } = props;
  const currentRoute = state.routeNames[state.index];
  // const navigation = useNavigation()

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{flex:1,}}>
      <View style={styles.drawerContent}>
        <View style={styles.logoContainer}>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.userInfoSection}>
              <View style={{flexDirection:"row", marginTop: 15, alignItems: "center" }}>
                <Avatar.Image
                  source={{
                    uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAM1BMVEXFzeD////Byt7L0uPByd7Q1+b7/P3j5/Dv8fbe4+3r7vTFzuDL0+P19/rn6/LZ3urW2+lU+LHUAAAFLklEQVR4nO2dC3arMAxEQXwCcfjsf7XPkLw2tEka5AEziu8CeuKpJVmyLLIskUgkEkdFbsT+HXEQKbNqOPWN59y72D9nd/z/vWqbOv/mozSY9n116vIl1acYg1++G9v+5/rzvMs+QwL/7x/O9a/lT5zL2D9uF7wAzcP1e+pP2AQi4/mZAJ6TfQ3EtY9N4D+jdQ2k6F8K4OltayDFKyP4cghmI6PzVvDnHrDuEqR9UwFPY1IEufw+C72yh8LeIUFOaxSY6K0dFt2qTXDDVJCUi0IBT2vHHmTUSWAnPjgZtBJ4p2BjJ4RIYCSHlCpEAi+CAXMowiSwIIJoguKSE7k5rD8aPWDg3gnKg8EPLrGXEUL5tGC2ijr2OkIIjAlfEJdVBLMNcmprQEnAW09YUzT5C9aNADgbfMGaPQlOgrwj1cAlDZIGGVYD2ktIpAasiRNQgzxpkOektoCMjUkDT+zFaEFqwNqohtSgiL0YHcHlVAMaoCooM6SJo/qK7RGk+yBpkGVBl2w2NAi7aEwamNEAWE5MGiQNkgZJg6RB0sCEBoj+C3YN0j5IGkyks3LKnSegdaSkQdIgaUCtwcf7RJHy02OjVG3/+knvSlxJd+uK7Emb6eqOrQVBoJvgCtu16xYasF23QXsPWDVI+yArN9CALTyW6LhAqAE8NuaEcQH2fOMbtkNS+e7IC8MaYIuJM3TnRGwxcYbvPQ+0eDBD95TFIRv3rwyx17Qa/EGRbmqSAz1xvSP2ktaDvW3MOV9xoJ0i43tftEPgc4n4U1Ls9ajAbgTOkSCh02AW1GxJ4w2gCKwSIAspF0pLmIB5BNaXvhnwnMSXMn6DqrBzBoUrqKoiXdp8B6qqWMVeSADyzijhNyDeBiinyOwSUc95uAemYZ66sl0wLYGcFPmK6gsgCTRzZJxAlJe5TQFyQiA3hQxRVuSOChPBXrEW2trBf/RDts1sg+C8iXZA1oKwc9IY++dDCDojUKcKd5T67JF6ou4C9SHBhjO4os2hiWupv1Hm0JY00LpFKx5xQmsLpjRQdisy19R/om3MsaSB9rxsSgOdBKY00E5SZOxBeoa2kGJJA+01gyEN1JmjJQ20jxnYq+p3qPNGQxqo66qtHQ3UfUlJA0MalKJ+8NnyPfh/hFzOnbpFr6vP7JeNGaALw0BJMfzemT4+IhqSYq8hFESDInNj3ky4BPSXroieLPZDAuI7nuROsUS84iAvqKmT5gWxVxEIQgJuY8BsA+6NgPmyMXVkQHXuM+cMuBEIjO98Z4K78r5pOFtVpWiRn7Qd+aop5QU9AqJuMyYVRKoNJkT58OD/cuy1vYUX4LTBvLgrzVAcXwYpthPgSjcc2ybkgjoRvKQvjqrCVl7gEU11RJMQGTeYFvicbjyaCnsrMFG3R1JBsnZjR/hEhf4gJiHi0NOg1nCOL8OejvAJ3RBTBScy7O4GHlCfXCwV4hrBkvMlQmYpZXQjWLJ7sJTyEEawZNfMsowUC/+m38kxiNtgbDCMZgfHIMUuaVEA3cYnBnx5aAu8e9xMASkYFJjoNpo/K+7oVnBPg68xuKw8zoHoPXp0pCzHg0bDV0CTa3EsjmBJjUunsB9u35Ua08wkGecmuIEIEVIReoIFwTf38JHhEQgcxuqOlx4qCBFBCnY7uKH/uhV0SHRU9CNFUO1EB0A9TMKIIczoggP+QxpRUQ0cM+MMrmiezG7x0bmoKDYCZhLqgVjf8WvhfLhkfaPnFt/di8zq6XNbfIczMqsHDW3xTdrYPFvrP7kiUsVMV4ODAAAAAElFTkSuQmCC',
                  }}
                  size={70}
                  style={{ marginTop: 5, }}
                />
                <View style={{ marginLeft: 15,}}>
                  <Title style={styles.title}>Vijayaraj</Title>
                  <Text style={styles.caption} numberOfLines={1}>
                    Vijayaraj@gmail.com
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.menuContainer}>
        <Text style={styles.menuTitle}>HOME</Text>
        <DrawerItem
            label="Timer"
            onPress={() => props.navigation.navigate('Timer')}
            icon={({ color, size }) => (
              <Icons name="timer-outline" size={size} color={currentRoute === 'Timer' ? Colors.primary : color} />
              

            )}
            style={currentRoute === 'Timer'? styles.activeBackground:styles.inactiveBackground}

          />

         
          <DrawerItem
            label="Employee Insights"
            onPress={() => props.navigation.navigate('Employee Insights')}
            icon={({ color, size }) => (
              <Icons name="chart-line" size={size} color={currentRoute === 'Employee Insights' ? Colors.primary : color} />
              

            )}
            style={currentRoute === 'Employee Insights'? styles.activeBackground:styles.inactiveBackground}

          />
          <DrawerItem
            label="My Timesheet"
            onPress={() => props.navigation.navigate('My Timesheet')}
            icon={({ color, size }) => (
              <Icons name="clock-time-four-outline" size={size} color={currentRoute === 'My Timesheet' ? Colors.primary : color} />
            )}
            style={currentRoute === 'My Timesheet'? styles.activeBackground:styles.inactiveBackground}
          />
          <DrawerItem
            label="My Detailed Timesheet"
            onPress={() => props.navigation.navigate('My Detailed Timesheet')}
            icon={({ color, size }) => (
              <Icons name="file-document-outline" size={size} color={currentRoute === 'My Detailed Timesheet' ? Colors.primary : color} />
            )}
            style={currentRoute === 'My Detailed Timesheet'? styles.activeBackground:styles.inactiveBackground}
          />
        </View>

        <View style={styles.menuContainer}>
                    <Text style={styles.menuTitle}>SETTINGS</Text>

          <DrawerItem
            label="Help"
            onPress={() => props.navigation.navigate('Help')}
            icon={({ color, size }) => (
              <Icons name="help-circle-outline" size={size} color={currentRoute === 'Help' ? Colors.primary : color} />
            )}
            style={currentRoute === 'Help'? styles.activeBackground:styles.inactiveBackground}
          />
          {/* <DrawerItem
            label="Profile"
            onPress={() => props.navigation.navigate('profile')}
            icon={({ color, size }) => (
              <Icons name="account" size={size} color={currentRoute === 'profile' ? Colors.primary : color} />
            )}
            style={currentRoute === 'profile'? styles.activeBackground:styles.inactiveBackground}
          /> */}
        <DrawerItem
            label="Logout"
            onPress={()=> props.navigation.navigate("Login")}
            icon={({ color, size }) => (
              <Icons name="logout" size={size} color={color} />
            )}
            style={currentRoute === 'logout'? styles.activeBackground:styles.inactiveBackground}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  logoContainer: {
    height: 150,
    justifyContent: 'center',
    alignItems: "flex-start",
    paddingLeft:20,
    backgroundColor: Colors.primary,
    borderBottomLeftRadius:50,

  },
  logo: {
    width: 100,
    height: 100,
  },
  menuContainer: {
    marginVertical:10,
    paddingHorizontal: 10,
    paddingTop:10
  },
  menuTitle: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
  title: {
    fontSize: 20,
    marginTop: 3,
    fontWeight: 'bold',
    color: 'white'
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    color: 'white'
  },
  activeBackground: {
    backgroundColor: Colors.primaryLight, 
  },
  inactiveBackground: {
    backgroundColor: Colors.white, 
  },
  
});

export default CustomDrawerContent;


