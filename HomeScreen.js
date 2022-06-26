import React from 'react';
import {Button, View, Text, Image} from 'react-native';
import styles from './styles';

function HomeScreen({navigation}) {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black'}}>

        <View style={styles.container}>
            <Text style={styles.text}><h1><font color='red'>Pagina de VideoJuegos</font></h1></Text>
            <Image
          style={{
            width: 120,
            height:120 ,
            resizeMode: 'contain'
          }}
          source={{
        
            uri: 'https://media.istockphoto.com/vectors/rock-paper-scissors-body-parts-icon-set-vector-id1269211670'
          }}
            />
             <Image
          style={{
            width: 120,
            height: 120,
            resizeMode: 'contain'
          }}
          source={{
        
            uri: 'https://images-na.ssl-images-amazon.com/images/I/51848OMGGeL.png'
          }}
            />
            <Image
          style={{
            width: 120,
            height: 120,
            resizeMode: 'contain'
          }}
          source={{
        
            uri: 'https://img.freepik.com/vector-gratis/signo-interrogacion-rojo-grande_122818-781.jpg?w=2000'
          }}
            />
            <Button 
              color='#455a64'
            title="Lista de juegos"
                onPress={() => navigation.navigate('Tasks', {
                    id: 1, 
                    description: 'Aquí va la descripción',
                } )}
            />
            </View>
        </View>

    );
}

export default HomeScreen;