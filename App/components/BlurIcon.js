import * as React from 'react';
import { View, TouchableOpacity, Text, } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../utils/Colors';

export function BlurIcon({ icon, text }) {
    return (
        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', padding:10 }}>
            <View style={{
                height: 46, width: 46, borderRadius: 23,
                justifyContent: 'center', alignItems: 'center',
                shadowColor: Colors.greyText,
                backgroundColor: Colors.primaryBlack,
                shadowOffset: { width: -2, height: -4 },
                shadowOpacity: 0.8,
                shadowRadius: 4,
                elevation: 10,
            }}>
                <MaterialCommunityIcons name={icon} size={19} color={Colors.activeRed} />
            </View>
            <Text style={{ color: 'white', fontSize: 12, paddingTop:8 }}>{text}</Text>
        </TouchableOpacity>
    )
}