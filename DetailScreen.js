import React from 'react';
import GuessNumber from './Components/GuessNumber';
import {StyleSheet, Button, View, Text, Image} from 'react-native';


function DetailScreen(route) {
    const {id, title } = route;
    return(
<View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green'}}>
<Text>{id}</Text>
<Text>{title}</Text>
<Text>Adivina El Numero</Text>
<Text>{<GuessNumber/>}</Text>




</View>
    );

}
const styles = StyleSheet.create({
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center', 
        backgroundColor: 'yellow',

        margin: 20,
        padding: 5,

        width: 300,
        height: 100,
    }

})
export default DetailScreen;