import * as React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Home';
import CardsScreen from './Cards';
import MoneyScreen from './Money';
import { Colors } from '../../utils/Colors';

const isIOS = Platform.OS === 'ios';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.activeRed,
        inactiveTintColor: Colors.inActiveRed,
        showLabel: false,
        style: {
          backgroundColor: Colors.primaryBlack,
          height: isIOS ? 80 : 60,
          paddingHorizontal: 10,
        }
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size, }) => {
          let iconName;
          switch (route.name) {
            case 'home':
              iconName = 'home';
              break;
            case 'cards':
              iconName = 'credit-card';
              break;
            case 'money':
              iconName = 'cash';
              break;
            case 'club':
              iconName = 'medical-bag';
              break;

            default:
              break;
          }
          return (<View style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 10 }}>
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
            <Text style={{ color: focused ? Colors.activeRed : Colors.inActiveRed, fontSize: 10, fontWeight:'bold', fontFamily: isIOS ? null:''  }}> {route.name}</Text>
          </View>
          );
        },
      })}
    >
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="cards" component={CardsScreen} />
      <Tab.Screen name="money" component={MoneyScreen} />
      <Tab.Screen name="club" component={MoneyScreen} />
    </Tab.Navigator>
  );
}
