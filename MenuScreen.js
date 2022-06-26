import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import Box from './Box';
import tasks from './data/task';


function MenuScreen() {
    return (
        <View style={styles.root}>
            

            <View style={styles.containerBox}>
          

                {
                    tasks.map((task, i) => (
                        <Box 
                        
                            key={i}
                            id = {task.id}
                            juego = {task.juego}    
                            title={task.title}   
                            
                                              
                        />
                    ))
                }
            </View>

        

        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'orange',
    },

    containerBox: {
        flexDirection: 'column',
    
        flexWrap: 'center'
        
    },
})

export default MenuScreen;