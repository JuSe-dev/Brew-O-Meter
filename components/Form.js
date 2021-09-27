import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from '../style/styles';

export default function Form() {

    const [weight, setWeight] = useState('');
    const [bottles, setBottles] = useState(0);
    const [hours, setHours] = useState(0);
    const [gender, setGender] = useState('male');
    const [alcohol, setAlcohol] = useState('-');

    const genders = [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' }
    ];

    const [open1, setOpen1] = useState(false);
    const [bottlePicker, setBottlePicker] = useState(null);
    const [bottleAmount, setBottleAmount] = useState(
        [
            {label: "1 bottles", value: 1}, {label: "2 bottles", value: 2}, {label: "3 bottles", value: 3},
            {label: "4 bottles", value: 4}, {label: "5 bottles", value: 5}, {label: "6 bottles", value: 6},
            {label: "7 bottles", value: 7}, {label: "8 bottles", value: 8}, {label: "9 bottles", value: 9},
            {label: "10 bottles", value: 10}, {label: "11 bottles", value: 11}, {label: "12 bottles", value: 12},
            {label: "13 bottles", value: 13}, {label: "14 bottles", value: 14}, {label: "15 bottles", value: 15},
            {label: "16 bottles", value: 16}, {label: "17 bottles", value: 17}, {label: "18 bottles", value: 18},
            {label: "19 bottles", value: 19}, {label: "20 bottles", value: 20}, {label: "21 bottles", value: 21},
            {label: "22 bottles", value: 22}, {label: "23 bottles", value: 23}, {label: "24 bottles", value: 24},
            {label: "25 bottles", value: 25}
        ]
    );

    const [open2, setOpen2] = useState(false);
    const [timePicker, setTimePicker] = useState(null);
    const [timeAmount, setTimeAmount] = useState(
        [
            {label: "1 hours", value: 1}, {label: "2 hours", value: 2}, {label: "3 hours", value: 3},
            {label: "4 hours", value: 4}, {label: "5 hours", value: 5}, {label: "6 hours", value: 6},
            {label: "7 hours", value: 7}, {label: "8 hours", value: 8}, {label: "9 hours", value: 9},
            {label: "10 hours", value: 10}, {label: "11 hours", value: 11}, {label: "12 hours", value: 12},
            {label: "13 hours", value: 13}, {label: "14 hours", value: 14}, {label: "15 hours", value: 15},
            {label: "16 hours", value: 16}, {label: "17 hours", value: 17}, {label: "18 hours", value: 18},
            {label: "19 hours", value: 19}, {label: "20 hours", value: 20}, {label: "21 hours", value: 21},
            {label: "22 hours", value: 22}, {label: "23 hours", value: 23}, {label: "24 hours", value: 24}
        ]
    );

    const showAlert = () => {
        Alert.alert(
            "Hello user...",
            "Remember to add your weight.",
            [
                {
                    text: "Ok",
                    onPress: () => console.log("ok")
                }
            ]
        );
    }

    const calculate = () => {
        if (weight.length !== 0) {
            let result = 0;
            let litres = bottles * 0.33;
            let grams = litres * 8 * 4.5;
            let burning = weight / 10;
            let grams_left = grams - burning * hours;
    
            if (gender === 'male') {
                result = grams_left / (weight * 0.7);
            }
            else {
                result = grams_left / (weight * 0.6);
            }
    
            result < 0 ? result = 0 : result;
    
            setAlcohol(result.toFixed(2));
        }
        else {
            showAlert();
        }
    }

    return (
        <View style={styles.formWrap}>
            <View style={styles.field}>
                <Text style={styles.labels}>Weight</Text>
                <TextInput
                    style={styles.input}
                    placeholderTextColor={"#F3D29C"}
                    keyboardType={'default'}
                    value={weight}
                    onChangeText={text => setWeight(text)}
                    placeholder="Set weight (kg)"/>
            </View>
            <View style={styles.field}>
                <Text style={styles.labels}>Gender</Text>
                <RadioForm
                    buttonColor={"#F3D29C"}
                    selectedButtonColor={"#F3D29C"}
                    labelStyle={{color: "#F3D29C"}}
                    buttonSize={15}
                    radio_props={genders}
                    initial={0}
                    onPress={(value) => { setGender(value) }}
                />
            </View>
            <View style={styles.field}>
                <Text style={styles.labels}>Bottles</Text>
            </View>
            <DropDownPicker
                style={styles.dropDown}
                textStyle={{fontSize: 15, color: "#F3D29C"}}
                labelStyle={{fontWeight: "bold"}}
                dropDownDirection="TOP"
                listItemContainerStyle={{backgroundColor: "#4F4537"}}
                arrowIconStyle={{backgroundColor: "#F3D29C", borderRadius: 5}}
                tickIconStyle={{backgroundColor: "#F3D29C", borderRadius: 5}}
                open={open1}
                value={bottlePicker}
                items={bottleAmount}
                setOpen={setOpen1}
                setValue={setBottlePicker}
                setItems={setBottleAmount}
                onChangeValue={(value) => setBottles(value)}
            />
            <View style={styles.field}>
                <Text style={styles.labels}>Time</Text>
            </View>
            <DropDownPicker
                style={styles.dropDown}
                textStyle={{fontSize: 15, color: "#F3D29C"}}
                labelStyle={{fontWeight: "bold"}}
                dropDownDirection="TOP"
                listItemContainerStyle={{backgroundColor: "#4F4537"}}
                arrowIconStyle={{backgroundColor: "#F3D29C", borderRadius: 5}}
                tickIconStyle={{backgroundColor: "#F3D29C", borderRadius: 5}}
                open={open2}
                value={timePicker}
                items={timeAmount}
                setOpen={setOpen2}
                setValue={setTimePicker}
                setItems={setTimeAmount}
                onChangeValue={(value) => setHours(value)}
            />
            <View style={styles.field}>
                <Text style={styles.labels}>Promilles</Text>
                <Text style={styles.output}>{alcohol}</Text>
            </View>
            <View style={styles.field}>
                <Pressable style={styles.btn} onPress={calculate}>
                    <Text style={styles.btnText} >Calculate</Text>
                </Pressable>                
            </View>

        </View>
    );
}
