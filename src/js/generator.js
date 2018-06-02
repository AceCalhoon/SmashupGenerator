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
function generateScenario(filter, playerCount, minimumSets) {
    console.log('Generating...', filter, playerCount, minimumSets);
    if(!playerCount) {
        return generateRoyaleScenario(filter);
    }

    var filteredSets = [];
    var totalWeight = 0;
    for(var setName in filter) {
        var filterSet = filter[setName];
        if(filterSet.selected) {
            var setInfo = {
                name: setName,
                factions: [],
                featured: filterSet.featured
            };

            for(var factionName in filterSet.factions) {
                if(filterSet.factions[factionName]) {
                    setInfo.factions.push(factionName);
                }
            }

            totalWeight += setInfo.factions.length;
            
            filteredSets.push(setInfo);
        }
    }

    var totalFilteredSetLength = filteredSets.length;
    var chosenSets = [];
    var chosenFactionCount = 0;

    for(var i in filteredSets) {
        if(filteredSets[i].featured) {
            var set = filteredSets[i];
            console.log('Pushing featured set', set);
            chosenSets.push(popIndex(filteredSets, i));
            chosenFactionCount += set.factions.length;
        }
    }

    while(chosenSets.length < totalFilteredSetLength && (
        chosenSets.length < minimumSets || chosenFactionCount < playerCount * 2)) {
        var randIndex = getRandomInt(0, totalWeight);
        for(var i in filteredSets) {
            var set = filteredSets[i];
            randIndex -= set.factions.length;
            if(randIndex <= 0) {
                chosenSets.push(popIndex(filteredSets, i));
                chosenFactionCount += set.factions.length;
                break;
            }
        }
    }

    console.log('Sets chosen', chosenSets, chosenSets.map(function(set) { return set.name; }));

    var factions = [];
    for(var i in chosenSets) {
        var set = chosenSets[i];
        for(var f in set.factions) {
            factions.push({ set: set.name, faction: set.factions[f]});
        }
    }

    var teams = [];
    var totalFactions = factions.length;
    for(var i = 0; i < playerCount && i < Math.floor(totalFactions / 2); ++i) {
        var selectedFactions = [];

        var randIndex = getRandomInt(0, factions.length);
        selectedFactions.push(popIndex(factions, randIndex));
        randIndex = getRandomInt(0, factions.length);
        selectedFactions.push(popIndex(factions, randIndex));

        selectedFactions = selectedFactions.sort(function(a,b) {
            return a.faction.localeCompare(b.faction);
        });

        teams.push({
            Faction1: selectedFactions[0],
            Faction2: selectedFactions[1]
        })
    }

    /*
        Return format:
        [
            {
                Faction1: {
                    set: <setName>,
                    faction: <factionName>
                },
                Faction2: {
                    set: <setName>,
                    faction: <factionName>
                }
            },
            ...
        ]
    */
    return teams;
}

function generateRoyaleScenario(filter) {
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
    while(factions.length >= 2) {
        var randIndex = getRandomInt(0, factions.length);
        var selectedFactions = [];
        selectedFactions.push(popIndex(factions, randIndex));
        randIndex = getRandomInt(0, factions.length);
        selectedFactions.push(popIndex(factions, randIndex));
        
        selectedFactions = selectedFactions.sort(function(a,b) {
            return a.faction.localeCompare(b.faction);
        });
        
        teams.push({
            Faction1: selectedFactions[0],
            Faction2: selectedFactions[1]
        })
    }

    /*
        Return format:
        [
            {
                Faction1: {
                    set: <setName>,
                    faction: <factionName>
                },
                Faction2: {
                    set: <setName>,
                    faction: <factionName>
                }
            }
        ]
    */
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