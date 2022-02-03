//first function: gameObject
    //contains and returns an object nested:
        //top level: 2 keys
            //home:
                //teamName: "string"
                //colors: "Array of strings that are teams color"
                //players: "object of players whose names AS STRINGS are the KEYS to an object containing their stats"
                    //number
                    //shoe
                    //points
                    //rebounds
                    //assists
                    //steals
                    //blocks
                    //slamDunks
            //away Object same as home team object above including all elements nested within

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
          assits: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evens": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assits: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assits: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assits: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assits: 2,
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
          assits: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismack Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assits: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assits: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assits: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Hayword": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assits: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}
function homeTeamName(){
    return gameObject()[`home`][`teamName`]
}
//below, we use the for in key to iterate over the properties of an OBJECT
//for (const KEY in OBJECT)
//for in ONLY passes the keys
//MUST use bracket notation for accessing the object's values
// function numPointsScored(playerName){
//     const game = gameObject() //declare constant variable game, which is the entire array object in the gameObject function
//     for(const gameKey in game) { //for loop to iterate through all the game keys //declaring gameKey as the first, or outer keys within game object (home, away)
//         const teamObj = game[gameKey] //declaring teamObj as the collection of nested keys within gameKey, meaning that it is for teamName, colors, and players since these keys are within HOME and AWAY
//         const playerObj = teamObj.players //declares playerObj as the players key within teamObj
//             for(const playerKey in playerObj) { //iterate through players key
//                 if (playerKey === playerName) { //check if the playerName equals any of the iterated playerKeys
//                     return playerObj[playerKey].points // return player points
//                 }
//             }        
//         }
//     }
function homeTeam() {
  return gameObject().home
}

function awayTeam(){
  return gameObject().away
}

function players() {
  return Object.assign({}, homeTeam().players, awayTeam().players) //puts home players and away players in an empty object
}

function colors(){
  return Object.assign({}, homeTeam().colors, awayTeam().colors)
}

function numPointsScored(playerInput){
  return players()[playerInput].points //needs to be in brackets, to tell us what the variable is. If you use dot notation, it will literally try to find the key called "playerInput" which doesn't exist
}

function shoeSize(playerInput){
  return players()[playerInput].shoe
}
function teamColor(teamInput){
  return teamInput === homeTeam().teamName ? homeTeam().colors : awayTeam().colors
}
