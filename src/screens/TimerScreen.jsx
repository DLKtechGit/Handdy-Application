import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';
import { Colors } from "../constant";

const TimerScreen = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [storedTime, setStoredTime] = useState(null);
  const intervalRef = useRef(null);

  const [selectedProject, setSelectedProject] = useState("");
  const [selectedClient, setSelectedClient] = useState("DLK Internal Projects");
  const [selectedTask, setSelectedTask] = useState("Break");

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleStartStop = async () => {
    if (isRunning) {
      await saveTime(time);
      setTime(0); // Reset time to 00:00:00 when stopping
    }
    setIsRunning(!isRunning);
  };

  const saveTime = async (time) => {
    try {
      await AsyncStorage.setItem('storedTime', time.toString());
      setStoredTime(time);
    } catch (error) {
      console.log(error);
    }
  };

  const loadStoredTime = async () => {
    try {
      const value = await AsyncStorage.getItem('storedTime');
      if (value !== null) {
        setStoredTime(parseInt(value));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadStoredTime();
  }, []);

  const formatTime = (seconds) => {
    const getSeconds = `0${seconds % 60}`.slice(-2);
    const minutes = Math.floor(seconds / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(seconds / 3600)}`.slice(-2);
    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DLK Technologies Pvt Ltd</Text>
      <Text style={styles.date}>Date: 29-Jun-2024</Text>
      <Text style={styles.breakTime}>Break Time</Text>
      <Text style={styles.timer}>{formatTime(time)}</Text>
      <View style={{justifyContent:"center",alignItems:"center",alignContent:"center",width:"40%"}}>

      <View style={styles.pickerContainer}>
        
        <Text style={styles.label}>Project</Text>
        <View style={styles.picker} >

        <Picker
          selectedValue={selectedProject}
          style={styles.pickers}
          onValueChange={(itemValue, itemIndex) => setSelectedProject(itemValue)}
        >
          <Picker.Item label="Website Development" value="Website Development" />
          <Picker.Item label="Mobile App Development" value="Mobile App Development" />
          <Picker.Item label="Data Analysis" value="Data Analysis" />
        </Picker>
        </View>
      </View>

      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Client</Text>
        <View style={styles.picker} >
        <Picker
          selectedValue={selectedClient}
          style={styles.pickers}
          onValueChange={(itemValue, itemIndex) => setSelectedClient(itemValue)}
        >
          <Picker.Item label="DLK Internal Projects" value="DLK Internal Projects" />
          <Picker.Item label="Client A" value="Client A" />
          <Picker.Item label="Client B" value="Client B" />
        </Picker>
        </View>
      </View>

      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Task</Text>
        <View style={styles.picker} >

        <Picker
          selectedValue={selectedTask}
          style={styles.pickers}
          onValueChange={(itemValue, itemIndex) => setSelectedTask(itemValue)}
        >
          <Picker.Item label="Break" value="Break" />
          <Picker.Item label="Meeting" value="Meeting" />
          <Picker.Item label="Development" value="Development" />
          <Picker.Item label="Testing" value="Testing" />
        </Picker>
        </View>
      </View>
      </View>

      <TouchableOpacity
        style={isRunning ? styles.stopButton : styles.startButton}
        onPress={handleStartStop}
      >
        <Text style={styles.buttonText}>{isRunning ? "STOP" : "START"}</Text>
      </TouchableOpacity>
      {storedTime !== null && (
        <Text style={styles.storedTime}>
          Last Recorded Break Time: {formatTime(storedTime)}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colors.primaryLight,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    color:Colors.black,
    fontSize: 20,
    marginBottom: 10,
  },
  date: {
    color: Colors.black,
    fontSize: 16,
    marginBottom: 30,
  },
  breakTime: {
    color: Colors.gray,
    fontSize: 24,
    marginBottom: 20,
  },
  timer: {
    color:Colors.gray,
    fontSize: 48,
    marginBottom: 30,
  },
  pickerContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    color: Colors.black,
    fontSize: 16,
    marginBottom: 10,
    marginLeft:20
  },
  picker: {
    height: 40,
    width: '100%',
    color: Colors.black,
    // backgroundColor: Colors.primaryLight,
    borderRadius:10,
paddingHorizontal:20

  },
  pickers:{
    height: 50,
    width: '100%',
    color: Colors.black,
    backgroundColor: Colors.primaryLight,
    borderRadius:10,
paddingHorizontal:20
  },
  startButton: {
    backgroundColor: Colors.successColor,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
  },
  stopButton: {
    backgroundColor: "#ff3b30",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    color: "#002d6b",
    fontSize: 18,
    fontWeight: "bold",
  },
  storedTime: {
    color: Colors.black,
    fontSize: 16,
    marginTop: 20,
  },
});

export default TimerScreen;
