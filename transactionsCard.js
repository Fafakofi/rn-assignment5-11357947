import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const TransactionCard = ({ item }) => {
    const { theme } = useContext(ThemeContext);
    return(   
         <View style={styles.card}>

            <View style={styles.stuff}>
                <View style={styles.img}>
                    <Image source={item.icon}/>
                </View>

                <View>
                    <Text style={[styles.title, { color: theme.textColor }]}>
                        {item.title}
                    </Text>
                    <Text style={[styles.field, { color: theme.textColor }]}>
                        {item.field}
                    </Text>

                </View>
            </View>

            <View>
                <Text style={[styles.price, { color: theme.textColor }]}>
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
      },


      price: {
        color: 'black'
      }
});

export default TransactionCard;