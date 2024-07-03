import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from "@react-native-community/datetimepicker";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { Colors } from '../constant';
import { Button } from "react-native-paper";
import Icons from "react-native-vector-icons/MaterialIcons";
import * as FileSystem from 'expo-file-system';
import * as XLSX from 'xlsx';
import * as Sharing from 'expo-sharing';


const MyDetailedTimesheet = () => {
    const [date1, setDate1] = useState(new Date());
    const [date2, setDate2] = useState(new Date());
    const [showDatePicker1, setShowDatePicker1] = useState(false);
    const [showDatePicker2, setShowDatePicker2] = useState(false);
  
    const generateReport = () => {
      // Implement your report generation logic here
    };
  
    const onDateChange = (event, selectedDate) => {
      const currentDate = selectedDate || date1;
      setShowDatePicker1(Platform.OS === "ios");
      setDate1(currentDate);
    };

    const onDateChangedate2 = (event, selectedDate) => {
        const currentDate = selectedDate || date2;
        setShowDatePicker2(Platform.OS === "ios");
        setDate2(currentDate);
      };

      const WorkTimeData = [
        {
            date:"27-07-2024",
            Time:"	01:12:52 PM - 01:13:08 PM",
            client: "Client Name",
            project: "Project Name",
            type: "Task Description",
            Duration: "00:30:00",
          },
          {
            date:"27-07-2024",
            Time:"	01:12:52 PM - 01:13:08 PM",
            client: "Client Name",
            project: "Project Name",
            type: "Task Description",
            Duration: "00:30:00",
          },
          {
            date:"27-07-2024",
            Time:"	01:12:52 PM - 01:13:08 PM",
            client: "Client Name",
            project: "Project Name",
            type: "Task Description",
            Duration: "00:30:00",
          },
          {
            date:"27-07-2024",
            Time:"	01:12:52 PM - 01:13:08 PM",
            client: "Client Name",
            project: "Project Name",
            type: "Task Description",
            Duration: "00:30:00",
          },
      
      ]

      const handleExportAndDownload = async () => {
        const wb = XLSX.utils.book_new();
    
        // Export Table as Sheet 1
        const ws1 = XLSX.utils.json_to_sheet(WorkTimeData);
    
        // Calculate Totals
        const totalWorkTime = "13:43:52"; // Replace with actual calculation
        const totalBreakTime = "13:43:52"; // Replace with actual calculation
        const combinedTotal = "27:27:44"; // Replace with actual calculation (sum of work time and break time)
    
        // Add Totals to Worksheet
        XLSX.utils.sheet_add_aoa(ws1, [
            [], // Empty row
            ["", "", "", "", "", "Total work time:", totalWorkTime],
            ["", "", "", "", "", "Total break time:", totalBreakTime],
            ["", "", "", "", "", "Total (work time + break time):", combinedTotal],
        ], { origin: -1 }); // Append the totals at the end of the sheet
    
        XLSX.utils.book_append_sheet(wb, ws1, 'Work Time');
    
        const wbout = XLSX.write(wb, { type: 'base64', bookType: 'xlsx' });
    
        if (Platform.OS === 'web') {
            const s2ab = (s) => {
                const buf = new ArrayBuffer(s.length);
                const view = new Uint8Array(buf);
                for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff;
                return buf;
            };
    
            const blob = new Blob([s2ab(atob(wbout))], { type: 'application/octet-stream' });
            saveAs(blob, 'Date_Range_report.xlsx');
        } else {
            const uri = FileSystem.documentDirectory + 'Date_Range_report.xlsx';
            try {
                await FileSystem.writeAsStringAsync(uri, wbout, { encoding: FileSystem.EncodingType.Base64 });
                await Sharing.shareAsync(uri);
                console.log('Excel file exported and downloaded successfully at', uri);
            } catch (error) {
                console.error('Error exporting and downloading Excel file:', error);
                Alert.alert('Error', 'Failed to export Excel file. Please try again.', [{ text: 'OK' }]);
            }
        }
    };
    

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.subHeader}>Please select a date and click the Search button to generate the report</Text>
            <View style={styles.datePickerContainer}>

{Platform.OS === "web" ? (
<DatePicker
selected={date1}
onChange={(date) => setDate1(date)}
dateFormat="dd MMM yyyy"
customInput={
  <TouchableOpacity style={styles.dateInput}>
    <Text style={styles.dateText}>
      {moment(date1).format("DD MMM YYYY")}
    </Text>
  </TouchableOpacity>
}
/>
) : (
<>
<TouchableOpacity
  onPress={() => setShowDatePicker1(true)}
  style={styles.dateInput}
>
  <Text style={styles.dateText}>
    {moment(date1).format("DD MMM YYYY")}
  </Text>
</TouchableOpacity>
{showDatePicker1 && (
  <DateTimePicker
    value={date1}
    style={{ position: "relative", zIndex: 1 }}
    mode="date"
    display="default"
    onChange={onDateChange}
    onCancel={() => setShowDatePicker1(false)}
  />
)}
</>
)}
<Text style={{fontSize:15,fontWeight:"600",marginLeft:3}}>
To
</Text>
    <Icons name="calendar-month" size={35} style={{ marginLeft: 5 }} />


    {Platform.OS === "web" ? (
<DatePicker
selected={date2}
onChange={(date) => setDate2(date)}
dateFormat="dd MMM yyyy"
customInput={
  <TouchableOpacity style={styles.dateInput}>
    <Text style={styles.dateText}>
      {moment(date2).format("DD MMM YYYY")}
    </Text>
  </TouchableOpacity>
}
/>
) : (
<>
<TouchableOpacity
  onPress={() => setShowDatePicker2(true)}
  style={styles.dateInput}
>
  <Text style={styles.dateText}>
    {moment(date2).format("DD MMM YYYY")}
  </Text>
</TouchableOpacity>
{showDatePicker2 && (
  <DateTimePicker
    value={date2}
    style={{ position: "relative", zIndex: 1 }}
    mode="date"
    display="default"
    onChange={onDateChange}
    onCancel={() => setShowDatePicker2(false)}
  />
)}
</>
)}

