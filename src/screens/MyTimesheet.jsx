// import React, { useState } from 'react';
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform } from 'react-native';
// import DateTimePicker from "@react-native-community/datetimepicker";
// import moment from 'moment';
// import { Colors } from '../constant';
// import { Card, Button, Snackbar } from "react-native-paper";
// import Icons from "react-native-vector-icons/MaterialIcons";



// const TimesheetComponent = () => {
//     const [date, setDate] = useState(new Date());
//     const [showDatePicker, setShowDatePicker] = useState(false);

//     const generateReport = () => {
//         // Implement your report generation logic here
//     };

//     const onDateChange = (event, selectedDate) => {
//         const currentDate = selectedDate || date;
//         setShowDatePicker(Platform.OS === 'ios');
//         setDate(currentDate);
//     };

//     return (
//         <ScrollView contentContainerStyle={styles.container}>
//             <Text style={styles.header}>My Timesheet - Day View</Text>
//             <View style={styles.navContainer}>
//                 <TouchableOpacity style={styles.navButton}><Text style={styles.navButtonText}>Day View</Text></TouchableOpacity>
//                 <TouchableOpacity style={styles.navButton}><Text style={styles.navButtonText}>Week View</Text></TouchableOpacity>
//                 <TouchableOpacity style={styles.navButton}><Text style={styles.navButtonText}>Month View</Text></TouchableOpacity>
//                 <TouchableOpacity style={styles.navButton}><Text style={styles.navButtonText}>Date Range</Text></TouchableOpacity>
//             </View>
//             <Text style={styles.subHeader}>Please select a date and click the Go button to generate the report</Text>
//             <View style={styles.datePickerContainer}>
//                 <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.datePicker}>
//                     <Text style={styles.dateText}>{moment(date).format("DD MMM YYYY")}</Text>
//                 </TouchableOpacity>
//                 {showDatePicker && (
//                     <DateTimePicker
//                         value={date}
//                         mode="date"
//                         display="default"
//                         onChange={onDateChange}
//                         onCancel={() => setShowDatePicker(false)}
//                     />
//                 )}
//         <Icons name="calendar-month" size={35} style={{ marginLeft: 5 }} />
//         <Button mode="contained" style={styles.goButton} onPress={generateReport} >
//           Search
//         </Button>
//             </View>
//             <View style={styles.reportContainer}>
//                 <Text style={styles.reportHeader}>Timesheet - Day View Report for {moment(date).format("DD MMM YYYY")}</Text>
//                 <TouchableOpacity><Text style={styles.exportText}>Export to Excel</Text></TouchableOpacity>
               

//                 <View style={{padding:10}}>
//                 <View>
//                 <Text style={styles.workTime}> Work Time</Text>
//                 </View>
//                 <ScrollView horizontal >
//                     <View style={styles.tableContainer}>
//                         <View style={styles.tableHeader}>
//                             <Text style={styles.tableHeaderText}>Client</Text>
//                             <Text style={styles.tableHeaderText}>Project</Text>
//                             <Text style={styles.tableHeaderText}>Task</Text>
//                             <Text style={styles.tableHeaderText}>Notes</Text>
//                             <Text style={styles.tableHeaderText}>Count</Text>
//                             <Text style={styles.tableHeaderText}>Break Time (hh:mm:ss)</Text>
//                         </View>
//                         <View style={styles.tableRow}>
//                             <Text style={styles.tableCell}>Client Name</Text>
//                             <Text style={styles.tableCell}>Project Name</Text>
//                             <Text style={styles.tableCell}>Task Description</Text>
//                             <Text style={styles.tableCell}>Notes here</Text>
//                             <Text style={styles.tableCell}>5</Text>
//                             <Text style={styles.tableCell}>00:30:00</Text>
//                         </View>
//                         <View style={styles.tableRow}>
//                             <Text style={styles.tableCell}>Client Name</Text>
//                             <Text style={styles.tableCell}>Project Name</Text>
//                             <Text style={styles.tableCell}>Task Description</Text>
//                             <Text style={styles.tableCell}>Notes here</Text>
//                             <Text style={styles.tableCell}>5</Text>
//                             <Text style={styles.tableCell}>00:30:00</Text>
//                         </View>

