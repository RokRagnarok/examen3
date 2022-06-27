import React from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';


function Box({ id, title, image}) {

    const navigation = useNavigation();
    
    return (
        <View style={styles.root}>
            
            <Image
           style={{
           width: 51,
           height: 51,
           flexDirection: 'center',
            resizeMode: 'contain'
             }}
           source={{
         uri: 'https://images-na.ssl-images-amazon.com/images/I/51848OMGGeL.png'
        
               
        }}
        
/>


            <Text>Juego {id}</Text>
            <Text> {title}</Text>
        
            
            <Button
                color="#455a64"
                title="Jugar"
                onPress={
                    () => navigation.navigate('Juego', {
                        id: id,
                        title: title,
                        
                    })
                }
            />
  
        </View>
    
    );
}

const styles = StyleSheet.create({
    root: {
        width: 130,
        height: 130,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'red',
        borderWidth: 8,
        borderRadius: 15,
        margin: 15,
    }
})

export default Box;