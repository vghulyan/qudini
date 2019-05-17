import React, { Component } from 'react';
import styles from '../../styles';
import md5 from 'md5';
import { View, Text, ActivityIndicator, Image, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { authenticate } from '../actions';
import PropTypes from 'prop-types';
import moment from 'moment';

class Customer extends Component {

    state = {
        search: '',
        data: {}
    };

    filterResult = ({search}) => {
        this.setState({
            value: search,
        });

        if(this.state.data.queueData.queue.customersToday.length > 0) {
            const {customersToday} = this.state.data.queueData.queue;
            const newData = customersToday.filter(item => {
                const itemData = item.customer.name.toUpperCase();
                const textData = search.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            // this.setState({
            //     data : newData,
            // });
        }
    };

    componentWillReceiveProps(nextProps) {
        this.setState({
            data: nextProps.customer,
        });
    }

    componentDidMount(): void {
        this.props.authenticate('codetest1', 'codetest100');
    }

    _renderItem = ({item}) => {
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

    renderSeparator = () => {
        return ( <View style={styles.itemSeparator} /> );
    };

    render() {
        if(this.state.data.queueData) {
            return (
                <View style={styles.container}>

                    <TextInput
                        style={styles.input}
                        onChangeText={(search) => this.filterResult({search})}
                        value={this.state.search.value}
                        autoCorrect={false}
                        returnKeyType='send'
                        placeholder='Search'
                    />

                    <View style={styles.container}>
                        <FlatList
                            refreshing={false}
                            data={this.state.data.queueData.queue.customersToday}
                            keyExtractor={(item) => item.customer.name}
                            renderItem={this._renderItem}
                            ItemSeparatorComponent={this.renderSeparator}
                        />
                    </View>
                </View>
            )
        }
        return (
            <View style={[styles.container, styles.center]}>
                <ActivityIndicator style={styles.container}/>
            </View>
        )
    }
}

Customer.propTypes = {
    customer: PropTypes.object,
};

const mapStateToprops = state => {
    return {
        customer: state.customer,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        authenticate: (username, password) => dispatch(authenticate(username, password)),
    }
};

export default connect(mapStateToprops, mapDispatchToProps)(Customer);
