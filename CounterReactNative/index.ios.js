/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component  } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Counter from './components/Counter'
import { createStore } from 'redux'
import counter from './reducers'


const store = createStore(counter)


export default class counterNative extends Component {


    render() {

      return (
      <View style={styles.counter}>
          <Counter value={store.getState()}
                   onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
                   onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
          />
      </View>
    );
 }

    componentWillMount(){
        store.subscribe((state)=>this.setState({state}))
        console.log("componentWillMount" + Date())
    }

}

const styles = StyleSheet.create({
    counter: {
    flex: 1, flexDirection: 'row',justifyContent: 'center',
    alignItems: 'center',flexWrap:'wrap',
        backgroundColor: '#e6e6e6',
    },

});


AppRegistry.registerComponent('counterNative', () => counterNative);
