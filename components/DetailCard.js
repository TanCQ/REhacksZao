import React, {Component} from 'react';
import {Platform, StyleSheet,TextInput, Text, View, TouchableOpacity} from 'react-native';
import CollapseView from 'react-native-collapse-view';
import {db} from '../database/config';

class DetailCard extends Component {
    constructor(props) {
        super(props);
        this.state = {dropOffPoint: '', pickUpPoint: '', pickUpTime: '', numberOfPeople: '' }
        this.pressHandler = this.pressHandler.bind(this)
    }

    pressHandler() {
        this.props.navigation.navigate(
            'MyZao', {dropOffPoint: this.state.dropOffPoint, pickUpPoint: this.state.pickUpPoint, pickUpTime: this.state.pickUpTime
            , numberOfPeople: this.state.numberOfPeople }
        )
    }

    _renderCollapseView = (collapse) => {
        return(
        
            <View style = {styles.centralised}>
                <TouchableOpacity onPress={this.pressHandler}>
                    <Text style = {styles}>Zao with them?</Text>
                </TouchableOpacity>
            </View>
        )
    }

    _renderView = (collapse) => {
        return(
        <View style = {styles.containerStyle}>
        
             <Text style = {styles.notmore}>Dropoff Point: {this.props.dropOffPoint}</Text>
             <Text style = {styles.notmore}>Pickup Point: {this.props.pickUpPoint}</Text>
             <Text style = {styles.notmore}>Pickup Time: {this.props.pickUpTime}</Text>
             <Text style = {styles.notmore}>Number of People: {this.props.numberOfPeople}</Text>
       
        </View>
        )
    }
    render() {
        return (
            <CollapseView
                renderView = {this._renderView}
                renderCollapseView = {this._renderCollapseView}
            />
        )
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
    containerStyleOne: {
        borderBottomWidth: 1,

        backgroundColor: '#F5F1F1',
        justifyContent: 'center',
        flexDirection: 'column',
        borderColor: '#ddd',
        alignItems: 'center',
        elevation: 3
    },
    centralised: {
        alignItems: 'center'
    },
    notmore: {
        color: "#fff",
        fontSize: 15,
        backgroundColor: 'rgba(255,255,255, .1)',
        justifyContent: "center",
        textAlign: "center",
      }
})

export default DetailCard;

