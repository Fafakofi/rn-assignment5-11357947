import { StyleSheet, Text, View, FlatList}from 'react-native';
import SettingsListCard from './SettingsListCard';

export default function Settings(){
    const settingsList = [
        {id: 1, preference: 'Language'},
        {id: 2, preference: 'My profile'},
        {id: 3, preference: 'Contact us'},
        {id: 4, preference: 'Change Password'},
        {id: 5, preference: 'Privacy Policy'}
    ];



    return(
        <View style={styles.container}>
            <View style={styles.container1}>

                <FlatList 
                    data={settingsList}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => <SettingsListCard item={item} />}
                    keyExtractor={item => item.id}
                />
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
})