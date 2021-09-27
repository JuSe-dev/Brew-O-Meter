import { Platform, StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#4F4537',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0
        },
        formWrap: {
          paddingLeft: 10,
          paddingRight: 10
        },
        header: {
          fontSize: 30,
          fontWeight: "bold",
          color: "#F3D29C"
        },
        footer: {
          color: "#F3D29C"
        },
        field: {
          marginTop: 5,
          marginBottom: 5
        },
        labels: {
          marginTop: 5,
          marginBottom: 5,
          color: "#F3D29C",
          fontWeight: "bold",
          fontSize: 15       
        },
        input: {
          color: "#F3D29C",
          borderColor: "#F3D29C",
          borderWidth: 1,
          borderRadius: 5,
          height: 30,
          paddingRight: 10,
          paddingLeft: 10
        },
        dropDown: {
          backgroundColor: "#4F4537",
          borderColor: "#F3D29C",
        },
        output: {
          color: "#F3D29C",
          fontWeight: "bold",
        },
        btn: {
          borderWidth: 1,
          borderColor: "#F3D29C",        
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 5,
          padding: 5,
        },
        btnText: {
          color:"#F3D29C",
        }
      });