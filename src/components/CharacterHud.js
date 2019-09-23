import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import miningIcon from '../../assets/miningIcon.png';

export class UserHud extends Component {
    render() {
        return (
            <View>
                <View>
                    <Image source={miningIcon} style={{ width:150, height:80 }} />
                </View>
                <View>
                    <Text>Character Name</Text>
                    <Text>Character Level</Text>
                    <Text>Experience</Text>
                </View>
            </View>
        )
    }
}

export default UserHud;