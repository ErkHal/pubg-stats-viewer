import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import PlayerStats from './PlayerStats'
import config from '../config.json';

//Config for GET requests against the PUBG API
const apiRequestConfig = {
    headers: {
        accept: 'application/vnd.api+json',
        Authorization: `Bearer ${config.apikey}`
    }
}

class PlayerSearch extends Component {
    
    constructor(props) {
        super(props);
        this.state = { pubgId: null, currentSeason: null }
    }

    setId = (id) => {
        this.setState({
            pubgId: id
        });
    };

    getPlayerInfo = async () => {

        let playerDataResponse = await fetch(
            `https://api.pubg.com/shards/pc-eu/players?filter[playerNames]=${this.state.pubgId}`,
            apiRequestConfig);
            
        let playerDataJson = await playerDataResponse.json();
        return playerDataJson
    }

    getCurrentSeasonStats = async () => {
        let allAvailableSeasons = await fetch("https://api.pubg.com/shards/steam/seasons", apiRequestConfig)
        let seasonsJson = await allAvailableSeasons.json()

        let currentSeasonId;
        
        seasonsJson.data.forEach(season => {
            season.attributes.isCurrentSeason
            ? currentSeasonId = season.id
            : {}    
        })

        let playerId = (await this.getPlayerInfo()).data[0].id

        let currentSeasonStats = await (await fetch(
            `https://api.pubg.com/shards/steam/players/${playerId}/seasons/${currentSeasonId}`,
            apiRequestConfig)).json()

        this.setState({currentSeason: currentSeasonStats.data.attributes})
    }

    render() {
        return(
            <View>
                <TextInput style={styles.input}
                    onChangeText={this.setId} 
                    placeholder="Search user"
                    selectionColor={buttonStyles.color}/>
                <Button onPress={this.getCurrentSeasonStats} color={buttonStyles.color} title="SEARCH"/>
                {this.state.currentSeason && <PlayerStats stats={this.state.currentSeason}/>}
            </View>
        );
    }
}

const buttonStyles = {
    color: '#FF8300'
}

const styles = StyleSheet.create({
    input: {
        fontSize: 30,
        paddingTop: 40,
        paddingBottom: 15,
        width: 180,
        textAlign: 'center',
        color: '#FFF'
    },
    search: {
        color: '#FF8300'
    }
})

export default PlayerSearch;