import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import styles from "../../styles";
import md5 from "md5";
import moment from 'moment';

const Card = item => {
    return (
        <View>
            <View style={[styles.row, styles.space]}>
                <View style={[styles.row, styles.center]}>
                    <Image
                        style={[styles.roundImage, {width: 50, height: 50}]}
                        source={{uri:
                                item.customer.emailAddress ?
                                    `https://www.gravatar.com/avatar/${ md5(item.customer.emailAddress) }`
                                    : 'https://www.gravatar.com/avatar'
                        }}
                    />
                    <View>
                        <Text style={styles.bold}>{item.customer.name}</Text>
                        <Text style={[styles.bold, styles.small]}>{item.customer.emailAddress}</Text>
                        <TouchableOpacity onPress={() => console.log(item)}>
                            <Text>Created: {item.customer.createdBy.displayName}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={() => console.log(item)}>
                <Text style={[styles.gray, styles.small]}>Joined: {moment(item.joinedTime).format('ll')}</Text>
            </TouchableOpacity>
        </View>
    )
};

export default Card;
