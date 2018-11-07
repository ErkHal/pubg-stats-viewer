import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker, ScrollView } from 'react-native';

class PlayerStats extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedGameMode: "solo-fpp"
        }
    }

    calculateSeasonRank = rankPoints => {
        switch(true) {
            case rankPoints == 0 :
                return 'Unranked'
            case rankPoints > 0 && rankPoints <= 1399:
                return 'Bronze'
            case rankPoints > 1399 && rankPoints <= 1499:
                return 'Silver'
            case rankPoints > 1499 && rankPoints <= 1599:
                return 'Gold'
            case rankPoints > 1599 && rankPoints <= 1699:
                return 'Platinum'
            case rankPoints > 1699 && rankPoints <= 1799:
                return 'Diamond'
            case rankPoints > 1799 && rankPoints <= 1899:
                return 'Elite'
            case rankPoints > 1899 && rankPoints <= 1999:
                return 'Master'
            case rankPoints > 1999:
                return 'Grandmaster'
            default:
                return 'Unranked';
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <Picker
                    selectedValue={this.state.selectedGameMode}       
                    style={styles.gameMode}
                    onValueChange={(itemValue, itemIndex) => this.setState({selectedGameMode: itemValue})}
                    mode='dropdown'
                >
                    <Picker.Item label="Solo" value="solo" />
                    <Picker.Item label="Duo" value="duo" />
                    <Picker.Item label="Squad" value="squad" />
                    <Picker.Item label="Solo FPP" value="solo-fpp" />
                    <Picker.Item label="Duo FPP" value="duo-fpp" />
                    <Picker.Item label="Squad FPP" value="squad-fpp" />
                </Picker>
                    <Text style={styles.currentRank}>Current Rank: {this.calculateSeasonRank(this.props.stats.gameModeStats[this.state.selectedGameMode].bestRankPoint)}</Text>
                    <Text style={styles.seasonBestRank}>Season Best: {this.calculateSeasonRank(this.props.stats.gameModeStats[this.state.selectedGameMode].bestRankPoint)}</Text>
                <ScrollView alwaysBounceVertical={true} removeClippedSubviews={true}>
                    <View>
                    <Text style={styles.stats}>Chicken Dinners: {this.props.stats.gameModeStats[this.state.selectedGameMode].wins}</Text>
                    <Text style={styles.stats}>Top 10: {this.props.stats.gameModeStats[this.state.selectedGameMode].top10s}</Text>
                    <Text style={styles.stats}>Losses: {this.props.stats.gameModeStats[this.state.selectedGameMode].losses}</Text>
                    <Text style={styles.stats}>Kills: {this.props.stats.gameModeStats[this.state.selectedGameMode].kills}</Text>
                    <Text style={styles.stats}>Headshot kills: {this.props.stats.gameModeStats[this.state.selectedGameMode].headshotKills}</Text>
                    <Text style={styles.stats}>Roadkills: {this.props.stats.gameModeStats[this.state.selectedGameMode].roadKills}</Text>
                    <Text style={styles.stats}>Most kills in round: {this.props.stats.gameModeStats[this.state.selectedGameMode].roundMostKills}</Text>
                    <Text style={styles.stats}>Assists: {this.props.stats.gameModeStats[this.state.selectedGameMode].assists}</Text>
                    <Text style={styles.stats}>Longest kill: {this.props.stats.gameModeStats[this.state.selectedGameMode].longestKill}</Text>
                    <Text style={styles.stats}>Longest time alive: {this.props.stats.gameModeStats[this.state.selectedGameMode].mostSurvivalTime}</Text>
                    <Text style={styles.stats}>Total riding distance: {this.props.stats.gameModeStats[this.state.selectedGameMode].rideDistance}m</Text>
                    <Text style={styles.stats}>Total walked distance: {this.props.stats.gameModeStats[this.state.selectedGameMode].walkDistance}m</Text>
                    <Text style={styles.stats}>Revives: {this.props.stats.gameModeStats[this.state.selectedGameMode].revives}</Text>
                    <Text style={styles.stats}>DBNOs: {this.props.stats.gameModeStats[this.state.selectedGameMode].dBNOs}</Text>
                    <Text style={styles.stats}>Boosts used: {this.props.stats.gameModeStats[this.state.selectedGameMode].boosts}</Text>
                    <Text style={styles.stats}>Heals used: {this.props.stats.gameModeStats[this.state.selectedGameMode].heals}</Text>
                    </View>
                </ScrollView >
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        flex: 1
    },
    gameMode: {
        height: 40,
        width: 170,
        color: '#FF8300',
        transform: [
            { scaleX: 1.6 }, 
            { scaleY: 1.6 },
        ]
    },
    stats: {
        paddingTop: 12,
        paddingBottom: 10,
        borderBottomColor: '#333',
        borderBottomWidth: 1,
        width: 150,
        color: '#EEE',
        fontSize: 15
    },
    currentRank: {
        paddingTop: 15,
        paddingBottom: 15,
        width: 150,
        color: '#FF8300',
        fontSize: 20
    },
    seasonBestRank: {
        paddingTop: 15,
        paddingBottom: 15,
        width: 180,
        color: '#EEE',
        fontSize: 20,
        borderBottomColor: '#FF8300',
        borderBottomWidth: 2
    }
})

export default PlayerStats;