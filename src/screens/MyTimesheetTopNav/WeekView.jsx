// import React, { useState } from 'react';
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform } from 'react-native';
// import DateTimePicker from "@react-native-community/datetimepicker";
// import moment from 'moment';
// import { Colors } from '../../constant';
// import { Button } from "react-native-paper";
// import Icons from "react-native-vector-icons/MaterialIcons";

// const WeekView = () => {
//     const [date, setDate] = useState(new Date());
//     const [showDatePicker, setShowDatePicker] = useState(false);
  
//     const generateReport = () => {
//       // Implement your report generation logic here
//     };
  
//     const onDateChange = (event, selectedDate) => {
//       const currentDate = selectedDate || date;
//       setShowDatePicker(Platform.OS === "ios");
//       setDate(currentDate);
//     };

//     return (
//         <ScrollView contentContainerStyle={styles.container}>
//             <Text style={styles.subHeader}>Please select a date and click the Search button to generate the report</Text>
//             <View style={styles.datePickerContainer}>

                
//         <TouchableOpacity
//           onPress={() => setShowDatePicker(true)}
//           style={styles.datePicker}
//         >
//           <Text style={styles.dateText}>
//             {moment(date).format("DD MMM YYYY")}
//           </Text>
//         </TouchableOpacity>
//         {showDatePicker && (
//           <DateTimePicker
//             value={date}
//             mode="date"
//             display="default"
//             onChange={onDateChange}
//             onCancel={() => setShowDatePicker(false)}
//           />
//         )}
//         <Text>
//             To
//         </Text>
//                 <Icons name="calendar-month" size={35} style={{ marginLeft: 5 }} />


// <TouchableOpacity
//           onPress={() => setShowDatePicker(true)}
//           style={styles.datePicker}
//         >
//           <Text style={styles.dateText}>
//             {moment(date).format("DD MMM YYYY")}
//           </Text>
//         </TouchableOpacity>
//         {showDatePicker && (
//           <DateTimePicker
//             value={date}
//             mode="date"
//             display="default"
//             onChange={onDateChange}
//             onCancel={() => setShowDatePicker(false)}
//           />
//         )}
        
//       </View>
//       <Button
//           mode="contained"
//           style={styles.goButton}
//           onPress={generateReport}
//         >
//           Search
//         </Button>
//             <View style={styles.reportContainer}>
//                 <View style={{ backgroundColor: Colors.primaryLight, borderTopEndRadius: 10, borderTopStartRadius: 10, justifyContent: "center", paddingTop: 10,paddingHorizontal:10 }}>
//                     <Text style={styles.reportHeader}>Weekly Report (from {moment(date).format("DD MMM YYYY")} to {moment(date).add(6, 'days').format("DD MMM YYYY")})</Text>
//                 </View>
//                 <TouchableOpacity><Text style={styles.exportText}>Export to Excel</Text></TouchableOpacity>
//                 <View style={{ padding: 10 }}>
//                     <View>
//                         <Text style={styles.workTime}> Work Time</Text>
//                     </View>
//                     <ScrollView horizontal >
//                         <View style={styles.tableContainer}>
//                             <View style={styles.tableHeader}>
//                                 <Text style={styles.tableHeaderText}>Client</Text>
//                                 <Text style={styles.tableHeaderText}>Project</Text>
//                                 <Text style={styles.tableHeaderText}>Task</Text>
//                                 {Array.from({ length: 7 }).map((_, index) => (
//                                     <Text key={index} style={styles.tableHeaderText}>{moment(date).add(index, 'days').format("DD MMM")}</Text>
//                                 ))}
//                                 <Text style={styles.tableHeaderText}>Duration (hh:mm:ss)</Text>
//                             </View>
//                             <View style={styles.tableRow}>
//                                 <Text style={styles.tableCell}>Client Name</Text>
//                                 <Text style={styles.tableCell}>Project Name</Text>
//                                 <Text style={styles.tableCell}>Task Description</Text>
                             
//                                     <Text  style={styles.tableCell}>00:30:00</Text>
//                                     <Text  style={styles.tableCell}>00:30:00</Text>
//                                     <Text  style={styles.tableCell}>00:30:00</Text>
//                                     <Text  style={styles.tableCell}>00:30:00</Text>
//                                     <Text  style={styles.tableCell}>00:30:00</Text>
//                                     <Text  style={styles.tableCell}>00:30:00</Text>
//                                     <Text  style={styles.tableCell}>00:30:00</Text>

