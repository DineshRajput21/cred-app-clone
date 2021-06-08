import * as React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { HEIGHT } from '../../../../utils';
import { Colors } from '../../../../utils/Colors';

export function CredCardView({item: { title, amount, bank, cardNo, CTA, dueDate, icon }}){
    return(
        <View style={{
            backgroundColor: Colors.whiteText,
            height: HEIGHT / 4.3,
            marginVertical: 10,
            borderRadius: 15,
            padding: 25,
        }}>
            <Text style={{ flex: 0.5, color: 'black', fontSize: 14, fontWeight: 'bold' }}>{title}</Text>
            <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flex: 0.18, }}>
                    <View style={{ height: 40, width: 40, borderRadius: 5, borderColor: Colors.greyText, borderWidth: 0.2, justifyContent: 'center' }}>
                        <Image style={{ alignSelf: 'center', height: 26, width: 26 }} source={icon} />
                    </View>
                </View>
                <View style={{ flex: 0.52, justifyContent:'space-between', }}>
                    <Text style={{ color: Colors.blackText, fontSize: 12, lineHeight: 20, fontWeight:'bold' }}>{bank}</Text>
                    <Text style={{ color: Colors.blackText, fontSize: 11, lineHeight: 20, }}>{cardNo}</Text>
                    <Text style={{
                        color: Colors.activeRed, fontSize: 11,
                        letterSpacing: 1.8, lineHeight: 20, fontWeight: 'bold'
                    }}>{dueDate}</Text>

                </View>
                <View style={{ flex: 0.3, justifyContent:'space-between', }}>
                    <Text style={{
                        color: 'black', fontSize: 13, fontWeight: 'bold',
                        lineHeight: 20, alignSelf: 'flex-end',  fontFamily: Platform.OS !== 'ios' ? '' : null
                    }}>
                        {amount && `₹${amount}`}
                    </Text>
                    <TouchableOpacity style={{alignSelf:'flex-end', backgroundColor: Colors.blackText, borderRadius: 20, paddingVertical: 8, paddingHorizontal:15 }}>
                        <Text style={{ color: 'white', fontSize: 12, fontWeight:'bold', fontFamily: Platform.OS !== 'ios' ? '' : null }}>{CTA}</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}