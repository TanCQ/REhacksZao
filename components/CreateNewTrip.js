import React, {Component} from 'react';
import {Platform, StyleSheet,TextInput, Text, View, Button} from 'react-native';
import {db} from '../database/config';

class CreateNewTrip extends Component {
    constructor(props) {
        super(props);
        this.state= {
            dropOffPoint: '',
            pickUpPoint: '',
            pickUpTime: '',
            numberOfPeople: '',
            
        }
    }

    render(){
        return(
            <View style={styles.wholeBox}>
                <View style={styles.withinText}>
                    <Text style={styles.notmore}>Drop Off Point: </Text>
                    <TextInput style={{height: 40,width: '100%', borderColor: 'gray', borderWidth: 1}} 
                    onChangeText={(dropOffPoint) => this.setState({dropOffPoint})} 
                    />
                </View>
                <View style={styles.withinText}>
                    <Text style={styles.notmore}>Pick Up Point: </Text>
                    <TextInput style={{height: 40,width: '100%', borderColor: 'gray', borderWidth: 1}} 
                    onChangeText={(pickUpPoint) => this.setState({pickUpPoint})} 
                    />
                </View>
                <View style={styles.withinText}>
                    <Text style={styles.notmore}>Pick Up Time: </Text>
                    <TextInput style={{height: 40,width: '100%', borderColor: 'gray', borderWidth: 1}} 
                    onChangeText={(pickUpTime) => this.setState({pickUpTime})} 
                    />
                </View>
                <View style={styles.withinText}>
                    <Text style={styles.notmore}>Number of People: </Text>
                    <View style={styles.cool}>
                    <TextInput style={{height: 40, width: '100%',borderColor: 'gray', borderWidth: 1}} 
                    onChangeText={(numberOfPeople) => this.setState({numberOfPeople})} 
                    />
                    </View>
                </View>
                <Button
                    title="Confirm?"
                    onPress={() => {this.props.navigation.navigate('MyZao', {dropOffPoint: this.state.dropOffPoint, pickUpPoint: this.state.pickUpPoint
                    , pickUpTime: this.state.pickUpTime, numberOfPeople: this.state.numberOfPeople})
                    console.log(this.state)}}
                 />
                
            </View>
        )
    }


}


const styles = StyleSheet.create({
    withinText:{
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: 10
    },
    wholeBox:{
        
    },
    textInputStyle:{

    },
    cool:{
      width: '100%'  
    },
    notmore: {
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 15,
        backgroundColor: 'rgba(255,255,255, .1)',
        justifyContent: "center",
        textAlign: "center",
      }
})

export default CreateNewTrip; 