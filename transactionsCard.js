import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const TransactionCard = ({ item }) => {
    return(   
         <View style={styles.card}>

            <View style={styles.stuff}>
                <View style={styles.img}>
                    <Image source={item.icon}/>
                </View>

                <View>
                    <Text style={styles.title}>
                        {item.title}
                    </Text>
                    <Text style={styles.field}>
                        {item.field}
                    </Text>

                </View>
            </View>

            <View>
                <Text>
                    {item.price}
                </Text>
            </View>



        </View>
    )

};

const styles = StyleSheet.create({
    card: {
        width: '100%',
        // padding: 20,
        marginVertical: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      },

      stuff: {
        display: 'flex',
        flexDirection: 'row',
      },

      img: {
        marginRight: 20
      },

      title: {
        fontSize: 15,
        fontWeight: '500'
      },

      field: {
        fontSize: 10,
        fontWeight: '300'
      }
});

export default TransactionCard;