//                                 <Text style={styles.tableCell}>20:30:00</Text>
//                             </View>

//                              <View style={styles.tableRow}>
//                                 <Text style={styles.tableCell}>Client Name</Text>
//                                 <Text style={styles.tableCell}>Project Name</Text>
//                                 <Text style={styles.tableCell}>Task Description</Text>
                             
//                                     <Text  style={styles.tableCell}>00:30:00</Text>
//                                     <Text  style={styles.tableCell}>00:30:00</Text>
//                                     <Text  style={styles.tableCell}>00:30:00</Text>
//                                     <Text  style={styles.tableCell}>00:30:00</Text>
//                                     <Text  style={styles.tableCell}>00:30:00</Text>
//                                     <Text  style={styles.tableCell}>00:30:00</Text>
//                                     <Text  style={styles.tableCell}>00:30:00</Text>

//                                 <Text style={styles.tableCell}>20:30:00</Text>
//                             </View>
//                         </View>
//                     </ScrollView>
//                     <View style={styles.totalContainer}>
//                         <Text style={styles.totalText}>Total work time: 13:43:52</Text>
//                     </View>
//                 </View>
//                 <View style={{ padding: 10 }}>
//                     <View>
//                         <Text style={styles.workTime}> Break Time</Text>
//                     </View>
//                     <ScrollView horizontal >
//                         <View style={styles.tableContainer}>
//                             <View style={styles.tableHeader}>
//                                 <Text style={styles.tableHeaderText}>Client</Text>
//                                 <Text style={styles.tableHeaderText}>Project</Text>
//                                 <Text style={styles.tableHeaderText}>Task</Text>
//                                 {Array.from({ length: 7 }).map((_, index) => (
//                                     <Text key={index} style={styles.tableHeaderText}>{moment(date).add(index, 'days').format("DD MMM")}</Text>
//                                 ))}
//                                 <Text style={styles.tableHeaderText}>Duration (hh:mm:ss)</Text>
//                             </View>
//                             <View style={styles.tableRow}>
//                                 <Text style={styles.tableCell}>Client Name</Text>
//                                 <Text style={styles.tableCell}>Project Name</Text>
//                                 <Text style={styles.tableCell}>Task Description</Text>
//                                 {Array.from({ length: 7 }).map((_, index) => (
//                                     <Text key={index} style={styles.tableCell}>00:30:00</Text>
//                                 ))}
//                                 <Text style={styles.tableCell}>20:30:00</Text>
//                             </View>
//                         </View>
//                     </ScrollView>
//                     <View style={styles.totalContainer}>
//                         <Text style={styles.totalText}>Total break time: 13:43:52</Text>
//                     </View>
//                     <View style={styles.footer}>
//                         <Text style={styles.totalText}>Total (work time + break time): 13:43:52</Text>
//                     </View>
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
//         flex: 1,
//         flexDirection:"row"
//     },
//     dateText: {
//         fontSize: 16,
//         color: '#000',
//         marginTop:5
//     },
//     datePickerContainer: {
//         flexDirection: "row",
//         alignItems: "center",
//         marginBottom: 20,
//     },
//     goButton: {
//         marginLeft: 10,
//         backgroundColor: Colors.primary,
//     },
//     reportContainer: {
//         marginTop: 10,
//         backgroundColor: '#fff',
//         borderRadius: 10,
//     },
//     reportHeader: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginBottom: 10,
//         textAlign: 'center',
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
//         height: 40,
//         backgroundColor: Colors.borderColor,
//         borderRadius: 5,
//         justifyContent: "center",
//         textAlign: "center",
//         marginTop: 20,
//     },
//     totalText: {
//         fontSize: 16,
//         fontWeight: 'bold',
//     },
//     workTime: {
//         fontSize: 15,
//         fontWeight: 'bold',
//         textAlign: 'left',
//         marginBottom: 10,
//     },

//     footer:{
//         alignItems: 'flex-end',
//         height: 40,
//         backgroundColor: Colors.primaryLight,
//         borderRadius: 5,
//         justifyContent: "center",
//         textAlign: "center",
//         marginTop: 20,
//     }
// });

// export default WeekView;
