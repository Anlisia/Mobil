import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, Button, Alter, Alert} from 'react-native';

export const String = ({onSubmit}) => {
    var [value1, setValue1] = useState(value1);
    var [value2, setValue2] = useState(value2);
    var x

    const pressHandler1 = () => {
        x = value1 + value2
        Alert.alert("Результат вычисленией", + x);
        }
    const pressHandler2 = () => {
        x = value1 - value2
        Alert.alert("Результат вычисленией", + x);
        }
    const pressHandler3 = () => {
        x = value1 * value2
        Alert.alert("Результат вычисленией", + x);
        }
    const pressHandler4 = () => {
        x = value1 / value2
        Alert.alert("Результат вычисленией", + x);
        }

    return (
        <View>
            <View>
                <TextInput style = {styles.input} onChangeText = {setValue1}                                      
                    value1 = {value1}></TextInput>
            </View>
            <View>
                <TextInput style = {styles.input} onChangeText = {setValue2}                  
                    value2 = {value2}></TextInput>
            </View>
            <View>
                <Button color = '#8ccd47' title = "Сложить" onPress = {pressHandler1} />
            </View>
            <View>
                <Button color = '#8ccd47' title = "Вычесть" onPress = {pressHandler2} />
            </View>
            <View>
                <Button color = '#8ccd47' title = "Умножить" onPress = {pressHandler3} />
            </View>
            <View>
                <Button color = '#8ccd47' title = "Разделить" onPress = {pressHandler4} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    input: {
        height: '85%',
        paddingVertical: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#8ccd47'
    }
})