//                         <View style={styles.tableRow}>
//                             <Text style={styles.tableCell}>Client Name</Text>
//                             <Text style={styles.tableCell}>Project Name</Text>
//                             <Text style={styles.tableCell}>Task Description</Text>
//                             <Text style={styles.tableCell}>Notes here</Text>
//                             <Text style={styles.tableCell}>5</Text>
//                             <Text style={styles.tableCell}>00:30:00</Text>
//                         </View>

//                         <View style={styles.tableRow}>
//                             <Text style={styles.tableCell}>Client Name</Text>
//                             <Text style={styles.tableCell}>Project Name</Text>
//                             <Text style={styles.tableCell}>Task Description</Text>
//                             <Text style={styles.tableCell}>Notes here</Text>
//                             <Text style={styles.tableCell}>5</Text>
//                             <Text style={styles.tableCell}>00:30:00</Text>
//                         </View>

//                         <View style={styles.tableRow}>
//                             <Text style={styles.tableCell}>Client Name</Text>
//                             <Text style={styles.tableCell}>Project Name</Text>
//                             <Text style={styles.tableCell}>Task Description</Text>
//                             <Text style={styles.tableCell}>Notes here</Text>
//                             <Text style={styles.tableCell}>5</Text>
//                             <Text style={styles.tableCell}>00:30:00</Text>
//                         </View>

//                         <View style={styles.tableRow}>
//                             <Text style={styles.tableCell}>-</Text>
//                             <Text style={styles.tableCell}>-</Text>
//                             <Text style={styles.tableCell}>-</Text>
//                             <Text style={styles.tableCell}>-</Text>
//                             <Text style={styles.tableCell}>5</Text>
//                             <Text style={styles.tableCell}>00:30:00</Text>
//                         </View>

//                         <View style={styles.tableRow}>
//                             <Text style={styles.tableCell}>Client Name</Text>
//                             <Text style={styles.tableCell}>Project Name</Text>
//                             <Text style={styles.tableCell}>Task Description</Text>
//                             <Text style={styles.tableCell}>Notes here</Text>
//                             <Text style={styles.tableCell}>5</Text>
//                             <Text style={styles.tableCell}>00:30:00</Text>
//                         </View>

//                         <View style={styles.tableRow}>
//                             <Text style={styles.tableCell}>Client Name</Text>
//                             <Text style={styles.tableCell}>Project Name</Text>
//                             <Text style={styles.tableCell}>Task Description</Text>
//                             <Text style={styles.tableCell}>Notes here</Text>
//                             <Text style={styles.tableCell}>5</Text>
//                             <Text style={styles.tableCell}>00:30:00</Text>
//                         </View>

//                         <View style={styles.tableRow}>
//                             <Text style={styles.tableCell}>Client Name</Text>
//                             <Text style={styles.tableCell}>Project Name</Text>
//                             <Text style={styles.tableCell}>Task Description</Text>
//                             <Text style={styles.tableCell}>Notes here</Text>
//                             <Text style={styles.tableCell}>5</Text>
//                             <Text style={styles.tableCell}>00:30:00</Text>
//                         </View>

//                         <View style={styles.tableRow}>
//                             <Text style={styles.tableCell}>Client Name</Text>
//                             <Text style={styles.tableCell}>Project Name</Text>
//                             <Text style={styles.tableCell}>Task Description</Text>
//                             <Text style={styles.tableCell}>Notes here</Text>
//                             <Text style={styles.tableCell}>5</Text>
//                             <Text style={styles.tableCell}>00:30:00</Text>
//                         </View>

