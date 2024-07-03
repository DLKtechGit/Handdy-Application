import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import { Colors } from "../../constant";
import { Card, Button, Snackbar } from "react-native-paper";
import Icons from "react-native-vector-icons/MaterialIcons";
import * as FileSystem from "expo-file-system";
import * as XLSX from "xlsx";
import * as Sharing from "expo-sharing";
import { saveAs } from 'file-saver';


const DayView = () => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const generateReport = () => {
    // Implement your report generation logic here
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === "ios");
    setDate(currentDate);
  };

  const BreakTimeData = [
    {
      client: "Client Name",
      project: "Project Name",
      task: "Task Description",
      notes: "Notes here",
      count: 5,
      breakTime: "00:30:00",
    },
    {
      client: "Client Name",
      project: "Project Name",
      task: "Task Description",
      notes: "Notes here",
      count: 4,
      breakTime: "00:30:00",
    },
    {
      client: "Client Name",
      project: "Project Name",
      task: "Task Description",
      notes: "Notes here",
      count: 3,
      breakTime: "00:30:00",
    },
  ];

  const WorkTimeData = [
    {
      client: "Client Name",
      project: "Project Name",
      task: "Task Description",
      notes: "Notes here",
      count: 5,
      breakTime: "00:30:00",
    },
    {
      client: "Client Name",
      project: "Project Name",
      task: "Task Description",
      notes: "Notes here",
      count: 4,
      breakTime: "00:30:00",
    },
    {
      client: "Client Name",
      project: "Project Name",
      task: "Task Description",
      notes: "Notes here",
      count: 3,
      breakTime: "00:30:00",
    },
    {
      client: "Client Name",
      project: "Project Name",
      task: "Task Description",
      notes: "Notes here",
      count: 3,
      breakTime: "00:30:00",
    },
  ];

  const handleExportAndDownload = async () => {
    const wb = XLSX.utils.book_new();
  
    // Prepare WorkTimeData with total
    const totalWorkTime = WorkTimeData.reduce((total, item) => {
      const [hours, minutes, seconds] = item.breakTime.split(':').map(Number);
      return total + hours * 3600 + minutes * 60 + seconds;
    }, 0);
    const formattedTotalWorkTime = new Date(totalWorkTime * 1000).toISOString().substr(11, 8);
  
    const WorkTimeDataWithTotal = [...WorkTimeData, {
      client: '',
      project: '',
      task: '',
      notes: 'Total work time',
      count: '',
      breakTime: formattedTotalWorkTime,
    }];
  
    // Export Work Time Table as Sheet 1
    const ws1 = XLSX.utils.json_to_sheet(WorkTimeDataWithTotal);
    XLSX.utils.book_append_sheet(wb, ws1, "Work Time");
  
    // Prepare BreakTimeData with total
    const totalBreakTime = BreakTimeData.reduce((total, item) => {
      const [hours, minutes, seconds] = item.breakTime.split(':').map(Number);
      return total + hours * 3600 + minutes * 60 + seconds;
    }, 0);
    const formattedTotalBreakTime = new Date(totalBreakTime * 1000).toISOString().substr(11, 8);
  
    const BreakTimeDataWithTotal = [...BreakTimeData, {
      client: '',
      project: '',
      task: '',
      notes: 'Total break time',
      count: '',
      breakTime: formattedTotalBreakTime,
    }];
  
    // Export Break Time Table as Sheet 2
    const ws2 = XLSX.utils.json_to_sheet(BreakTimeDataWithTotal);
    XLSX.utils.book_append_sheet(wb, ws2, "Break Time");
  
    // Total of work time and break time
    const totalTime = totalWorkTime + totalBreakTime;
    const formattedTotalTime = new Date(totalTime * 1000).toISOString().substr(11, 8);
  
    // Add a summary sheet
    const summaryData = [
      { Description: 'Total work time', Time: formattedTotalWorkTime },
      { Description: 'Total break time', Time: formattedTotalBreakTime },
      { Description: 'Total (work time + break time)', Time: formattedTotalTime },
    ];
    const wsSummary = XLSX.utils.json_to_sheet(summaryData);
    XLSX.utils.book_append_sheet(wb, wsSummary, "Summary");
  
    const wbout = XLSX.write(wb, { type: "binary", bookType: "xlsx" });
  
    function s2ab(s) {
      const buf = new ArrayBuffer(s.length);
      const view = new Uint8Array(buf);
      for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff;
      return buf;
    }
  
    if (Platform.OS === 'web') {
      // For Web
      const blob = new Blob([s2ab(wbout)], { type: "application/octet-stream" });
      saveAs(blob, "tables_data.xlsx");
    } else {
      // For Mobile
      const uri = `${FileSystem.documentDirectory}tables_data.xlsx`;
      await FileSystem.writeAsStringAsync(uri, s2ab(wbout), {
        encoding: FileSystem.EncodingType.Base64,
      });
      await Sharing.shareAsync(uri, {
        mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        dialogTitle: 'Share Excel file',
        UTI: 'com.microsoft.excel.xlsx',
      });
    }
  };
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.subHeader}>
        Please select a date and click the Go button to generate the report
      </Text>
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
                style={{ position: "relative", zIndex: 1 }}
                mode="date"
                display="default"
                onChange={onDateChange}
                onCancel={() => setShowDatePicker(false)}
              />
            )}
          </>
        )}
        <Icons name="calendar-month" size={35} style={{ marginLeft: 5 }} />
        <Button mode="contained" style={styles.goButton} >
          Search
        </Button>
      </View>


      <View style={styles.reportContainer}>
        <View
          style={{
            backgroundColor: Colors.primaryLight,
            borderTopEndRadius: 10,
            borderTopStartRadius: 10,
            justifyContent: "center",
            paddingTop: 10,
            paddingHorizontal: 10,
          }}
        >
          <Text style={styles.reportHeader}>
            Timesheet - Day View Report for {moment(date).format("DD MMM YYYY")}
          </Text>
        </View>
        <TouchableOpacity onPress={handleExportAndDownload}>
          <Text style={styles.exportText}>Export to Excel</Text>
        </TouchableOpacity>
        <View style={{justifyContent:"center",alignContent:"center",alignItems:"center"}}>

        <View style={styles.tableContainerFull}>
          <View
            style={{ justifyContent: "flex-start", alignItems: "flex-start",width:"100%" }}
          >
            <Text style={styles.workTime}> Work Time</Text>
          </View>
          <ScrollView horizontal style={{width:"100%",flexDirection:"column"}}>
            <View style={styles.tableContainer}>
              <View style={styles.tableHeader}>
                <Text style={styles.tableHeaderText}>Client</Text>
                <Text style={styles.tableHeaderText}>Project</Text>
                <Text style={styles.tableHeaderText}>Task</Text>
                <Text style={styles.tableHeaderText}>Notes</Text>
                <Text style={styles.tableHeaderText}>Count</Text>
                <Text style={styles.tableHeaderText}>
                  Break Time (hh:mm:ss)
                </Text>
              </View>

              {WorkTimeData.map((row, index) => (
                <View key={index} style={styles.tableRow}>
                  <Text style={styles.tableCell}>{row.client}</Text>
                  <Text style={styles.tableCell}>{row.project}</Text>
                  <Text style={styles.tableCell}>{row.task}</Text>
                  <Text style={styles.tableCell}>{row.notes}</Text>
                  <Text style={styles.tableCell}>{row.count}</Text>
                  <Text style={styles.tableCell}>{row.breakTime}</Text>
                </View>
              ))}
            </View>
           
          </ScrollView>
          <View style={styles.TataltimeFooter}>
            <Text style={styles.totalText}>Total work time : 13:43:52</Text>
          </View>
        </View>

        <View style={styles.tableContainerFull}>
          <View
            style={{ justifyContent: "flex-start", alignItems: "flex-start",width:"100%" }}
          >
            <Text style={styles.workTime}> Break Time</Text>
          </View>
          <ScrollView horizontal style={{width:"100%"}}>
            <View style={styles.tableContainer}>
              <View style={styles.tableHeader}>
                <Text style={styles.tableHeaderText}>Client</Text>
                <Text style={styles.tableHeaderText}>Project</Text>
                <Text style={styles.tableHeaderText}>Task</Text>
                <Text style={styles.tableHeaderText}>Notes</Text>
                <Text style={styles.tableHeaderText}>Count</Text>
                <Text style={styles.tableHeaderText}>
                  Break Time (hh:mm:ss)
                </Text>
              </View>

              {BreakTimeData.map((row, index) => (
                <View key={index} style={styles.tableRow}>
                  <Text style={styles.tableCell}>{row.client}</Text>
                  <Text style={styles.tableCell}>{row.project}</Text>
                  <Text style={styles.tableCell}>{row.task}</Text>
                  <Text style={styles.tableCell}>{row.notes}</Text>
                  <Text style={styles.tableCell}>{row.count}</Text>
                  <Text style={styles.tableCell}>{row.breakTime}</Text>
                </View>
              ))}
            </View>
          </ScrollView>
          <View style={styles.TataltimeFooter}>
            <Text style={styles.totalText}>Total Break time : 13:43:52</Text>
          </View>
        </View>
        </View>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>
            Total (work time + break time): 13:43:52
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f5f5f5",
    flexGrow: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  navContainer: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "space-around",
    gap: 15,
  },
  navButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
  },
  navButtonText: {
    color: "#fff",
  },
  subHeader: {
    color: "gray",
    marginBottom: 20,
    textAlign: "center",
  },
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    alignContent: 'center',
    justifyContent: 'center',
    zIndex: 1000, // Ensure date picker is above other elements
    position: "relative", // Ensure proper positioning
  },
  datePicker: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    // zIndex:10

  },
  dateText: {
    fontSize: 16,
    color: '#000',
  }, 
  reportContainer: {
    marginTop: 20,
    backgroundColor: "#fff",
    // padding: 20,
    borderRadius: 10,
    zIndex:1
  },
  reportHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    // backgroundColor:Colors.primary,
    // color:Colors.white,
    // borderStartEndRadius:10
  },
  exportText: {
    color: "#007bff",
    marginBottom: 20,
    textAlign: "center",
  },
  tableContainer: {
    marginBottom: 20,
    justifyContent:"center"
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#e9ecef",
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  tableHeaderText: {
    flex: 1,
    fontWeight: "bold",
    width: 150,
    textAlign: "center",
  },
  tableRow: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#dee2e6",
  },
  tableCell: {
    flex: 1,
    width: 150,
    textAlign: "center",
  },
  totalContainer: {
    alignItems: "center",
    height: 40,
    backgroundColor: Colors.primaryLight,
    borderRadius: 5,
    justifyContent: "center",
    textAlign: "center",
    marginTop: 20,
  },
  totalText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  
  goButton: {
    marginLeft: 10,
    backgroundColor: Colors.primary,
  },
  workTime: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 10,
  },
  TataltimeFooter: {
    backgroundColor: Colors.borderColor,
    alignItems: "flex-end",
    height: 40,
    justifyContent: "center",
    textAlign: "center",
    width:"100%",
    paddingRight:20,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    marginTop:5
  },
  tableContainerFull: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    zIndex:1
  },
  dateInput:{
    height:40,
    width:120,
    backgroundColor:"white",
    textAlign:"center",
    borderRadius:5,
    paddingTop:7,
    borderWidth:1,
    borderColor:Colors.borderColor,
    paddingLeft:10,
  }

  
});

export default DayView;
