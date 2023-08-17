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
        description: 'Presto! Wizards conjure what they need with actions galore. They just keep pulling things out of their hats, so watch their hands. Or their hats... of that big portal to another reality they just opened in your kitchen.'
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
    },
    {
        set: 'Monster Smash',
        faction: 'Giant Ants',
        description: "The future of atomic energy was never supposed to have this disastrous effect! Mutant ants spill out from giant hills, intent on destroying our homes and all else that stands in their colony's way! The ants work as a great hive mind, spreading their power around as necessary to ensure their atomic-age victory!"
    },
    {
        set: 'Monster Smash',
        faction: 'Mad Scientists',
        description: "Working in the lab, late one night, my eyes beheld an eerie sight. For my monster from his slab, began to rise. And suddenly to my surprise, he did the Smash... Up. The Mad Scientists, intent on unlocking the mysteries of life, have instead released death in the form of powerful creations! Their toying with nature can empower various minions but at what cost? (Apologies to Bobby Pickett)"
    },
    {
        set: 'Monster Smash',
        faction: 'Vampires',
        description: "From the dark gothic recesses of ancient brooding castles, draped in black velvet, and probably listening to Bauhaus, the children of the night come to drink deep from Smash Up! Draining the very life from their victims, these cursed souls will bain power upon destroying your opponents' minions."
    },
    {
        set: 'Monster Smash',
        faction: 'Werewolves',
        description: "From howling at the moon, to cowing their pack, or ripping through town, the werewolves are here to assert their place as the alphas of Smash Up. Using their explosive power to beat down opponents, the werewolves will not relent in their drive to hunt and dominate all that stand against them."
    },
    {
        set: 'Pretty Pretty Smash Up',
        faction: 'Fairies',
        description: "From deep in the magical glades come these little sprites, bringing magical wishes and pixie dust to your plans for world domination. Don't judge them by their size. The fairies magic gives you great options in how to deal with your enemies."
    },
    {
        set: 'Pretty Pretty Smash Up',
        faction: 'Mythic Horses',
        description: "The power of togetherness shows through in Horses, whose mighty herds races across the land, trampling any who stand in their way. Not only normal horses, but pegasi, sea-horses and more will join the fight for the base! Remember that friendship is... smashable!"
    },
    {
        set: 'Pretty Pretty Smash Up',
        faction: 'Kitty Cats',
        description: "Can haz base? Kitty Cats have the power to compel those of weak will to do what they wish... and the power to have billions of internet memes. Perhaps those are the key? Either way, the Kitty Cats will use their alluring power to dominate the fight at any base. Then head out for a night of jazzy music in the alleys!"
    },
    {
        set: 'Pretty Pretty Smash Up',
        faction: 'Princesses',
        description: "Dream a dream of ruling over your enemies! Princesses will make every wish come true through the power of pure love and happiness. Which can be used, oddly, to order everyone about, and even destroy your enemies. Don't be fooled: these innocent looking beauties are few in number, but royal, strong and determined!"
    },
    {
        set: 'The Big Geeky Box',
        faction: 'Geeks',
        description: "Featuring Geek and Sundry, this deck will allow you to geek out like never before. Geek Dinosaurs, Geek Spies, you name it!"
    },
    {
        set: 'Smash Up: Munchkin',
        faction: 'Clerics',
        description: "Munchkin Clerics are here to spread the holy word ... and do some smiting while they're at it! They've got blessings for you and curses for your opponents, all for a low, low tithe!"
    },
    {
        set: 'Smash Up: Munchkin',
        faction: 'Dwarves',
        description: "Digging underground for most of their lives gives them a sensitivity to light, especially the light glinting off a piece of treasure! It also gives them impressive muscles. The last place you want to be is between a Munchkin Dwarf, his pickaxe, and some treasure."
    },
    {
        set: 'Smash Up: Munchkin',
        faction: 'Elves',
        description: "Munchkin Elves want everyone to live in harmony, and they'll bash whomever they have to over the head to make that happen. Elves are also quite happy to help you ... and help themselves, while they're at it."
    },
    {
        set: 'Smash Up: Munchkin',
        faction: 'Halflings',
        description: "It's hard to tell if you're up to your knees in children or Munchkin Halflings. A stabbing feeling in your thigh and the faint smell of sausage almost definitely means Halflings. They get everywhere and they just keep coming!"
    },
    {
        set: 'Smash Up: Munchkin',
        faction: 'Mages',
        description: "What's better than zapping your enemies with lightning from your fingertips? Summoning something else to do it for you! Munchkin Mages are great at distracting their foes by dropping monsters on their heads. Surprise!"
    },
    {
        set: 'Smash Up: Munchkin',
        faction: 'Orcs',
        description: "Birds travel in flocks. Deer travel in herds. Munchkin Orcs travel in hordes! It's hard to beat the overwhelming power of the horse, or the smell. No, really. Don't even try."
    },
    {
        set: 'Smash Up: Munchkin',
        faction: 'Thieves',
        description: "Keep your eyes on Munchkin Thieves at all times. The moment you look away, you'll find a dagger in your back and your precious treasure in someone else's back ... pocket!"
    },
    {
        set: 'Smash Up: Munchkin',
        faction: 'Warriors',
        description: "Whether they're from the windswept plains or the noblest castles, mighty Munchkin warriors live to fight! Using their brawn and all things point, warriors excel at killing things, especially Monsters."
    },
    {
        set: "It's Your Fault",
        faction: 'Dragons',
        description: "Here there be Dragons! These massive monstrosities of legend have come to Smash Up, and they took smashing bases literally. They have little time for your opponent's shenanigans, for other factions are crunchy, and taste good with ketchup."
    },
    {
        set: "It's Your Fault",
        faction: 'Mythic Greeks',
        description: "This is a story of a time long ago &ndash; a time of myth and legend. When the ancient gods were petty and cruel, and they plagued mankind with suffering... The ancient gods and heroes of Greek myth have returned, bringing their favors and curses, heroics and bravery to your Base battles."
    },
    {
        set: "It's Your Fault",
        faction: 'Sharks',
        description: "The most perfect killing machines. Predators that have evolved to the apex of their realm. And now they want our realm! Sharks are coming on land to show that they have what it takes to be at the top of the food chain in and out of the water. Just when you thought it was safe to go back to the convenience store..."
    },
    {
        set: "It's Your Fault",
        faction: 'Superheroes',
        description: "Faster than a speeding bullet. More powerful than an aggromotive. Able to leap tall Nukebots in a single bound... The mighty power of the comic page comes to life! Defeat your arch-nemesis with super strength, speed, and toughness. Then find out who wins the base in the next exciting issue!"
    },
    {
        set: "It's Your Fault",
        faction: 'Tornados',
        description: "Ok, yes, we hope you get the obvious joke. But hey, Tornados are pretty awesome in this game (not as much in real life). Get ready to spread minions all over the place with these excellent Shark Delivery Systems&trade;."
    },
    {
        set: "Cease and Desist",
        faction: 'Astroknights',
        description: "Quite a while back, in a grouping of stars not close to here, the Astroknights protected the various species of the galaxy! Boosting their strength, speed, and skill with the incredible powers of the Fours, they were the equal of armies. But now their time is past, and darkness reigns. Will a rag-tag group of heroes be able to defeat a massive juggernaut of an imperium and restore freedom? Hey, it's a space opera &mdash; of course they will!"
    },
    {
        set: "Cease and Desist",
        faction: 'Changerbots',
        description: "Quite a lot more than your eyes first perceive! The Changerbots hail from another world, but secretly move about ours in the form of everyday transportation. They change their form and abilities to fight a never-ending battle against their enemies, and protect the human race from their robotic shenanigans. They are also the subject of an absolutely terrible movie reboot, apparently."
    },
    {
        set: "Cease and Desist",
        faction: 'Ignobles',
        description: "In the game of kingly seats, you smash the base, or you are destroyed. The Ignobles can be trusted just about as far as you can throw them. Backstabbing, swapping sides, and the occasional party crashing is par for the course for these medieval schemers. Watch out for help offered from one of these untrustworthy types, it will be shorrt lived."
    },
    {
        set: "Cease and Desist",
        faction: 'Star Roamers',
        description: "These are the travels of the spaceship Undertaking. Its several-year mission: to find new worlds, seek out new life and attractice green ladies, to bravely go where no person has gone before! The Star Roamers travel about the board, using their incredible teleporting technology to send countless ensigns to their deaths, all in the name of base smashing!"
    },
    {
        set: "What Were We Thinking?",
        faction: 'Explorers',
        description: "This faction doesn't belong in a museum! They belong on bases! The Explorers use their fearless sense of adventure to move quickly onto new bases and establish your powere there quickly. By helping you control the flow of bases, they can nearly guarantee fortune and glory... or at least points."
    },
    {
        set: "What Were We Thinking?",
        faction: 'Grannies',
        description: "Everybody loves grandma! And grandma loves you, let me find something in my bag here for you... Grannies keep close tabs on the family, even if that family includes dinosaurs or zombies! They always know who is coming and going, and that slight busybody-ness can come in incredibly handy when planning your strategies for smashing bases."
    },
    {
        set: "What Were We Thinking?",
        faction: 'Rock Stars',
        description: "Hello Cleveland! Let's ROCK!!! Rock Stars want to put on the best show for their fans, and sell out the biggest venues. The biggest venues of course being those with the highest breakpoint. Put on a massive concert and focus on those bases for the win."
    },
    {
        set: "What Were We Thinking?",
        faction: 'Teddy Bears',
        description: "Who could possibly come between you and your bear when you were little? Nothing. Because those bears had more up their sleeves than you ever knew. Just try looking at their owners the wrong way and you're in trouble. In the sweetest ways possible!"
    },
    {
        set: "Big In Japan",
        faction: 'Mega Troopers',
        description: "Go go play on bases! Go go destroy minions! Go go Mega Troopers, You crazy Smash Up Mega Troopers! The Mega Troopers are the ultimate fighting team, snatching victory from the jaws of defeat. And should things get out of control, they can always call a giant frickin' robot and auto-win. Which they should probably just do earlier in the fight, but whatever."
    },
    {
        set: "Big In Japan",
        faction: 'Magical Girls',
        description: "Moonlight, dreams, love, and starshine! OMG, it's so kawaii!!!! The Magical Girls are undoubtedly cute, but they will surprise you with what they can do with their spells. And they work together as a team. Evil will have no chance against these girls."
    },
    {
        set: "Big In Japan",
        faction: 'Kaiju',
        description: "Giant monsters stomp around Tokyo, smashing countless buildings as they battle. Their amazing destructive power confounds scientists, whose greatest waponry proves useless against them. Who can stop the massive power of a guy in a rubber suit? We know! We'll let the precocious 10-year-old, with unexplained access to the Japanese military's most secure facilities, talk to it!"
    },
    {
        set: "Big In Japan",
        faction: 'Itty Critters',
        description: "They're tiny, and they come and go quickly, but once you learn which one to call when, the Itty Critters can really pack a punch. We know you'll want to have them all. If you can make these things as popular as certain other things (you know which ones) we'd be eternally grateful."
    },
    {
        set: "That '70s Expansion",
        faction: 'Disco Dancers',
        description: "Nothing defined the 1970s like Disco. Love it or hate it, this music shaped our image of that decade. And the people who loved it are here to turn the beat around all over their opponents! Don't assume that the leisure suit and roller skates make them pushovers, or you just might not make it to the last dance... Disco Dancers have learned the power of dancing together. Watch out as they copy each others' moves!"
    },
    {
        set: "That '70s Expansion",
        faction: 'Kung Fu Fighters',
        description: "Well, everyone was... Kung Fu Fighters have incredible martial skill that defies reality. Well, the defying reality bit was in large part due to wires... but still, they know how to dish out a beating. Kung Fu Fighters know that power flows like water, and can make it flow from minion to minion as they wish."
    },
    {
        set: "That '70s Expansion",
        faction: 'Truckers',
        description: "Trucker culture hit its height in the 1970s thanks to some amazing movies that came out in that decade. Truckers were the heroes of the open road, By keeping in touch through their CB radios, they could defy corrupt law enforcement and free small towns, all the while delivering the goods that kept America running. As you'd expect, the Truckers are all about action and transferring things, and you'll see that on their cards."
    },
    {
        set: "That '70s Expansion",
        faction: 'Vigilantes',
        description: "There's never been vigilante justice like '70s vigilante justice. Just as mean as the crime they fout, these hard-nosed heroes keep the streets safe for the good people of the city. They never back down, even when the odds are stacked way against them, because a good drink can help you shrug off anything. No matter what your opponent may throw at you, the vigilantes will answer."
    },
    {
        set: "Promo",
        faction: 'Sheep',
        description: "Decades of ewe-genics has transformed these harmless, dumb, grazing animals into harmful, dumb, grazing animals. They obediently and harmlessly follow other minions around from base to base... then they mercilessly crush their opponents with a wave of minions no one can stop. They are baaaaad news!"
    },
    {
        set: "Promo",
        faction: 'Knights of the Round Table',
        description: "This faction has no official flavor text because the Smash Up Knights of the Round Table has no rulebook. They ride all over the bases, completing quests to get various prizes."
    },
    {
        set: "Promo",
        faction: 'Teens',
        description: "This faction has no official flavor text because the Smash Up Teens has no rulebook."
    },
    {
        set: "The Bigger Geekier Box",
        faction: 'Smash Up All Stars',
        description: "You know how irritating it is when a company repackages a product with alternate art just to make you buy something you already own? This faction isn't like that at all. Nosirree. This is the Dream Team of Smash Up favorites. Yep, that's the ticket. They're the all-star team, looking for the space to jam the ball through a hoop."
    },
    {
        set: "Oops, You Did It Again",
        faction: 'Ancient Egyptians',
        description: "Many of our most esteemed historians and scientists of course believe that ancient Egyptians were helped along by aliens and creepy mummy magic. This is an accepted fact of modern science. And now it's your chance to use those powers against your opponents! The Ancient Egyptians use the new \"bury\" mechanic to leave surprises, both good and bad, on the board. Take care around them, you never know what lies hidden beneath the sands of time."
    },
    {
        set: "Oops, You Did It Again",
        faction: 'Cowboys',
        description: "Yeeeehaw!! Come out guns blazing with the rip-roarin'est faction to ever ride into Smash Up. The Cowboys are going to call you out at high noon, and make sure you go home in a pine box. Dueling is their strategy of choice, because who better to slap leather than the quickest guns in the west?"
    },
    {
        set: "Oops, You Did It Again",
        faction: 'Samurai',
        description: "Honor is a force stronger than tin! The Samurai of Smash Up face their enemies with a spirit of calm, ready to face their end in battle if their lord requires it. Using dueling, the samurai will take down their enemies, or die gloriously, bringing great esteem to their family. No broken cavalry or ring-bouncing required! Utz... Kampai!"
    },
    {
        set: "Oops, You Did It Again",
        faction: 'Vikings',
        description: "There's gold out there, treasure and wealth. Sure it belongs to other people, but why let that stop you? You're vikings! Raid and pillage your way to victory. The Vikings know that they could make better use of other people's cards. Why did they even bring cards to the game unless they weren't afraid to lose them?"
    },
    {
        set: "World Tour: International Incident",
        faction: 'Luchadors',
        description: "They're going to the top rope! The Luchadors bring the high-flying stunts of Mexican wrestling to the Smash Up squared-circle! These masked wrestlers defy gravity, and their opponents, using their signature techniques to get the pin, and of course, break the base! Beware their set-ups, because their follow-ups are usually brutal!"
    },
    {
        set: "World Tour: International Incident",
        faction: 'Mounties',
        description: "Turn of the century Canada *cue silent film piano*... the Great White North is protected by the noble Mounties and their... battle moose! The Mounties always get their man, no matter how devious, all while upholding the noble demeanor of Canada. They like to be around others, and it's not just friendliness -- they are gathering their strength to take over."
    },
    {
        set: "World Tour: International Incident",
        faction: 'Musketeers',
        description: "One for all, and all for one! Or three! Or really four, because there were four of them, but we'll ignore that, just like the title of the book! The Musketeers were the super heroes of Renaissance France, taking on corrupt elements with style and panache. Their quick skills with the blade were matched only by their quick wit. After biding their time, they explode into a dazzling series of actions."
    },
    {
        set: "World Tour: International Incident",
        faction: 'Sumo Wrestlers',
        description: "The powerful sumo wrestlers of Japan can really throw their weight around the bases! These massive warriors can knock back any enemies that come against them, but don't let their initial girth fool you. They will sacrifice cards for pwoer, and use that power to knock all opponents out of the ring ... and base!"
    },
    {
        set: "Excellent Movies, Dudes!",
        faction: 'Action Heroes',
        description: "Yo. Men of few words. Enjoy working alone. Good at it."
    },
    {
        set: "Excellent Movies, Dudes!",
        faction: 'Backtimers',
        description: "Are you ready to feel the power of love? Then get ready to doubleback in time with the Backtimers! A teenager, his scientist friend, and their new time machine can prepare for the future by delaying things so they appear at just the right time. This faction is heavy..."
    },
    {
        set: "Excellent Movies, Dudes!",
        faction: 'Extramorphs',
        description: "*ping* Six meters. *ping* That can't be. That's inside the deck. It's reading right man. Look! As Extramorphs, you can enjoy terrorizing and forcing your opponents into your unique circle of life: egg, Head Grabber, Chestbreaker, adult, Hive Queen. Again. And again. And again."
    },
    {
        set: "Excellent Movies, Dudes!",
        faction: 'Wraithrustlers',
        description: "Who are you going to ring? Or fax? The Wraithrustlers of course! These pursuers of the paranormal are opportunistic, maneuvering Wraiths to where they bother their opponents, and then rounding them up to help themselves the most. And all without cats and dogs living together!"
    },
    {
        set: "World Tour: Culture Shock",
        faction: 'Anansi Tales',
        description: "The great trickster Anansi the Spdier and the other amazing characters of West African folklore bring their fantastic stories to Smash Up. Anansi collected stories, but also traded them as he traveled. And he nearly always got the better part of any deal. If you are as clever as Anansi, you can benefit both from playing your cards and from giving them away."
    },
    {
        set: "World Tour: Culture Shock",
        faction: 'Ancient Incas',
        description: "Children of the Sun, your time has just begun... well, it was quite a while ago, but the impact of the ancient Incan civilization will still have great impact, on a card game that has violent grandmas and dinosaurs with laser guns. Seriously, we might owe history better... anyway, our Ancient Incas rock! Just like the real Incan empire built massive buildings and long highways with advanced engineering techniques, our will build up your bases like never before!"
    },
    {
        set: "World Tour: Culture Shock",
        faction: "Grimms' Fairy Tales",
        description: "From the woodlands and cottages of Germany come the talkes of the Brothers Grimm. From classics such as Hansel and Gretel, to really bizarre stuff like a sentient sausage, you'll be able to bring the stories to life. Minions who work better when their tales are complete just might mean two little kids with pretzels might bring down a Zombie Lord or Ninja Master."
    },
    {
        set: "World Tour: Culture Shock",
        faction: 'Polynesian Voyagers',
        description: "The Islanders of the Pacific Ocean are famous for their exploration of island chains, and this faction will do just that. Not only landing on unexplored bases, but discovering all-new bases that weren't even in play yet! Not only that, but these voyagers channel the pwoer of their tattoos to gain even greater power. You're welcome!"
    },
    {
        set: "World Tour: Culture Shock",
        faction: 'Russian Fairy Tales',
        description: "The legendary tales of Russia enter Smash Up and bring with them fantastical characters, including the dangerous Baba Yaga. Transformation is in many of these stories, and this faction takes advantage of that. You can change your minions for the better, and your opponents' minions for the worse, faster than they can keep up!"
    },
]);

module.exports.db = dbmap;
module.exports.getSets = getSets;
function getSets() {
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

module.exports.getSet = function(setName) {
    return getSets()
        .filter(function(x) { return x.get('set') === setName; })
        .get(0);
}

module.exports.getFaction = function(factionName) {
    return dbmap
        .filter(function(x) { return x.get('faction') === factionName; })
        .get(0);
}