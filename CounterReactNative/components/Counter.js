/**
 * Created by GL on 2017/1/25.
 */
//import  {Component} from 'React'
import React, { Component , PropTypes} from 'react'
import {Text, Button, View }  from 'react-native'




export  default  class  Counter extends  Component {


    static propTypes = {
        value: PropTypes.number.isRequired,
        onIncrement: PropTypes.func.isRequired,
        onDecrement: PropTypes.func.isRequired
    }


    render(){
        const { value, onIncrement, onDecrement } = this.props

        return(
            <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center',
        alignItems: 'center', flexWrap:'wrap'  }} >
                <Text> Clicked: {value} times  {' '}</Text>
                <Button onPress={onIncrement} title=' + ' />
                <Text> {' '} </Text>
                <Button onPress={onDecrement} title=' - ' />
                <Text> {' '} </Text>
                <Button onPress={this.incrementIfOdd} title='Increment if odd' />
                <Text> {' '} </Text>
                <Button onPress={this.incrementAsync} title='Increment async' />
            </View>

    );

    }

    incrementIfOdd = () => {
        console.log('incrementIfOdd' )
        if (this.props.value % 2 !== 0) {

            this.props.onIncrement()
        }
    }

    incrementAsync = () => {
        console.log('incrementAsync' )
        setTimeout(this.props.onIncrement, 1000)
    }

}


/**
 * import React, { Component, PropTypes } from 'react'

 class Counter extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
  }

  incrementIfOdd = () => {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  incrementAsync = () => {
    setTimeout(this.props.onIncrement, 1000)
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <p>
        Clicked: {value} times
        {' '}
        <button onClick={onIncrement}>
          +
        </button>
        {' '}
        <button onClick={onDecrement}>
          -
        </button>
        {' '}
        <button onClick={this.incrementIfOdd}>
          Increment if odd
        </button>
        {' '}
        <button onClick={this.incrementAsync}>
          Increment async
        </button>
      </p>
    )
  }
}

 export default Counter


 ...*/