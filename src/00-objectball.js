const gameObject = () => { return {
    home: {teamName: "Brooklyn Nets",
           colors: ["Black","White"],
           players: {"Alan Anderson": {"number": 0,
                                        "shoe": 16,
                                        "Points": 22,
                                        "Rebounds": 12,
                                        "Assists": 12,
                                        "Steals": 3,
                                        "Blocks": 1,
                                        "Slam Dunks": 1},
                      "Reggie Evans":  {"number":30,
                                        "shoe": 14,
                                        "Points": 12,
                                        "Rebounds": 12,
                                        "Assists": 12,
                                        "Steals": 12,
                                        "Blocks": 12,
                                        "Slam Dunks": 7},
                      "Brook Lopez":   {"number":11,
                                        "shoe": 17,
                                        "Points": 17,
                                        "Rebounds": 19,
                                        "Assists": 10,
                                        "Steals": 3,
                                        "Blocks": 1,
                                        "Slam Dunks": 15},
                      "Mason Plumlee": {"number": 1,
                                        "shoe": 19,
                                        "Points": 26,
                                        "Rebounds": 12,
                                        "Assists": 6,
                                        "Steals": 3,
                                        "Blocks": 8,
                                        "Slam Dunks": 5},
                      "Jason Terry":   {"number": 31,
                                        "shoe": 15,
                                        "Points": 19,
                                        "Rebounds": 2,
                                        "Assists": 2,
                                        "Steals": 4,
                                        "Blocks": 11,
                                        "Slam Dunks": 1}}
           },
    away:  {teamName:"Charlotte Hornets",
            colors: ["Turquoise","Purple"],
            players: { "Jeff Adrian":    {"number": 4,
                                          "shoe": 18,
                                          "Points": 10,
                                          "Rebounds": 1,
                                          "Assists": 1,
                                          "Steals": 2,
                                          "Blocks": 7,
                                          "Slam Dunks": 2},
                       "Bismak Biyombo": {"number": 0,
                                          "shoe": 16,
                                          "Points": 12,
                                          "Rebounds": 4,
                                          "Assists": 7,
                                          "Steals": 7,
                                          "Blocks": 15,
                                          "Slam Dunks": 10},
                       "DeSagna Diop":   {"number": 2,
                                          "shoe": 14,
                                          "Points": 24,
                                          "Rebounds": 12,
                                          "Assists": 12,
                                          "Steals": 4,
                                          "Blocks": 5,
                                          "Slam Dunks": 5},
                       "Ben Gordon":     {"number": 8,
                                          "shoe": 15,
                                          "Points": 33,
                                          "Rebounds": 3,
                                          "Assists": 2,
                                          "Steals": 1,
                                          "Blocks": 1,
                                          "Slam Dunks": 0},
                       "Brendan Haywood":{"number": 33,
                                          "shoe": 15,
                                          "Points": 6,
                                          "Rebounds": 12,
                                          "Assists": 12,
                                          "Steals": 22,
                                          "Blocks": 5,
                                          "Slam Dunks": 12}}
            }
}}



let point
function numPointsScored(player) {
      for (const team in gameObject()) {
          for (const baller in gameObject()[team]['players']) {
            if (baller === player) {
            return gameObject()[team]['players'][player]['Points']
             }
          }
      }

}


console.log(`Alan A scored ${numPointsScored("Alan Anderson")} points`)
console.log(`Ben Gordon scored ${numPointsScored("Ben Gordon")} points`)


function shoeSize(player) {
    for (const team in gameObject()) {
        ;
        for (const baller in gameObject()[team]['players']) {
           if (baller === player) {
          return gameObject()[team]['players'][player]['shoe']
           }
        }
    }

}

console.log(`Bismak Biyombo is a size ${shoeSize("Bismak Biyombo")} in Jordans`)

console.log(`DeSagna Diop is a size ${shoeSize("DeSagna Diop")} in addidas`)


const teamColors = function(team) {
    for (const side in gameObject()) {
        for (const teamAttr in gameObject()[side])
            if (gameObject()[side][teamAttr] === team) {
                return gameObject()[side]['colors']
            }
    }
    
}

console.log(`The Hornets Colors Are ${teamColors("Charlotte Hornets").join(" & ")}`)
console.log(`The Nets Colors Are ${teamColors("Brooklyn Nets").join(" & ")}`)

function teamNames() {
    let teams = [];
    for (const side in gameObject()) {
        for (const teamAttr in gameObject()[side]) {
            if (teamAttr === 'teamName') {
                 teams.push(gameObject()[side][teamAttr])
            }
        }

    }
    return teams
}

console.log(`The teams that played tonight are the ${teamNames().join(" & the ")}`)

const playerNumbers = (team) => {
     let jerseys = []
    for (const side in gameObject()) {
        if (gameObject()[side]['teamName'] === team) {
            for (const player in gameObject()[side]['players']) {
                jerseys.push(gameObject()[side]['players'][player]['number'])
            }
        }
    }
    return jerseys
}

console.log(`The best teams player jersey numbers are ${playerNumbers("Brooklyn Nets")}! Lets Go Nets!!!!!`)

function playerStats(name) {
     for (const side in gameObject()) {
        for(const teamAttr in gameObject()[side]) {
            if (teamAttr === 'players') {
                 for (const player in gameObject()[side][teamAttr]) {
                    if (player === name) {
                        return gameObject()[side][teamAttr][player]
                     }
                 }
             }
         }
     }
}

console.log(playerStats("Jason Terry"))

const bigShoeRebounds = () => {
    let shoeSize = []
    let theTeam = ""
    let thePlayer = ""
    for (const side in gameObject()) {
        for (const teamAttr in gameObject()[side]) {
            if (teamAttr === 'players') {
                for (const player in gameObject()[side][teamAttr]) {
                            shoeSize.push(gameObject()[side][teamAttr][player]['shoe']);
                }    
            }
                    
        }
    } 
    for (const side in gameObject()) {
        for (const teamAttr in gameObject()[side]) {
            if (teamAttr === 'players') {
                for (const player in gameObject()[side][teamAttr]) {
                    if (Math.max.apply(null,shoeSize) === gameObject()[side][teamAttr][player]['shoe']) {
                                return gameObject()[side]['players'][player]['Rebounds']
                    }
                }
            }
        }
    }
}

console.log(`It just so happens that the player with the biggest shoes, scored ${bigShoeRebounds()} rebounds!`)


const mostPointsScored = () => {
    let pointsScored = []
    for (const side in gameObject()) {
        debugger;
        for (const teamAttr in gameObject()[side]) {
            if (teamAttr === 'players') {
                for (const player in gameObject()[side][teamAttr]) {
                            pointsScored.push(gameObject()[side][teamAttr][player]['Points']);
                }    
            }
                    
        }
    }
        debugger;    
    for (const side in gameObject()) {
        for (const teamAttr in gameObject()[side]) {
            if (teamAttr === 'players') {
                for (const player in gameObject()[side][teamAttr]) {
                    if (Math.max.apply(null,pointsScored) === gameObject()[side][teamAttr][player]['Points']) {
                                return player
                    }debugger;
                }
            }
        }
    }
}

console.log(`${mostPointsScored()} scored the most points!!!`)

