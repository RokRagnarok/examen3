import React from 'react';
import GuessNumber from './Components/GuessNumber';
import {StyleSheet, View, Text, Image} from 'react-native';
import Header from './Components/Header'
import Card from './Components/Card';
import Score from './Components/Score';
function DetailScreen(route, navigation) {
    const {id, title, juego } = route;
    
      
    return(
<View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue'}}>
<Image
           style={{
           width: 80,
           height: 80,
            resizeMode: 'contain'
             }}
           source={{
         uri: 'https://images-na.ssl-images-amazon.com/images/I/51848OMGGeL.png'
    
               
        }}
  


  
/>
<Text>{id}</Text>
<Text>{title}</Text>
<Text><h1><font color='red'>Adivina El Numero</font></h1></Text>
<GuessNumber/>
<Header/>
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