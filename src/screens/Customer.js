import React, { Component } from 'react';
import styles from '../../styles';
import { View, Text, ActivityIndicator, Image, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { authenticate } from '../actions';
import PropTypes from 'prop-types';
import Card from './Card';

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
            <Card {...item} />
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
