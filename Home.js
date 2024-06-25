import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';


export default function Home( ){

    return(
        <View style={styles.container}>
            <View  style={styles.container1}>

                <View style={styles.userProfile}>
                    <View style={styles.profileStuff}>

                    
                        <View  style={styles.profilePic} >
                            <Image source={require('./assets/profile.png')} style={styles.profileImg}/>
                        </View>
    
                        <View style={styles.profileText}>

                            <Text style={styles.profileGreet}>
                                Welcome back,
                            </Text>

                            <Text style={styles.profileName}>
                            Eric Atsu
                            </Text>

                        </View>

                    </View>

                    <View style={styles.profileSearchbar}>
                        <TouchableHighlight style={styles.touch}>
                            <Image source={require('./assets/search.png')}/>
                        </TouchableHighlight>
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
    marginRight: 20
  },

  userProfile: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between'
  },

  profileStuff: {
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between'
  },

  profileGreet: {
    fontWeight: '200'
  },

  profileName: {
    fontWeight: '800',
    fontSize: 20
  },

  profileSearchbar: {
    width: '10%',
    height: '70%',
    backgroundColor: '#D3D3D3',
    borderRadius: 35
  },

  touch: {
    top: 8,
    left: 6
  }

  

});