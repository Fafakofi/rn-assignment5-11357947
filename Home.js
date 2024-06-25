import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity, FlatList}from 'react-native';
import TransactionCard from './transactionsCard';


export default function Home( ){

    const transactionList =[
        {id: 1, icon: require('./assets/apple.png'), title: 'Apple store',field: 'Entertainment',price: '-$5.99' },
        {id: 2, icon: require('./assets/spotify.png'), title: 'Spotify', field: 'Music', price: '-$12.99'},
        {id: 3, icon: require('./assets/moneyTransfer.png'), title: 'Money Transfer', field: 'Transaction', price: '$1999'},
        {id: 4, icon: require('./assets/grocery.png'), title: 'Grocery', field: 'butter', price: '-$12.99'},
    ];

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

                <View style={styles.masterCard}>
                    <Image source={require('./assets/Card.png')} style={styles.masterCardImg} />
                </View>

                <View style={styles.actions}>

                    <View style={styles.action}>
                        <Image source={require('./assets/send.png')} />
                        <Text style={styles.sent}>
                            Sent
                        </Text>

                    </View>

                    <View style={styles.action}>
                        <Image source={require('./assets/recieve.png')}/>
                        <Text style={styles.recieve}>
                            Recieve
                        </Text>

                    </View>

                    <View style={styles.action}>
                        <Image source={require('./assets/loan.png')} />
                        <Text style={styles.loan}>
                            Loan
                        </Text>

                    </View>

                    <View style={styles.action}>
                        <Image source={require('./assets/topUp.png')}/>
                        <Text style={styles.topUp}>
                            Topup
                        </Text>

                    </View>
                </View>

                <View style={styles.trans}>
                    <Text style={styles.transaction}>
                        Transaction
                    </Text>

                    <TouchableOpacity>
                        <Text style= { styles.see}>
                            See all
                        </Text>

                    </TouchableOpacity>
                </View>

                <FlatList
                    data= {transactionList}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => <TransactionCard item={item} />}
                    keyExtractor={item => item.id}
                />


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
    justifyContent:'space-between',
    marginBottom: 30
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
  },

  masterCard:{
    marginBottom: 20
  },

  masterCardImg: {
    width: '100%'
  },

  actions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    marginBottom: 30
  },

  sent: {
    top: 4
  },

  recieve: {
    top: 3
  },

  trans: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between'
  },

  transaction: {
    fontSize: 20,
    fontWeight: '500'
  },

  see: {
    color: '#191970',
     fontWeight: '500'
  },



 



  

});