//                         <View style={styles.tableRow}>
//                             <Text style={styles.tableCell}>Client Name</Text>
//                             <Text style={styles.tableCell}>Project Name</Text>
//                             <Text style={styles.tableCell}>Task Description</Text>
//                             <Text style={styles.tableCell}>Notes here</Text>
//                             <Text style={styles.tableCell}>5</Text>
//                             <Text style={styles.tableCell}>00:30:00</Text>
//                         </View>

//                         <View style={styles.tableRow}>
//                             <Text style={styles.tableCell}>Client Name</Text>
//                             <Text style={styles.tableCell}>Project Name</Text>
//                             <Text style={styles.tableCell}>Task Description</Text>
//                             <Text style={styles.tableCell}>Notes here</Text>
//                             <Text style={styles.tableCell}>5</Text>
//                             <Text style={styles.tableCell}>00:30:00</Text>
//                         </View>
//                     </View>
                   
//                 </ScrollView>
//                 <View style={styles.totalContainer}>
//                     <Text style={styles.totalText}>Total (work time + break time): 13:43:52</Text>
//                 </View>
//                 </View>
              
//             </View>
//         </ScrollView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         padding: 20,
//         backgroundColor: '#f5f5f5',
//         flexGrow: 1,
//     },
//     header: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 20,
//         textAlign: 'center',
//     },
//     navContainer: {
//         width: "100%",
//         flexDirection: 'row',
//         marginBottom: 20,
//         justifyContent: "space-around",
//         gap: 15
//     },
//     navButton: {
//         backgroundColor: '#007bff',
//         padding: 10,
//         borderRadius: 5,
//     },
//     navButtonText: {
//         color: '#fff',
//     },
//     subHeader: {
//         color: 'gray',
//         marginBottom: 20,
//         textAlign: 'center',
//     },
//     datePicker: {
//         borderColor: "#ccc",
//         borderWidth: 1,
//         borderRadius: 5,
//         padding: 10,
//         flex: 1
//     },
//     dateText: {
//         fontSize: 16,
//         color: '#000',
//     },
//     reportContainer: {
//         marginTop: 20,
//         backgroundColor: '#fff',
//         // padding: 20,
//         borderRadius: 10,
//     },
//     reportHeader: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginBottom: 20,
//         textAlign: 'center',
//         backgroundColor:Colors.primary,
//         color:Colors.white,
//         borderStartEndRadius:10
//     },
//     exportText: {
//         color: '#007bff',
//         marginBottom: 20,
//         textAlign: 'center',
//     },
//     tableContainer: {
//         marginBottom: 20,
//     },
//     tableHeader: {
//         flexDirection: 'row',
//         backgroundColor: '#e9ecef',
//         padding: 10,
//         borderTopLeftRadius: 10,
//         borderTopRightRadius: 10,
//     },
//     tableHeaderText: {
//         flex: 1,
//         fontWeight: 'bold',
//         width: 150,
//         textAlign: 'center',
//     },
//     tableRow: {
//         flexDirection: 'row',
//         padding: 10,
//         borderBottomWidth: 1,
//         borderBottomColor: '#dee2e6',
//     },
//     tableCell: {
//         flex: 1,
//         width: 150,
//         textAlign: 'center',
//     },
//     totalContainer: {
//         alignItems: 'flex-end',
//         height:40,
//         backgroundColor:Colors.primaryLight,
//         borderRadius:5,
//         justifyContent:"center",
//         textAlign:"center"
//     },
//     totalText: {
//         fontSize: 16,
//         fontWeight: 'bold',
//     },
//     datePickerContainer: {
//         flexDirection: "row",
//         alignItems: "center",
//         marginBottom: 20,
//     },
//     goButton: {
//         marginLeft: 10,
//         backgroundColor: Colors.primary,
//       },
//       workTime:{
//         fontSize: 15,
//         fontWeight: 'bold',
//         textAlign: 'left',
//         marginBottom:10
//       }
// });

// export default TimesheetComponent;
