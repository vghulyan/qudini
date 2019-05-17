import React, {Component} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import styles from './styles';
import reducer from './src/reducers'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
const middleware = applyMiddleware(thunkMiddleware, logger);
const store = createStore(reducer, middleware);
import Customer from './src/screens/Customer';

console.disableYellowBox = true;

export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <SafeAreaView style={styles.container}>
                <Customer />
            </SafeAreaView>
        </Provider>
    );
  }
}
