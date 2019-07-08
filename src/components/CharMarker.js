import React from 'react'
import { Image, View } from 'react-native'
import miningIcon from '../../assets/miningIcon.png';

export default props => {

        onPress = () => {
            console.warn('ALready pushed!!');
        };

        return (
            <View>
                    <Image source={miningIcon} style={{ width:50, height:50 }} />
            </View>
        )
}
