import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Picker } from 'react-native';

class PlayerStats extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedGameMode: "solo-fpp"
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <Picker
                    selectedValue={this.state.selectedGameMode}       
                    style={styles.gameMode}
                    onValueChange={(itemValue, itemIndex) => this.setState({selectedGameMode: itemValue})}
                >
                    <Picker.Item label="Solo FPP" value="solo-fpp" />
                    <Picker.Item label="Duo FPP" value="duo-fpp" />
                    <Picker.Item label="Squad FPP" value="squad-fpp" />
                </Picker>

                <Text style={styles.stats}>Chicken Dinners: {this.props.stats.gameModeStats[this.state.selectedGameMode].wins}</Text>
                <Text style={styles.stats}>Kills: {this.props.stats.gameModeStats[this.state.selectedGameMode].kills}</Text>
                <Text style={styles.stats}>Assists: {this.props.stats.gameModeStats[this.state.selectedGameMode].assists}</Text>
                <Text style={styles.stats}>Boosts: {this.props.stats.gameModeStats[this.state.selectedGameMode].boosts}</Text>
                <Text style={styles.stats}>DBNOs: {this.props.stats.gameModeStats[this.state.selectedGameMode].dBNOs}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50
    },
    gameMode: {
        height: 100,
        width: 170,
        color: '#FF8300'
    },
    stats: {
        paddingTop: 15,
        color: '#FFF',
        fontSize: 15
    }
})

export default PlayerStats;