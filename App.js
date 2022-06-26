import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
//import DetailScreen from './DetailScreen';
import MenuScreen from './MenuScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DetailScreen from './DetailScreen';
import GuessNumber from './Components/GuessNumber';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      
      <Tab.Navigator screenOptions={({route}) =>({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
         if (route.name === 'Home') {
          iconName = 'home'
         } else if(route.name === 'Tasks') {
          iconName = 'skull'

         }else if(route.name === 'Juego'){
          iconName = 'play'
         }
        
        return <Ionicons name={iconName} size={25} color="red"/>

        }

      })}>
        <Tab.Screen name="Home" component={HomeScreen} options={{tabBarBadge: 3,title: 'INICIO' }} /> 
        <Tab.Screen name="Tasks" component={MenuScreen} options={{tabBarBadge: 3, title: 'JUEGOS'}} />
        <Tab.Screen name="Juego" component={DetailScreen} options={{tabBarBadge: 3, title: 'Juego'}}/>
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}



