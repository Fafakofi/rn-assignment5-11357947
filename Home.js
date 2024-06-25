import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function Home( ){

    return(
        <View style={styles.container}>
            <View  style={styles.container1}>

                <View style={styles.userProfile}>
                    <View  style={styles.profilePic} >
                        <Image source={require('./assets/userProfile.jpg')} style={styles.profileImg}/>
                    </View>
                </View>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  container1: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 90,
    marginLeft:20,
  },

});