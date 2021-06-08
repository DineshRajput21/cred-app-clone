import * as React from 'react';
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { HEIGHT } from '../../../../utils';
import { Colors } from '../../../../utils/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Images } from '../../../../assets';
import { CredCardView } from './CredCardView';
import { AdsView } from './AdsView';

export default function RecoList() {
    const dataArray = [{
        title: 'clear your upcoming bills to earn coins',
        bank: 'SBI',
        cardNo: 'XXXX 3926',
        dueDate: 'DUE IN 2 DAYS',
        CTA: 'Pay now',
        amount: '26,943',
        icon: Images.sbi,
        adsView: false,
    },
    {
        title: 'activate your card to make your first payment and earn coins',
        bank: 'HDFC',
        cardNo: 'XXXX XXXX',
        dueDate: null,
        CTA: 'Activate',
        amount: null,
        icon: Images.hdfc,
        adsView: false,
    },
    {
        title: 'CRED store is now open for access',
        description: 'browse through our selection of curated products for you ',
        CTA: 'Explore store',
        image: 'https://images.vexels.com/media/users/3/223502/isolated/preview/24d36d46300ff130f57a4802143e0523-woman-and-gift-box-character-by-vexels.png',
        adsView: true,
        bgColor: Colors.purple,
    },
    {
        title: 'your opinion matters',
        description: 'tell us about your CRED experience and we promise to make it better',
        CTA: 'Tell us now',
        image: 'https://media.istockphoto.com/vectors/teenage-girl-writing-diary-or-journal-vector-id1208399950?b=1&k=6&m=1208399950&s=612x612&w=0&h=6wfyqhobuzsj4S1NOQAbgxOMecE6SL89Hcqf4P8SuLg=',
        adsView: true,
        bgColor: 'white',
    }];
    const headerComponent = () => {
        return (
            <View
                style={{
                    flex: 0.1,
                    backgroundColor: Colors.secondaryBlack,
                    marginBottom: 20,
                    paddingTop:30,
                }}>
                <Text style={{ color: Colors.whiteText, fontSize: 22, fontWeight: 'bold' }}>hello, Dinesh</Text>
                <Text style={{ color: Colors.greyText, fontSize: 12, lineHeight: 20, }}>here are today's</Text>
                <Text style={{ color: Colors.greyText, fontSize: 12 }}>recommended actions for you</Text>
            </View>
        )
    }
    const renderItemView = ({ item }) => {
       return item.adsView ?<AdsView item={item} /> : <CredCardView item={item} /> 
    }
    return (
        <View style={{
            flex: 0.87,
            paddingHorizontal: 20,
            backgroundColor: Colors.secondaryBlack
        }}>
            <FlatList
                data={dataArray}
                renderItem={renderItemView}
                ListHeaderComponent={headerComponent}
            />
        </View>

    )
}