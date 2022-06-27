import React, {useState} from 'react';
import {StyleSheet,View,Button,Text,TextInput} from 'react-native';
import List from './List';

function mapItems(items){
    return items.map((value, i) =>({key:i.toString(),value}));
}

function generateRandomNumber(max, min = 1){
    return Math.floor(Math.random()*(max - min) + min);
}

function calculateText(number,random){
    const soClose = 5;
    const diff = Math.abs(random - number);

    if(diff < soClose){
        
        if(number < random){
        return "Solo un poco mas y aciertas";
        }else{
        return "Te pasaste un poco pero estas cerca";
        }
    }else{
        if(number < random){
            return "El numero es bajo";
        }else{
            return "El numero es alto";
        }
    }
}

const random = generateRandomNumber(100);



function GuessNumber(props){
    const [number,setNumber] = useState('');
    const [message,setMessage] = useState('');
    const [guessList,setGuessList] = useState([]);
    const [win,setWin] = useState(false);
    const [count, setCount] = useState(0);

    const handleOnChange = (newNumber) =>{
        setNumber(newNumber);
    }
    
    const handleOnPress = () => {
        const num = parseInt(number);
        const numRand = parseInt(random);
        const text =  calculateText(num,numRand);

        if(num === numRand){
            setWin(true);
        }

        setNumber("");
        setMessage(text);
        setGuessList([
            num,
            ...guessList
        ]);

        setCount(count + 1);

    }


    return(
        <View style={styles.game}>
            
            <TextInput
                style={styles.input}
                autoFocus
                placeholder="PON UN NUMERO"
                onChangeText={handleOnChange}
                defaultValue = {number}
            />

            <Button
               color = "green"
               marginBottom = "10px"
                title="Prueba tu suerte"
                onPress={handleOnPress}
            />

            {
                win?
                <Text>
                    Adivinaste en  {count} intentos.
                </Text>
                :
                <Text>
                    {message}
                </Text>
            }

            <List data ={mapItems(guessList)}/>

        </View>
    );
}

const styles = StyleSheet.create({
    game :{
        flexDirection: 'column',
        alignItems:"center",
        justifyContent:'center',
        width: 600,
    },
    input:{
        width:500,
        textAlign: 'center',
        marginBottom:15,
        color: 'red'
    }
});

export default GuessNumber;