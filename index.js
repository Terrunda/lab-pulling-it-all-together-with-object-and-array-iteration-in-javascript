function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

function numPointsScored(playerName) {
    const gameData = gameObject();
    const homeTeamPlayers = gameData.home.players
    const awayTeamPlayers = gameData.away.players

    for (let player in homeTeamPlayers) {
        if (player == playerName) {
            return homeTeamPlayers[`${player}`].points;
        }
    }

    for (let player in awayTeamPlayers) {
        if (player == playerName) {
            return awayTeamPlayers[`${player}`].points;
        }
    }
}

function shoeSize(playerName) {
    const gameData = gameObject();
    const homeTeamPlayers = gameData.home.players
    const awayTeamPlayers = gameData.away.players

    
    for (let player in homeTeamPlayers) {
        if (player == playerName) {
            return homeTeamPlayers[`${player}`].shoe;
        }
    }

    for (let player in awayTeamPlayers) {
        if (player == playerName) {
            return awayTeamPlayers[`${player}`].shoe;
        }
    }
}

function teamColors(teamName) {
    const gameData = gameObject();
    const homeTeam = gameData.home.teamName;
    const awayTeam = gameData.away.teamName;

    if (teamName == homeTeam) {
        return gameData.home.colors;
    }

       if (teamName == awayTeam) {
        return gameData.away.colors;
    }
}

function teamNames() {
    const gameData = gameObject();
    const awayTeamName = gameData.away.teamName;
    const homeTeamName = gameData.home.teamName;

    let arr = [];
    arr.push(homeTeamName, awayTeamName);
    return arr;
}

function playerNumbers(teamName) {
    const gameData = gameObject();
    const homeTeamName = gameData.home.teamName;
    const awayTeamName = gameData.away.teamName;


    const homeTeamPlayers = gameData.home.players;
    const awayTeamPlayers = gameData.away.players;

    if (teamName == homeTeamName) {
        let jerseyArray = [];
        for (let player in homeTeamPlayers) {
            jerseyArray.push(homeTeamPlayers[`${player}`].number);
        }
        return jerseyArray;
    }

    if (teamName == awayTeamName) {
        let jerseyArray = [];
        for (let player in awayTeamPlayers) {
            jerseyArray.push(awayTeamPlayers[`${player}`].number);
        }
        return jerseyArray;
    }
}

function playerStats(playerName) {
    const gameData = gameObject();
    const homeTeamPlayers = gameData.home.players;
    const awayTeamPlayers = gameData.away.players;
    
    for (let player in homeTeamPlayers) {
        if (player == playerName) {
            return homeTeamPlayers[`${player}`];
        }
    }

    for (let player in awayTeamPlayers) {
        if (player == playerName) {
            return awayTeamPlayers[`${player}`];
        }
    }
}

function bigShoeRebounds() {
    const gameData = gameObject();
    const homeTeamPlayers = gameData.home.players;
    const awayTeamPlayers = gameData.away.players;

    let playerObject = {
        ...homeTeamPlayers,
        ...awayTeamPlayers
    }

    let largestShoeSize = 0;
    let reboundsForLargestShoe = 0;
    let playerValues = Object.values(playerObject);

    for (let playerStats of playerValues) {
        const currentShoeSize = playerStats.shoe;
        if (currentShoeSize > largestShoeSize) {
            largestShoeSize = currentShoeSize;
            reboundsForLargestShoe = playerStats.rebounds;
        }
        return reboundsForLargestShoe;
    }
}


function mostPointsScored() {
    const gameData = gameObject();
    const homeTeamPlayers = gameData.home.players;
    const awayTeamPlayers = gameData.away.players;
    let mostPoints = 0;

    const playerObject = {
        ...homeTeamPlayers,
        ...awayTeamPlayers
    }

    let playerStatsArray = Object.values(playerObject);
    
    for (let playerStats of playerStatsArray) {
        const playerPoints = playerStats.points;
        if (playerPoints > mostPoints) {
            mostPoints = playerPoints;
        }
    }
    return mostPoints;
}

function winningTeam() {
    const gameData = gameObject();
    const homeTeamPlayers = gameData.home.players;
    const awayTeamPlayers = gameData.away.players;

    const homeTeamArray = Object.values(homeTeamPlayers);
    const awayTeamArray = Object.values(awayTeamPlayers);

    let homeTeamScoreArray = [];
    let awayTeamScoreArray = [];

    for (let homePlayer of homeTeamArray) {
        const homePlayerScore = homePlayer.points;
        homeTeamScoreArray.push(homePlayerScore);
    }

    for (let awayPlayer of awayTeamArray) {
        const awayPlayerScore = awayPlayer.points;
        awayTeamScoreArray.push(awayPlayerScore);
    }

    const totalHomeScore = homeTeamScoreArray.reduce((previousValue, currentValue) => {
        return previousValue + currentValue;
    });

    const totalAwayScore = awayTeamScoreArray.reduce((previousValue, currentValue) => {
        return previousValue + currentValue;
    });

    if (totalHomeScore > totalAwayScore) {
        return gameData.home.teamName;
    } else {
        return gameData.away.teamName;
    }
}

function playerWithLongestName() {
    const gameData = gameObject();
    const homeTeamPlayers = gameData.home.players;
    const awayTeamPlayers = gameData.away.players;

    const playerObject = {
        ...homeTeamPlayers,
        ...awayTeamPlayers
    }

    let playerNameLength = 0;
    let result = undefined;
    let playerNamesArray = Object.keys(playerObject);
    for (let playerName of playerNamesArray) {
        const currentplayerNameLength = playerName.length;
        if (currentplayerNameLength > playerNameLength) {
            playerNameLength = currentplayerNameLength;
            result = playerName;
        }
    }
    return result;
}

function doesLongNameStealATon() {
    const gameData = gameObject();
    const homeTeamPlayers = gameData.home.players;
    const awayTeamPlayers = gameData.away.players;
    const longNamePlayer = playerWithLongestName();
    let mostSteals = 0;
    let result = undefined;

    for (let homePlayer in homeTeamPlayers) {
        const playerSteals = homeTeamPlayers[`${homePlayer}`].steals;
        if (playerSteals > mostSteals) {
            mostSteals = playerSteals;
            result = homePlayer;
        }
    }

    for (let awayPlayer in awayTeamPlayers) {
        const playerSteals = awayTeamPlayers[`${awayPlayer}`].steals;
        if (playerSteals > mostSteals) {
            mostSteals = playerSteals;
            result = awayPlayer;
        }
    }

    if (result == longNamePlayer) {
        return true;
    } else {
        return false;
    }
}
