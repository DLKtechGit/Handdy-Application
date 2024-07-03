import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform } from 'react-native';
import moment from 'moment';
import { Colors } from '../../constant';
import { Button } from "react-native-paper";
import * as FileSystem from 'expo-file-system';
import * as XLSX from 'xlsx';
import * as Sharing from 'expo-sharing';
import { Picker } from "@react-native-picker/picker";
import { saveAs } from 'file-saver';




const MonthView = () => {
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  
    const generateReport = () => {
    };
  

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const years = Array.from(new Array(50), (val, index) => index + 2000);

    
      
      const WorkTimeData = [
        {
          date:"27-07-2024",
          workTime:"00:30:00",
          breakTime: "00:30:00",
        },
        {
          date:"27-07-2024",
          workTime:"00:30:00",
          breakTime: "00:30:00",
        },
        {
          date:"27-07-2024",
          workTime:"00:30:00",
          breakTime: "00:30:00",
        },
         
          
      
      ]
      const calculateTotalTime = (timeData, key) => {
        return timeData.reduce((total, item) => {
            const [hours, minutes, seconds] = item[key].split(':').map(Number);
            total.hours += hours;
            total.minutes += minutes;
            total.seconds += seconds;

            if (total.seconds >= 60) {
                total.minutes += Math.floor(total.seconds / 60);
                total.seconds = total.seconds % 60;
            }
            if (total.minutes >= 60) {
                total.hours += Math.floor(total.minutes / 60);
                total.minutes = total.minutes % 60;
            }

            return total;
        }, { hours: 0, minutes: 0, seconds: 0 });
    };

    const formatTime = (time) => {
        return `${String(time.hours).padStart(2, '0')}:${String(time.minutes).padStart(2, '0')}:${String(time.seconds).padStart(2, '0')}`;
    };

    const handleExportAndDownload = async () => {
        const totalWorkTime = calculateTotalTime(WorkTimeData, 'workTime');
        const totalBreakTime = calculateTotalTime(WorkTimeData, 'breakTime');
        const totalWorkTimeFormatted = formatTime(totalWorkTime);
        const totalBreakTimeFormatted = formatTime(totalBreakTime);

        const totalOverallTime = {
            hours: totalWorkTime.hours + totalBreakTime.hours,
            minutes: totalWorkTime.minutes + totalBreakTime.minutes,
            seconds: totalWorkTime.seconds + totalBreakTime.seconds,
        };

        if (totalOverallTime.seconds >= 60) {
            totalOverallTime.minutes += Math.floor(totalOverallTime.seconds / 60);
            totalOverallTime.seconds = totalOverallTime.seconds % 60;
        }
        if (totalOverallTime.minutes >= 60) {
            totalOverallTime.hours += Math.floor(totalOverallTime.minutes / 60);
            totalOverallTime.minutes = totalOverallTime.minutes % 60;
        }

        const totalOverallTimeFormatted = formatTime(totalOverallTime);

        const extendedData = [
            ...WorkTimeData,
            { date: 'Total Work Time', workTime: totalWorkTimeFormatted, breakTime: '' },
            { date: 'Total Break Time', workTime: '', breakTime: totalBreakTimeFormatted },
            { date: 'Total (work time + break time)', workTime: totalOverallTimeFormatted, breakTime: '' },
        ];

        const wb = XLSX.utils.book_new();
        const ws1 = XLSX.utils.json_to_sheet(extendedData);
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
            saveAs(blob, 'Monthly_report.xlsx');
        } else {
            const uri = FileSystem.documentDirectory + 'Monthly_report.xlsx';
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
            <Text style={styles.subHeader}>Please choose a month , year and click the Search button to generate the report</Text>
            <View style={styles.datePickerContainer}>

                
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={selectedMonth}
                onValueChange={(itemValue) => setSelectedMonth(itemValue)}
                style={styles.picker}
                placeholder="Select Month"
              >
                {months.map((month, index) => (
                  <Picker.Item key={index} label={month} value={index + 1} />
                ))}
              </Picker>
            </View>

            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={selectedYear}
                onValueChange={(itemValue) => setSelectedYear(itemValue)}
                style={styles.picker}
              >
                {years.map((year, index) => (
                  <Picker.Item
                    key={index}
                    label={year.toString()}
                    value={year}
                  />
                ))}
              </Picker>
            </View>

            <Button
          mode="contained"
          style={styles.goButton}
          onPress={generateReport}
        >
          Search
        </Button>
               


      </View>
      
      
            <View style={styles.reportContainer}>
                <View style={{ backgroundColor: Colors.primaryLight, borderTopEndRadius: 10, borderTopStartRadius: 10, justifyContent: "center", paddingTop: 10,paddingHorizontal:10 }}>
                    <Text style={styles.reportHeader}>Monthly report
 (from June 2024)</Text>
                </View>
                <TouchableOpacity onPress={handleExportAndDownload}><Text style={styles.exportText}>Export to Excel</Text></TouchableOpacity>
               
                <View style={styles.tableContainerFull}>
                  <View style={{justifyContent:"center"}}>
                    
                    <ScrollView horizontal style={{width:"100%"}} >
                    <View style={styles.tableContainer}>
                            <View style={styles.tableHeader}> 
                            <Text style={styles.tableHeaderText}>Date</Text>
                                <Text style={styles.tableHeaderText}>Working Time</Text>
                                <Text style={styles.tableHeaderText}>Break Time</Text>
                                
                            </View>
                            {WorkTimeData.map((row,index)=>(
                                <View key={index}style={styles.tableRow}>
                                    <Text style={styles.tableCell}>{row.date}</Text>
                                <Text style={styles.tableCell}>{row.workTime}</Text>
                                <Text style={styles.tableCell}>{row.breakTime}</Text>
                            </View>
                            ))

                            }
                            
                            <View style={styles.tablefooter}>
                    <Text style={styles.totalText}>Total work time: 13:43:52</Text>
                        <Text style={styles.totalText}>Total break time: 13:43:52</Text>
                    </View>
        
                        </View>
                    </ScrollView>
                    </View>
                   
                    <View style={styles.footer}>
                        <Text style={styles.totalText}>Total (work time + break time): 13:43:52</Text>
                        <Text style={styles.totalText}>Total number of days worked: 28</Text>
                    </View>
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
        flex: 1,
        flexDirection:"row"
    },
    dateText: {
        fontSize: 16,
        color: '#000',
        marginTop:5
    },
    datePickerContainer: {
        flexDirection:"row",
        marginBottom:10,
        justifyContent:"center",
        gap:20,
        width:"100%"
    },
    goButton: {
        // marginLeft: 10,
        backgroundColor: Colors.primary,
        height:30,
        marginTop:10,
        textAlign:"center",
        justifyContent:"center"
        // marginBottom:10
    },
    reportContainer: {
        marginTop: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    reportHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    exportText: {
        color: '#007bff',
        marginBottom: 10,
        textAlign: 'center',
        marginTop:10
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
    tablefooter:{
      flexDirection: 'column',
      backgroundColor: '#e9ecef',
      padding: 10,
      borderBottomEndRadius: 10,
      borderBottomStartRadius: 10,
      alignItems:"flex-end"
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
        alignItems: 'flex-end',
        height: 50,
        backgroundColor: Colors.borderColor,
        borderRadius: 5,
        justifyContent: "center",
        textAlign: "center",
        marginTop: 20,
    },
    totalText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical:1,
        marginRight:5
    },
    workTime: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 10,
    },

    footer:{
        alignItems: 'center',
        height: 50,
        backgroundColor: Colors.primaryLight,
        borderRadius: 5,
        justifyContent: "center",
        textAlign: "center",
        marginTop: 20,
        width:"100%"
    },  
    pickerContainer: {
      borderRadius: 10,
      borderColor: Colors.borderDarl,
      marginTop:10
    },
    tableContainerFull: {
      padding: 10,
      justifyContent: "center",
      alignItems: "center",

    },
    picker:{
      height:35,
      width:130,
      borderRadius:5,
      borderWidth:1,
      borderColor:Colors.borderColor
    }
});

export default MonthView;
