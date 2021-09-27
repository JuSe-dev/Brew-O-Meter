import React, { useState, useEffect } from 'react';
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
    const [bottleAmount, setBottleAmount] = useState([]);

    const [open2, setOpen2] = useState(false);
    const [timePicker, setTimePicker] = useState(null);
    const [timeAmount, setTimeAmount] = useState([]);

    useEffect(() => {
        const bottleList = [];
        const hoursList = [];
        
        for (let i = 0; i < 25; i++) {
            bottleList.push({label: i + " bottles", value: i});
            hoursList.push({label: i + " hours", value: i});
        }
        setBottleAmount(bottleList);
        setTimeAmount(hoursList);
    }, [])

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
