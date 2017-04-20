import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {ActionsCreators} from '@actions'
import {
    View,
    Text,
    Button,
} from 'react-native'
import styles from './styles'

class Counter extends Component {
    render () {
        console.log(this.props)
        return (
            <View style={styles.container}>
                <Button title="+" onPress={() => this.props.increment()} />
                <Text>{this.props.counter}</Text>
                <Button title="-" onPress={() => this.props.decrement()} />
            </View>
        )
    }

    static propTypes = {
        counter: React.PropTypes.number.isRequired
    }
}

const mapStateToProps = (state) => ({
    counter: state.counter
})

const mapDispatchToProps = (dispatch) => (
    bindActionCreators(ActionsCreators, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Counter)