import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';


class ListMyZao extends Component {
    constructor(props) {
        super(props);
        this.state = {dropOffPoint: '', pickUpPoint: '', pickUpTime: '', numberOfPeople: '', empty: true }

    }
    componentDidMount() {
        
        console.log(this.props.navigation.getParam('dropOffPoint', ''))
        const dropOffPoint = this.props.navigation.getParam('dropOffPoint', '')
        const pickUpPoint = this.props.navigation.getParam('pickUpPoint', '')
        const pickUpTime = this.props.navigation.getParam('pickUpTime', '')
        const numberOfPeople = this.props.navigation.getParam('numberOfPeople', '')
        this.setState({dropOffPoint, pickUpPoint, pickUpTime, numberOfPeople})


        
    }
//     clickHandler = () => {this.setstate({
//         dropOffPoint: this.props.navigation.getParam('dropOffPoint'),
//         pickUpPoint: this.props.navigation.getParam('pickUpPoint'),
//         pickUpTime: this.props.navigation.getParam('pickUpTime'),
//         numberOfPeople: this.props.navigation.getParam('numberOfPeople')
//     })
// }

    


    
    
    render(){
        console.log(this.state.dropOffPoint);
        const _dropOffPoint = this.state.dropOffPoint
        if (_dropOffPoint.length == 0) {
            return (
                <View><Text style={styles.nomore}>You have no plans to Zao :( </Text></View>
            )
        } else {
            return (
                <View>
                    <Text style = {styles.nomore}>Dropoff Point: {this.state.dropOffPoint}</Text>
                    <Text style = {styles.nomore}>Pickup Point: {this.state.pickUpPoint}</Text>
                    <Text style = {styles.nomore}>Pickup Time: {this.state.pickUpTime}</Text>
                    <Text style = {styles.nomore}>Number of People: {this.state.numberOfPeople}</Text>
                </View>
            )
        }

    }

}

const styles = StyleSheet.create({
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    },
    nomore: {
        color: "#fff",
        fontSize: 22,
        backgroundColor: 'rgba(255,255,255, .1)',
        justifyContent: "center",
        textAlign: "center",
      }
})

export default ListMyZao