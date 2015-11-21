var Immutable = require('immutable');
var dbmap = Immutable.fromJS([
    {
        set: 'Smash Up',
        faction: 'Aliens',
        description: 'Aliens love to mess with people, and they love to mess with other players even more. From bouncing minions back to players\' hands, to replacing bases in play, aliens are out to have a great time, at any planet\'s expense.'
    },
    {
        set: 'Smash Up',
        faction: 'Dinosaurs',
        description: 'If there\'s one thing dinosaurs know how to do... actually, with a brain the size of a walnut, they don\'t really know how to do anything. But they are big. And — holy cats! — someone gave them lasers!'
    },
    {
        set: 'Smash Up',
        faction: 'Ninjas',
        description: 'If you can see a ninja, chances are you\'re already dead (and if you can see them while dead, skip ahead to the zombie section). I don\'t want to give away the secrets or anything, but most of what this faction does is sneaky, happens fast, and at the last second. So look out for that.'
    },
    {
        set: 'Smash Up',
        faction: 'Pirates',
        description: 'You know what\'s better than roving the high seas? Roving anywhere you want. Pirates buckle their swashes in every port, and you\'ll walk the plank if you don\'t like it.'
    },
    {
        set: 'Smash Up',
        faction: 'Robots',
        description: 'Captains of industry built the robots, and then the robots took over and made the process even more efficient! Now they can churn out more little, highly specialized bots than their enemies can handle. Oh, and a few massive ones as well...'
    },
    {
        set: 'Smash Up',
        faction: 'Tricksters',
        description: 'Stealing things, stopping things, starting things, hiding your keys in the morning, collecting underpants for profit... for years, you\'ve thought of these little people as pests. Now they\'ve turned up as pesticide.'
    },
    {
        set: 'Smash Up',
        faction: 'Wizards',
        description: 'Presto! Wizards conjure what they need with actions galore. They just keep pulling things out of their hats, so watch their hands. Or their hts... of that big portal to another reality they just opened in your kitchen.'
    },
    {
        set: 'Smash Up',
        faction: 'Zombies',
        description: '"They\'re coming to get you, Player 2." It\'s hard to keep a good walker down. Zombies just keep coming back, and sometimes they come in waves. Sending zombies to the discard pile isn\'t "so long," it\'s just "see you later!"'
    },
    {
        set: 'Awesome Level 9000',
        faction: 'Bear Cavalry',
        description: 'The Tsar wasn\'t satisified with mere horses. So you\'re pretty much screwed. You can run away from them. Or you can get killed. Sometimes you get both. Just count yourself lucky that the bears aren\'t also riding sharks.'
    },
    {
        set: 'Awesome Level 9000',
        faction: 'Ghosts',
        description: 'In that darkest night at the old mansion an eerie light shone through the attic windows... even though no one was home. Ethereal ghosts gain power by having less of the tangible world. The faster you empty your hand, the stronger these spooks become!'
    },
    {
        set: 'Awesome Level 9000',
        faction: 'Killer Plants',
        description: 'Feed them, Seymour! (Don\'t do it Seymour!) Because these guys grow all on their own. They become stronger the longer they remain in play, so plants can be a major problem for anyone who came to the table without garden shears.'
    },
    {
        set: 'Awesome Level 9000',
        faction: 'Steampunks',
        description: 'Jules Verne once said, "Hey, Steampunks. Nice threads." Ever since that fateful day, these retronauts have been classing up the joint everywhere they go. Any base in the game will look smarter and be just a bit friendlier for full-on Steampunk domination.'
    },
    {
        set: 'The Obligatory Cthulhu Set',
        faction: 'Minions of Cthulhu',
        description: "Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn! Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn! Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn!"
    },
    {
        set: 'The Obligatory Cthulhu Set',
        faction: 'Elder Things',
        description: "From reaches beyond space and time come these incredible horrors, bent on... bent on... well we really don't know, do we? Everytime we learn a little bit, we go nuts. Perhaps its the madness they cause that gives them power after all..."
    },
    {
        set: 'The Obligatory Cthulhu Set',
        faction: 'Innsmouth',
        description: "Ah Innsmouth, idyllic little fishing village on the new England coast. Sample their excellent seafood. Become their excellent seafood! That's right, you too can become a fish and live with Dagon below the depths. They may look like simple mutants, but in great numbers and with great power the residents of Innsmouth will welcome you in the fold. Or else."
    },
    {
        set: 'The Obligatory Cthulhu Set',
        faction: 'Miskatonic University',
        description: "Go 'Pods! Go 'Pods! Welcome to your first days at Miskatonic University! We will shape you into a student of the sciences both natural and... otherwise. Certainly our courses seem intense, but there always has to be a small sacrifice for knowledge. \"Ex Ignorantia Ad Sapientiam; E Luce Ad Tenebras.\""
    },
    {
        set: 'Science Fiction Double Feature',
        faction: 'Cyborg Apes',
        description: "In a daring raid on a top secret research facility, apes stole the latest in cybernetic enhancements, and are now enacting their centuries-old plan to take over the world! Combining their natural athleticism and powerful strength with high-tech augmentations, these apes will go bananas all over your opponents!"
    },
    {
        set: 'Science Fiction Double Feature',
        faction: 'Shapeshifters',
        description: "Far below the surface of the earth, strange amorphous creatures have developed a thriving world, based on the manipulation of their own genetics. Now they plan to apply that knowledge to conquer our world above. Taking samples of the most powerful creatures and warriors they can find, these shapeshifters can use the best of whoever they copy."
    },
    {
        set: 'Science Fiction Double Feature',
        faction: 'Super Spies',
        description: "The shadow war between International Secret Intelligence and the evil HAVOC (Henchman and Villains of Chaoes) continues. HAVOC's schemes threaten the world, from weather-changing satellites to lasers mounted on secret moon bases, they can only be opposed by the daring agents of the ISI. Using the latest in espionage technology, the ISI will be able to foil your opponents' plans."
    },
    {
        set: 'Science Fiction Double Feature',
        faction: 'Time Travelers',
        description: "The time stream has been compromised. Robots from the future mingle with pirates, extinct dinosaurs move with magical wizards... everything is all smashed up! That's where the Time Patrol steps in. Organized in 1976 and led by the enigmatic Doctor When, the Time Patrol works to keep time flowing... in the manner they deem best."
    }
]);

module.exports.db = dbmap;
module.exports.getSets = function() {
    var sets = dbmap.map(function(x) {
        return Immutable.fromJS({
            set: x.get('set'),
            factions: getSetFactions(x.get('set')).toArray()
        });
    }).toSet();
    return sets.sortBy(function(x) { return x.get('set'); });
}

module.exports.getSetFactions = getSetFactions;
function getSetFactions(setName) {
    return dbmap
        .filter(function(x) { return x.get('set') === setName; })
        .sortBy(function(x) { return x.get('faction'); });
}