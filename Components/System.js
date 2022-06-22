import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import {

} from '@viro-community/react-viro';
import styles from '../Styles/styles';
const System=(props)=>{
    return(
        <View>
             <TouchableOpacity style={styles.btnContainer} onPress={()=>props.goBack(null)} >
                <Text style={styles.btnTxt}>Go Back</Text>
            </TouchableOpacity>
        </View>
    )
}
export default System;