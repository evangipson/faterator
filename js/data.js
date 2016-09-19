// We need to augment the FATERATOR module with
// all of our data for our generator!
// The data should all have a guid associated that
// isn't already inside this master list.
var FATERATOR = (function(fateratorModule) {

    // Variables I need for this module
    // --------------------------------
    
    // Defining our carrier for the data of Faterator
    fateratorModule.DATA = {
        // The types of data we have
        "names": {},
        "treasures": {},
        "aspects": {},
        "troubles": {},
        "stunts": {}
    };
    // Define our names first, that's the most
    // important data for our functions below.
    // These are seeds or syllables for our name generator.
    fateratorModule.DATA.names = {
        // First Syllables
        "first" : [
            {
                "value": "Ga"
            },
            {
                "value": "Ab"
            },
            {
                "value": "Ac"
            },
            {
                "value": "Ak"
            },
            {
                "value": "Ack"
            },
            {
                "value": "Ay"
            },
            {
                "value": "Az"
            },
            {
                "value": "Aw"
            },
            {
                "value": "Bo"
            },
            {
                "value": "Bi"
            },
            {
                "value": "By"
            },
            {
                "value": "Xu"
            },
            {
                "value": "Yi"
            },
            {
                "value": "Fu"
            },
            {
                "value": "Fo"
            },
            {
                "value": "Va"
            },
            {
                "value": "Vi"
            },
            {
                "value": "Hi"
            },
            {
                "value": "He"
            },
            {
                "value": "Mi"
            },
            {
                "value": "Ma"
            },
            {
                "value": "Mu"
            },
            {
                "value": "Loo"
            },
            {
                "value": "Lu"
            },
            {
                "value": "Lo"
            },
            {
                "value": "Py"
            },
            {
                "value": "Pi"
            },
            {
                "value": "Paa"
            },
            {
                "value": "Po"
            },
        ],
        // Second Syllables
        // NOTE: Not used 100% of the time.
        "second" : [
            {
                "value": "r"
            },
            {
                "value": "a"
            },
            {
                "value": "b"
            },
            {
                "value": "y"
            },
            {
                "value": "i"
            },
            {
                "value": "e"
            },
            {
                "value": "lo"
            },
            {
                "value": "li"
            },
            {
                "value": "no"
            },
            {
                "value": "ni"
            },
            {
                "value": "na"
            },
            {
                "value": "ya"
            },
            {
                "value": "ta"
            },
            {
                "value": "to"
            },
            {
                "value": "ys"
            },
            {
                "value": "di"
            },
            {
                "value": "da"
            },
            {
                "value": "ka"
            },
            {
                "value": "ki"
            },
            {
                "value": "ku"
            },
            {
                "value": "ri"
            },
            {
                "value": "hsh"
            },
            {
                "value": "xi"
            },
            {
                "value": "z"
            },
            {
                "value": "zi"
            },
            {
                "value": "ze"
            },
            {
                "value": "za"
            }
        ],
        // Third syllables
        "third" : [
            {
                "value": "k"
            },
            {
                "value": "m"
            },
            {
                "value": "n"
            },
            {
                "value": "t"
            },
            {
                "value": "tt"
            },
            {
                "value": "l"
            },
            {
                "value": "ae"
            },
            {
                "value": "e"
            },
            {
                "value": "pic"
            },
            {
                "value": "stic"
            },
            {
                "value": "ope"
            },
            {
                "value": "ium"
            },
            {
                "value": "lon"
            },
            {
                "value": "don"
            },
            {
                "value": "bon"
            },
            {
                "value": "con"
            },
            {
                "value": "qon"
            },
            {
                "value": "kin"
            },
            {
                "value": "son"
            },
            {
                "value": "yon"
            },
            {
                "value": "yin"
            },
            {
                "value": "lin"
            },
            {
                "value": "min"
            },
            {
                "value": "qin"
            },
            {
                "value": "mer"
            },
        ]
    };
    // Also should define the pieces of our treasure for
    // our generator
    fateratorModule.DATA.treasures = {
        // List of a bunch of treasure-y adjectives
        "adjective" : [
            { 
                "value": "Black",
                "guid": "CA8DDgcMCQo"
            },
            { 
                "value": "Obsidian",
                "guid": "BQ4BDgUPCg4"
            },
            { 
                "value": "Emerald",
                "guid": "AAsFDQUHAQ0"
            },
            { 
                "value": "Malachite",
                "guid": "CQ8EBAUDDww"
            },
            { 
                "value": "Jade",
                "guid": "DwoIBgUGCQg"
            },
            { 
                "value": "Tiger's Eye",
                "guid": "CAwHCwgJCwk"
            },
            { 
                "value": "Onyx",
                "guid": "Dg0DAAUBCgU"
            },
            { 
                "value": "Ruby",
                "guid": "BQEDDAQEBQw"
            },
            { 
                "value": "Sapphire",
                "guid": "DQoEBw4BBA4"
            },
            { 
                "value": "Diamond",
                "guid": "DQgECAINDgg"
            },
            { 
                "value": "Plutonium",
                "guid": "AA0LAQQADAM"
            },
            { 
                "value": "Xenon",
                "guid": "AAMHAgUJDgg"
            },
            { 
                "value": "Neon",
                "guid": "BQcFBQIJDQM"
            },
            { 
                "value": "Radon",
                "guid": "AwECDgUAAww"
            },
            { 
                "value": "Nitrogen",
                "guid": "DgQFBAkLDwQ"
            },
            { 
                "value": "Hydrogen",
                "guid": "CQsPBgoJDgk"
            },
            { 
                "value": "Einsteinium",
                "guid": "BQIFAA0DBQ4"
            },
            { 
                "value": "Oxygen",
                "guid": "AQgIAgsMDg0"
            },
            { 
                "value": "Water",
                "guid": "DgMABAsMBgY"
            },
            { 
                "value": "Earth",
                "guid": "BAcLDQEDCgk"
            },
            { 
                "value": "Air",
                "guid": "BQQDDw8CAAQ"
            },
            { 
                "value": "Lightning",
                "guid": "AQULAgMBCww"
            }
        ],
        // List of a bunch of base treasures
        "noun" : [
            { 
                "value": "Ring",
                "guid": "CgEDAAcJAwY"
            },
            { 
                "value": "Gem",
                "guid": "BQ0LDgwGBwU"
            },
            { 
                "value": "Stone",
                "guid": "CgoMDg0EDwM"
            },
            { 
                "value": "Necklace",
                "guid": "CgkLDQkCCwA"
            },
            { 
                "value": "Amulet",
                "guid": "CQ0FDwEHAgs"
            },
            { 
                "value": "Sword",
                "guid": "DgkIDwAACAI"
            },
            { 
                "value": "Greataxe",
                "guid": "BgkFDAsHDwY"
            },
            { 
                "value": "Greatsword",
                "guid": "DQcMCAoOCg4"
            },
            { 
                "value": "Rapier",
                "guid": "DgQGCwYNAQg"
            },
            {
                "value": "Blaster Pistol",
                "guid": "BQ8CBgIACAY"
            },
            { 
                "value": "Raygun",
                "guid": "DAoDBwIHBwU"
            },
            { 
                "value": "Laser Rifle",
                "guid": "DQEOBQINDQg"
            },
            { 
                "value": "Plasma Rifle",
                "guid": "DAsKCQUKCwA"
            },
            { 
                "value": "Cube",
                "guid": "BgUCBwEKCAU"
            },
            { 
                "value": "Sphere",
                "guid": "CgEHAgINBgg"
            },
            { 
                "value": "Orb",
                "guid": "DQsNBAYJBAc"
            },
            { 
                "value": "Broach",
                "guid": "DA4IBwEHAAw"
            },
            { 
                "value": "Circlet",
                "guid": "DAoKCQgDCQ4"
            },
            { 
                "value": "Coin",
                "guid": "AwQPCgcKDA0"
            },
            { 
                "value": "Sculpture",
                "guid": "CQQBBQgBDg8"
            },
            { 
                "value": "Crown",
                "guid": "BAcGAgwFCws"
            }
        ]
    };
    // Array to hold the player aspect guids to ensure
    // no duplicates!
    fateratorModule.playerAspectGuids = [];
    
    // Functions I need to generate words beyond names.
    // ------------------------------------------------

    // Returns a number that is random within range
    fateratorModule.randomNum = function(highNum) {
        return Math.floor(Math.random() * parseInt(highNum));
    };
    // Return ONE name that sounds fantasy-y
    fateratorModule.createFantasyName = function() {
        // Pull in the names from our DATA object
        firstSyl = fateratorModule.DATA.names.first;
        secondSyl = fateratorModule.DATA.names.second;
        thirdSyl = fateratorModule.DATA.names.third;
        // return three syllables - 75% chance
        if(fateratorModule.randomNum(100) < 75) {
            return firstSyl[fateratorModule.randomNum(firstSyl.length)].value + secondSyl[fateratorModule.randomNum(secondSyl.length)].value + thirdSyl[fateratorModule.randomNum(thirdSyl.length)].value;
        }
        // otherwise just return two
        return firstSyl[fateratorModule.randomNum(firstSyl.length)].value + thirdSyl[fateratorModule.randomNum(thirdSyl.length)].value;
    };
    // Return a full name
    fateratorModule.createFullName = function() {
        return fateratorModule.createFantasyName() + " " + fateratorModule.createFantasyName();
    };
    // Function that will create ONE mythical
    // or cool-sounding treasure
    fateratorModule.createTreasure = function() {
        // Import our data from our DATA object
        treasureAdjective = fateratorModule.DATA.treasures.adjective;
        treasure = fateratorModule.DATA.treasures.noun;
        // Return some configuration of that data
        return treasureAdjective[fateratorModule.randomNum(treasureAdjective.length)].value + " " + treasure[fateratorModule.randomNum(treasure.length)].value;
    };
    
    // Advanced Stats
    // --------------
    // These stats use all the functions and data
    // defined above.

    // Now we can define our aspects since our names
    // and seed functions are declared
    fateratorModule.DATA.aspects = {
        // Player beliefs
        "beliefs" : [
            {
                //"meta" : fateratorModule.createFantasyName().value,
                "value" : "The only good " + fateratorModule.createFantasyName() + " is a dead one",
                "guid": "CwgGBAkLCAo"
            },
            {
                "value" : "Hates " + fateratorModule.createFullName(),
                "guid": "CgUHCwEIDgY"
            },
            {
                "value" : "Hates the " + fateratorModule.createFantasyName() + " family",
                "guid": "CwcLAwMPDAQ"
            },
            {
                "value" : "Never trust a " + fateratorModule.createFantasyName(),
                "guid": "DQ0PAgQACg8"
            },
            {
                "value" : "Sworn to avenge their Father",
                "guid": "CgMNBAYAAww"
            },
            {
                "value" : "Sworn to avenge their Mother",
                "guid": "CgwOBAAPDwg"
            },
            {
                "value" : "Sworn to avenge their Family",
                "guid": "CA8HAAsPDgQ"
            }
        ],
        // Possessions/Items/Artifacts
        "items" : [
            {
                "value": "Owner of the " + fateratorModule.createFantasyName() + " amulet",
                "guid": "DwYHDA4GAgg"
            },
            {
                "value": "Owner of the " + fateratorModule.createFantasyName() + " artifact",
                "guid": "BwwODAMEDAs"
            },
            {
                "value": "Pilot of The " + fateratorModule.createFantasyName() + " ship",
                "guid": "CA8DCw0LDAk"
            },
            {
                "value": "Wielder of a fabled " + fateratorModule.createTreasure(),
                "guid": "DQYODg0BDgQ"
            }
        ],
        // Player relationships with NPCs/Groups
        "relationships" : [
            {
                "value" : "Sibling of " + fateratorModule.createFullName(),
                "guid": "DAUHDwIMAAM"
            },
            {
                "value" : "Child of " + fateratorModule.createFullName(),
                "guid": "Dg8ECgECBQY"
            },
            {
                "value" : "Hates the " + fateratorModule.createFantasyName() + " family",
                "guid": "CwcLAwMPDAQ"
            },
            {
                "value" : "Never trust a " + fateratorModule.createFantasyName(),
                "guid": "DQ0PAgQACg8"
            },
            {
                "value" : "Parent of " + fateratorModule.createFullName(),
                "guid": "BQcEBAAPCQc"
            },
            {
                "value" : "Enemy of the " + fateratorModule.createFantasyName(),
                "guid": "DwYCDAIEBQM"
            },
            {
                "value" : "Raised in " + fateratorModule.createFantasyName() + " royalty",
                "guid": "Cg4JCgcHBQs"
            },
            {
                "value" : "Friend of the " + fateratorModule.createFantasyName(),
                "guid": "BQcPDgALCgg"
            }
        ],
        // Titles and traits
        "titles" : [
            {
                "value" : "Army General",
                "guid": "DwQCAgkIAwM"
            },
            {
                "value" : "Street Waif",
                "guid": "DAwICAMGCwA"
            },
            {
                "value" : "Of Noble Blood",
                "guid": "Cg8IAQQODgs"
            },
            {
                "value" : "Amnesiac",
                "guid": "AwYNBAEIAQg"
            },
            {
                "value" : "Sharp Eyed",
                "guid": "AQ8BCQQDAgo"
            },
            {
                "value" : "Sharpshooter",
                "guid": "DAsOCQ4DAAA"
            },
            {
                "value" : "Government Official",
                "guid": "CgMJAAUAAAI"
            },
            {
                "value" : "Dungeon Hunter",
                "guid": "AwsPCAAODww"
            },
            {
                "value" : "Trouble Seeker",
                "guid": "BwoBDQYFAQo"
            },
            {
                "value" : "Thief",
                "guid": "CQAEDw0OCwo"
            }
        ]
    };
    // Character troubles
    fateratorModule.DATA.troubles = {
        // Player beliefs
        "personalQuirks" : [
            {
                //"meta" : fateratorModule.createFantasyName().value,
                "value" : "Greedy",
                "guid": "CgIDCQUMDAQ"
            },
            {
                "value" : "Nosy",
                "guid": "CAcNCgQIAAE"
            },
            {
                "value" : "Awkward",
                "guid": "BAoHBgwJCgU"
            },
            {
                "value" : "Superstitious",
                "guid": "DQQEBAUJBwg"
            },
            {
                "value" : "Suspicious",
                "guid": "DAYICA0FAAw"
            },
            {
                "value" : "Reckless",
                "guid": "CA4JBQIHCgQ"
            }
        ],
        // Personal Mechanic-based Troubles
        "personalMechanics" : [
            {
                "value": "Compelled by their " + fateratorModule.createTreasure(),
                "guid": "BAoGCA4NBAE"
            },
            {
                "value": "Has a " + fateratorModule.createTreasure() + " stuck on their body",
                "guid": "DQUNBwcODQ4"
            }
        ]
    };
    // Character stunts
    // NOTE: No stunts use createTreasure() yet,
    // but I can think of a few instances where
    // it would, so I'm moving it here below createTreasure's
    // function expression.
    // Set up all of our stunts, which each
    // have a value, description, and guid.
    fateratorModule.DATA.stunts = {
        // Quick-based stunts
        "quickStunts" : [
            {
                "value" : "Deft Hands",
                "description": "Because of my Deft Hands, I'm able to add 2 to my quick roll while I attempt to steal or disarm.",
                "guid": "DAYFDgwGBwY"
            }
        ],
        // Flashy-based stunts
        "flashyStunts" : [
            {
                "value" : "Acrobat",
                "description": "Because I'm an acrobat, I can add 2 to my flashy roll when I need to get around.",
                "guid": "CwkMCgsGCAg"
            }
        ],
        // Force-based stunts
        "forcefulStunts" : [
            {
                "value" : "Super Strength",
                "description": "Because of my super strength, I'm able to add 2 to my strength roll when I move something or fight.",
                "guid": "BQ0MDgsJAgA"
            }
        ],
        // Stunts that players use carefully
        "carefulStunts" : [
            {
                "value" : "Eagle Eye",
                "description": "Because I have eagle eye, I can add 2 to my careful roll when I try and notice something or create an advantage.",
                "guid": "AQYJAgUDCAs"
            }
        ],
        // Clever-based stunts
        "cleverStunts" : [
            {
                "value" : "White Lie",
                "description": "Because I can white lie, I can add 2 to my clever roll while I'm in social interactions when I establish facts.",
                "guid": "DwwFDg0DAg8"
            }
        ],
        // Sneaky-based stunts
        "sneakyStunts" : [
            {
                "value" : "Soft-Footed",
                "description": "Because I'm soft-footed, I can add 2 to my sneaky roll while I'm trying to bypass NPCs.",
                "guid": "CwoKCAsBCwM"
            }
        ]
    };
    // Function that will create a generic
    // aspect and return it.
    fateratorModule.createAspect = function() {
        // We'll return this.
        var returnAspect;
        // Variables for this are defined within
        // Decide which array to return an element from
        if(fateratorModule.randomNum(100) < 25) {
            // We're using the items array, so 
            // let's import that from our DATARATOR
            var beliefs = fateratorModule.DATA.aspects.beliefs;
            returnAspect = beliefs[fateratorModule.randomNum(beliefs.length)];
        }
        else if(fateratorModule.randomNum(100) < 25) {
            // We're using the items array, so 
            // let's import that from our DATARATOR
            var items = fateratorModule.DATA.aspects.items;
            returnAspect = items[fateratorModule.randomNum(items.length)];
        }
        else if(fateratorModule.randomNum(100) < 25) {
            // We're using the items array, so 
            // let's import that from our DATARATOR
            var relationships = fateratorModule.DATA.aspects.relationships;
            returnAspect = relationships[fateratorModule.randomNum(relationships.length)];
        }
        else {
            // We're using the items array, so 
            // let's import that from our DATARATOR
            var titles = fateratorModule.DATA.aspects.titles;
            returnAspect = titles[fateratorModule.randomNum(titles.length)];
        }
        // Make sure we aren't returning an aspect that already is displayed
        for(var i = 0; i < fateratorModule.playerAspectGuids.length; i++) {
            // If we have the same guid - let's run the function again
            // to pick a new one.
            if(returnAspect.guid == fateratorModule.playerAspectGuids[i]) {
                return fateratorModule.createAspect();
            }
        }
        // If we have no matching guids
        // just return the aspect!
        return returnAspect;
    };
    // High Aspect Titles for characters, only one half
    // of a high aspect. The other half is an aspect, which
    // is why we need createAspect in data.js.
    fateratorModule.DATA.aspects.highAspectTitles = [
        {
            "value" : "Treasure Hunter",
            "guid": "CwkHCgsEDA0"
        },
        {
            "value" : "Smuggler",
            "guid": "Bw0NCQgCDgE"
        },
        {
            "value" : "Trader",
            "guid": "Aw0MBAEPAAE"
        },
        {
            "value" : "Biochemist",
            "guid": "DQcDDAADDAE"
        },
        {
            "value" : "Engineer",
            "guid": "AgMABAQKCwQ"
        },
        {
            "value" : "Ship Mechanic",
            "guid": "AwMJDg4JBAo"
        },
        {
            "value" : "Shophand",
            "guid": "BA4CAwMADQo"
        },
        {
            "value" : "Physicist",
            "guid": "BQwHCwgNBQU"
        },
        {
            "value" : "Laser Operator",
            "guid": "CAEMBQEIDg4"
        },
        {
            "value" : "Pirate",
            "guid": "Dg8HDAgFAQo"
        },
        {
            "value" : "Bounty Hunter",
            "guid": "AQEBBw0KCAM"
        }
    ];
    // Append a "aspect" to each high aspect title
    fateratorModule.DATA.aspects.highAspectTitles.forEach(function(element) {
        element.aspect = fateratorModule.createAspect().guid;
    });
    // Give back our module object
    return fateratorModule;
}(FATERATOR || {})); // Loosely Augmented Function Expression