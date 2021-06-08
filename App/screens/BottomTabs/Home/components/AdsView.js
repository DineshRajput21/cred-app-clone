import * as React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { HEIGHT } from '../../../../utils';
import { Colors } from '../../../../utils/Colors';

export function AdsView({ item: { title, description, CTA, image, bgColor } }) {
    return (
        <View style={{
            backgroundColor: bgColor,
            marginVertical: 10,
            borderRadius: 15,
            padding: 25,
            flexDirection: 'row',
        }}>
            <View style={{ flex: 0.6, justifyContent: 'space-between' }}>
                <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold' }}>{title}</Text>
                <Text style={{ color: Colors.blackText, fontSize: 12, lineHeight: 18, marginTop: 5 }}>{description}</Text>
                <TouchableOpacity style={{ alignSelf: 'center', backgroundColor: Colors.blackText, borderRadius: 20, paddingVertical: 10, paddingHorizontal: 15, marginTop: 15 }}>
                    <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold', fontFamily: Platform.OS !== 'ios' ? '' : null }}>{CTA}</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flex: 0.4, }}>
                <Image style={{ alignSelf: 'center', height: 100, width: 100, }} source={{ uri: image }} />
            </View>
        </View>
    )
}