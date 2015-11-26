var factiondb = require('./faction-db.js');
/* filter format:
   {
       <setName>: {
           selected: true,
           factions: {
               <factionName>: true,
               <factionName>: false
           }
       }
   }
*/
function generateScenario(filter) {
    var factions = [];
    for(var setName in filter) {
        var filterSet = filter[setName];
        if(filterSet.selected) {
            for(var factionName in filterSet.factions) {
                if(filterSet.factions[factionName]) {
                    factions.push({set: setName, faction: factionName});
                }
            }
        }
    }
    
    var teams = [];
    while(factions.length > 2) {
        var randIndex = getRandomInt(0, factions.length);
        var faction1 = popIndex(factions, randIndex);
        randIndex = getRandomInt(0, factions.length);
        var faction2 = popIndex(factions, randIndex);
        
        teams.push({
            Faction1: faction1,
            Faction2: faction2
        })
    }

    return teams;
}

// Returns a random integer between min (included) and max (excluded) 
// Using Math.round() will give you a non-uniform distribution! 
// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random 
function getRandomInt(min, max) { 
    return Math.floor(Math.random() * (max - min)) + min; 
}

function popIndex(arr, index) {
    var val = arr[index];
    arr.splice(index, 1);
    
    return val;
}

module.exports.generateScenario = generateScenario;