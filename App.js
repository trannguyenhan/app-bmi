import React, {useState} from 'react';
import {View, Text, Image, Dimensions, TextInput, StyleSheet, Button, Alert} from 'react-native'

export default function App() {
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [result, setResult] = useState(0);
    const [warning, setWarning] = useState('');

    const setClean = () => {
        setAge('');
        setHeight('');
        setWeight('');
        setWarning('');
    }

    const calc = () => {
        if(height != 0){
            if(age < 18){
                setWarning('Bạn chưa đủ tuổi để đo BMI!');
            } else {
                let bmi = weight / (height * 2);
                setResult(bmi.toFixed(1));
            }
        } else {
            setResult(0);
        }
        
    }

    return (
        <View>
            {/*Logo and image slogan aplp*/}
            <View>
                <Image  source={require('./assets/bmi.png')} style={{height: 100, width: Dimensions.get('screen').width}} />
            </View>
            
            {/*Result BMI*/}
            <View style={{alignItems:'center'}}>
                <Text style={{fontSize: 45}}>{"\n"} BMI của bạn là: {result}</Text>
                <Text style={{fontSize: 10, color: 'red'}}>{warning}</Text>
            </View>

            {/*Container app*/}
            <View style={{flexDirection: 'column', alignItems: 'center', marginTop: 100}}>
                <View style={style.input}>
                    <Text>Age      : </Text>
                    <TextInput
                        style={style.inputText}
                        placeholder={0}
                        value={age}
                        onChangeText={(age) => {setAge(age); setWarning('')}}
                        keyboardType="numeric"
                        multiline="true"
                    />
                </View>
                <View style={style.input}>
                    <Text>Heigh   : </Text>
                    <TextInput
                        style={style.inputText}
                        placeholder={0}
                        value={height}
                        onChangeText={(height) => {setHeight(height); setWarning('')}}
                        keyboardType="numeric"
                        multiline="true"
                    />
                </View>
                <View style={style.input}>
                    <Text>Weight : </Text>
                    <TextInput
                        style={style.inputText}
                        placeholder={0}
                        value={weight}
                        onChangeText={(weight) => {setWeight(weight); setWarning('')}}
                        keyboardType="numeric"
                        multiline="true"
                    />
                </View>
                
            </View>
            
            {/*Button Review*/}
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 10}}>
                <Button 
                    onPress={calc}
                    title= "Calculate"
                    color= "#841584"
                    style= {style.button}
                />
                <Button
                    onPress={setClean}
                    title= "Clear"
                    color= "#841584"
                    style= {style.button}
                />
            </View>

        </View>
    );
}

const style = StyleSheet.create({
    input: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        width: '90%',
        height: 50
    },

    inputText:{
        margin: 12, 
        padding: 1, 
        textAlignVertical: 'top', 
        fontSize: 15
    },

    button: {
        height: 50,
        width: Dimensions.get('screen').width / 3,
    }
});
