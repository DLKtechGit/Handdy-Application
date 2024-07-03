import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
} from "react-native";
import { Card, Button, Snackbar } from "react-native-paper";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import DateTimePicker from "@react-native-community/datetimepicker";
import Icons from "react-native-vector-icons/MaterialIcons";
import { Colors } from "../constant";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import * as FileSystem from 'expo-file-system';
import * as XLSX from 'xlsx';
import * as Sharing from 'expo-sharing';

// Importing for web environment
import { saveAs } from 'file-saver';

const TimesheetComponent = () => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    fetchData();
  }, [date]);

  const fetchData = () => {
    setLoading(true);
    // Simulating fetch data delay
    setTimeout(() => {
      setLoading(false);
      setData({
        workTime: "02:22:33",
        loggedIn: "9:12:49 AM",
        breakTime: "01:44:46",
        loggedOut: "12:33:16 PM",
      });
    }, 2000);
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === "ios");
    setDate(currentDate);
  };

  const exportTimesheet = async () => {
    const timesheetData = [
      { label: "Work Time", value: data.workTime },
      { label: "Logged In", value: data.loggedIn },
      { label: "Break Time", value: data.breakTime },
      { label: "Logged Out", value: data.loggedOut },
    ];

    const ws = XLSX.utils.json_to_sheet(timesheetData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Timesheet");

    const wbout = XLSX.write(wb, { type: 'array', bookType: 'xlsx' });
    const fileName = `timesheet_${moment(date).format("YYYY-MM-DD")}.xlsx`;

    if (Platform.OS === 'web') {
      const buffer = new Blob([wbout], { type: 'application/octet-stream' });
      saveAs(buffer, fileName);
      // alert(`Timesheet exported successfully as ${fileName}`);
    } else {
      const uri = FileSystem.documentDirectory + fileName;
      try {
        await FileSystem.writeAsStringAsync(uri, wbout.join(''), { encoding: FileSystem.EncodingType.Base64 });
        await Sharing.shareAsync(uri);
        // alert(`Timesheet exported successfully to ${uri}`);
      } catch (error) {
        console.error("Error exporting timesheet:", error);
        setError("Failed to export timesheet");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Employee Work Summary</Text>
      <View style={styles.datePickerContainer}>
        {Platform.OS === "web" ? (
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            dateFormat="dd MMM yyyy"
            customInput={
              <TouchableOpacity style={styles.dateInput}>
                <Text style={styles.dateText}>
                  {moment(date).format("DD MMM YYYY")}
                </Text>
              </TouchableOpacity>
            }
          />
        ) : (
          <>
            <TouchableOpacity
              onPress={() => setShowDatePicker(true)}
              style={styles.dateInput}
            >
              <Text style={styles.dateText}>
                {moment(date).format("DD MMM YYYY")}
              </Text>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={date}
                style={{position:"relative",zIndex:1}}
                mode="date"
                display="default"
                onChange={onDateChange}
                onCancel={() => setShowDatePicker(false)}
              />
            )}
          </>
        )}
        <Icons name="calendar-month" size={35} style={{ marginLeft: 5 }} />
        <Button mode="contained" style={styles.goButton} onPress={fetchData}>
          Search
        </Button>
      </View>
      <View style={{justifyContent:"center",alignItems:"center",width:"50%"}}>

      {loading ? (
        <ActivityIndicator
          size="large"
          color={Colors.primary}
          style={styles.loading}
        />
      ) : data ? (
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardTitle}>Timesheet</Text>
            <View style={styles.row}>
              <Text style={styles.label}>Work Time</Text>
              <Text style={[styles.value, { color: "green" }]}>
                {data.workTime}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Logged In</Text>
              <Text style={[styles.value, { color: "green" }]}>
                {data.loggedIn}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Break Time</Text>
              <Text style={[styles.value, { color: "red" }]}>
                {data.breakTime}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Logged Out</Text>
              <Text style={[styles.value, { color: "red" }]}>
                {data.loggedOut}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("My Detailed Timesheet")}
            >
              <Text style={styles.moreLink}>More</Text>
            </TouchableOpacity>
            <Button
              mode="outlined"
              onPress={exportTimesheet}
              style={styles.exportButton}
            >
              Export Timesheet
            </Button>
          </Card.Content>
        </Card>
      ) : (
        <Card style={styles.card}>
          <Text style={styles.cardTitle}>Timesheet</Text>

          <Text style={styles.emptyState}>
            No data available for the selected date
          </Text>
        </Card>
      )}
      </View>
      {error && (
        <Snackbar visible={true} onDismiss={() => setError(null)}>
          {error}
        </Snackbar>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems:"center"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 10,
  },
  datePickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    zIndex: 10,
  },
  dateInput: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    flex: 1,
    width:"100%"
  },
  dateText: {
    fontSize: 16,
  },
  goButton: {
    marginLeft: 10,
    backgroundColor: Colors.primary,
  },
  loading: {
    marginTop: 20,
  },
  card: {
    padding: 20,
    backgroundColor: Colors.primaryLight,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
    marginTop: 30,
    width:"100%",
    zIndex: 1,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
  },
  value: {
    fontSize: 16,
  },
  moreLink: {
    color: "#007BFF",
    marginTop: 10,
  },
  exportButton: {
    marginTop: 20,
  },
  emptyState: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
    color: "#888",
  },
});

export default TimesheetComponent;
