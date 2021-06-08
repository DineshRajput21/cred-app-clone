import * as React from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Colors } from '../../../../utils/Colors';
import { BlurIcon } from '../../../../components/BlurIcon';
const storyImage = 'https://i.pinimg.com/originals/48/35/b5/4835b5f9c52fd733eb26fb2c2b47bdc7.jpg';

const { height, width } = Dimensions.get('window');

export default function TopBar() {
    return (
        <View
            style={{
                width: width, backgroundColor: Colors.primaryBlack, flexDirection: 'row',
                justifyContent: 'space-evenly', flex: 0.13, paddingBottom:5,
            }}
        >
            <View style={{ flex: 0.4, paddingLeft: 15, paddingVertical: 2, justifyContent: 'center' }}>
                <TouchableOpacity style={{ alignSelf: 'flex-start', justifyContent: 'center' }}>
                    <Image style={{ height: 46, width: 46, borderRadius: 23 }} source={{ uri: 'https://cdn.dribbble.com/users/5456871/avatars/normal/open-uri20200607-27807-hqisgn?1591525735' }} />
                    <Text style={{
                        color: 'white', fontSize: 12, alignSelf: 'center',
                        paddingTop: 6
                    }}>profile</Text>
                </TouchableOpacity>
            </View>

            <View style={{
                flex: 0.6, flexDirection: 'row', paddingVertical: 2,
                justifyContent: 'space-evenly'
            }}>
                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', height: 46, 
                    width: 46, borderRadius: 23, borderWidth: 1.5, borderColor: Colors.activeRed }}>
                        <Image style={{ height: 34, width: 34, borderRadius: 17, alignSelf: 'center' }} source={{ uri: storyImage }} />
                    </View>
                    <Text style={{ color: 'white', fontSize: 12, paddingTop: 6 }}>stories</Text>
                </TouchableOpacity>
                <BlurIcon icon='bell' text='notifications' />
                <BlurIcon icon='gamepad-circle-down' text='control' />
            </View>


        </View>
    )
}