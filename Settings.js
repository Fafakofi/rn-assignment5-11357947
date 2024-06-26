import { StyleSheet, Text, View, FlatList, Switch }from 'react-native';
import SettingsListCard from './SettingsListCard';
import React, { useState } from 'react';

export default function Settings(){
    const settingsList = [
        {id: '1', preference: 'Language'},
        {id: '2', preference: 'My profile'},
        {id: '3', preference: 'Contact us'},
        {id: '4', preference: 'Change Password'},
        {id: '5', preference: 'Privacy Policy'}
    ];

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);



    return(
        <View style={styles.container}>
            <View style={styles.container1}>

                <FlatList 
                    data={settingsList}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => <SettingsListCard item={item} />}
                    keyExtractor={item => item.id}
                />
           

                <View style={styles.theme}>

                    <View>
                        <Text style={styles.themeText}>
                            Theme
                        </Text>
                    </View>

                    <View>

                        <Switch 
                                trackColor={{ false: "#767577", true: "#90EE90" }}
                                thumbColor={isEnabled ? "white" : "#f4f3f4"}
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                        />
                    </View>

                </View>
            </View>
        </View>
    )


   
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
    
      container1: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 20,
        marginLeft:20,
        marginRight: 20
      },

      theme: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      },

      themeText:{
        fontSize: 20,
        fontVariant: '600'
      },

})