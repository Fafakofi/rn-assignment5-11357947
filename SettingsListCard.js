import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SettingsListCard = ({ item }) => {
    return(
        <View style={styles.settings}>

            <View style={styles.settings1}>

                <Text style={styles.preference}>
                    {item.preference}
                </Text>

                <Ionicons name="chevron-forward" size={24} color="#A9A9A9" />

            </View>


  

                <View style={styles.settings2}></View>

            
        </View>
    )
}

const styles = StyleSheet.create({
    settings1: {
        width: '100%',
        marginVertical: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30
      },

      preference: {
        fontSize: 20,
        fontWeight: '500',
        marginBottom: 15
      },

      settings2: {
        height: 1,
        width: '100%',
        backgroundColor:'#D3D3D3'
      }



});

export default SettingsListCard;