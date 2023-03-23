import React from 'react'
import { Button, View, Text, TextInput} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <>
        <View>
            <View style={{flexDirection:'row'}}>
            <Text style={{backgroundColor:"blue"}}>
                {count}
            </Text>
            <Button title = {"raz"}onPress={() => dispatch(decrement())}></Button>  
            </View>
            <View style={{flexDirection:'row'}}>
            <Button title = {"+"}onPress={() => dispatch(increment())}></Button> 
            <Button title = {"-"}onPress={() => dispatch(decrement())}></Button>
            </View>
            <View style={{flexDirection:'row'}}>
                <TextInput style={{borderWidth:1}}></TextInput>
                <Button title = {"+"}onPress={() => dispatch(increment())}></Button> 
            <Button title = {"-"}onPress={() => dispatch(decrement())}></Button>
            </View>
        </View>
        </>
    )
}