<Button
mode="contained"
style={styles.goButton}
onPress={generateReport}
>
Search
</Button>

</View>
      {/* <Button
          mode="contained"
          style={styles.goButton}
          onPress={generateReport}
        >
          Search
        </Button> */}
            <View style={styles.reportContainer}>
                <View style={{ backgroundColor: Colors.primaryLight, borderTopEndRadius: 10, borderTopStartRadius: 10, justifyContent: "center", paddingTop: 10,paddingHorizontal:10 }}>
                <Text style={styles.reportHeader}> Vijayaraj M  </Text>
                    <Text style={styles.reportHeader}> (Web Design and Development) report - {moment(date1).format("DD MMM YYYY")} to {moment(date2).format("DD MMM YYYY")}</Text>
                </View>
                <TouchableOpacity onPress={handleExportAndDownload}><Text style={styles.exportText}>Export to Excel</Text></TouchableOpacity>
                <View style={{justifyContent:"center",alignContent:"center",alignItems:"center"}}>
                <View style={styles.tableContainerFull}>
                   
                    <ScrollView horizontal >
                    <View style={styles.tableContainer}>
                            <View style={styles.tableHeader}>
                            <Text style={styles.tableHeaderText}>Date</Text>
                            <Text style={styles.tableHeaderText}>Time</Text>
                                <Text style={styles.tableHeaderText}>Client</Text>
                                <Text style={styles.tableHeaderText}>Project</Text>
                                <Text style={styles.tableHeaderText}>type</Text>
                                
                                <Text style={styles.tableHeaderText}>Duration (hh:mm:ss)</Text>
                            </View>
                            {WorkTimeData.map((row,index)=>(
                                <View key={index}style={styles.tableRow}>
                                    <Text style={styles.tableCell}>{row.date}</Text>
                                    <Text style={styles.tableCell}>{row.Time}</Text>

                                <Text style={styles.tableCell}>{row.client}</Text>
                                <Text style={styles.tableCell}>{row.project}</Text>
                                <Text style={styles.tableCell}>{row.type}</Text>


                                <Text style={styles.tableCell}>{row.Duration}</Text>
                            </View>
                            ))

                            }
                            

        
                        </View>
                    </ScrollView>
                    <View style={styles.totalContainer}>
                    <Text style={styles.totalText}>Total work time: 13:43:52</Text>
                        <Text style={styles.totalText}>Total break time: 13:43:52</Text>
                    </View>
                   
                </View>
                </View>
                <View style={styles.footer}>
                        <Text style={styles.totalText}>Total (work time + break time): 13:43:52</Text>
                    </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f5f5f5',
        flexGrow: 1,
    },
    subHeader: {
        color: 'gray',
        marginBottom: 20,
        textAlign: 'center',
    },
    datePicker: {
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        flexDirection:"row"
    },
    dateText: {
        fontSize: 16,
        color: '#000',
        marginTop:5
    },
    datePickerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"center",
        marginBottom:10,
        zIndex:10
    },
    goButton: {
        marginLeft: 10,
        backgroundColor: Colors.primary,
        // marginBottom:10
    },
    reportContainer: {
        marginTop: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        zIndex:1
    },
    reportHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    exportText: {
        color: '#007bff',
        marginTop:10,
        marginBottom: 10,
        textAlign: 'center',
    },
    tableContainer: {
        marginBottom: 20,
    },
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#e9ecef',
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    tableHeaderText: {
        flex: 1,
        fontWeight: 'bold',
        width: 150,
        textAlign: 'center',
    },
    tableRow: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#dee2e6',
    },
    tableCell: {
        flex: 1,
        width: 150,
        textAlign: 'center',
    },
    totalContainer: {
      backgroundColor: Colors.borderColor,
      alignItems: "flex-end",
      height: 50,
      justifyContent: "center",
      textAlign: "center",
      width:"100%",
      paddingRight:20,
      borderBottomLeftRadius:10,
      borderBottomRightRadius:10,
      marginTop:5,
      paddingVertical:10
    },
    totalText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    workTime: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 10,
    },

    footer:{
        alignItems: 'center',
        height: 40,
        backgroundColor: Colors.primaryLight,
        borderRadius: 5,
        justifyContent: "center",
        textAlign: "center",
        marginTop: 20,
    },
    dateInput:{
      height:40,
      width:120,
      backgroundColor:"white",
      textAlign:"center",
      borderRadius:5,
      paddingTop:2,
      borderWidth:1,
      borderColor:Colors.borderColor,
      paddingLeft:10,
    },
    tableContainerFull:{
      padding: 10,
      justifyContent: "center",
      alignItems: "center",
  },
});

export default MyDetailedTimesheet;
