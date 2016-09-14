// We need to augment the FATERATOR module with
// all of our data for our generator!
// The data should all have a guid associated that
// isn't already inside this master list.
var FATERATOR = (function(fateratorModule) {
    // Defining our carrier for the data of Faterator
    fateratorModule.DATA = {
        // The types of data we have
        "names": {},
        "treasures": {},
        "aspects": {},
    };
    // Define our names first, that's the most
    // important data for our functions below.
    // These are seeds or syllables for our name generator.
    fateratorModule.DATA.names = {
        // First Syllables
        "first" : [
            {
                "value": "Ga"
                // Going to use value for GUID in case of names
                // because the other GUIDS are so long they won't
                // collide as long as all segments of the names are unique.
                // "guid": "Ga"
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
            }
        ],
        // Second Syllables
        "second" : [
            {
                "value": "r"
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
                "value": "xh"
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
        // Possessions/Items/Artifacts
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
    // Functions I need to generate stuff beyond names.
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
    // Now we can define our aspects since our names
    // and seed functions are declared
    fateratorModule.DATA.aspects = {
        // Player beliefs
        "beliefs" : [
            {
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
                "value" : "Theif",
                "guid": "CQAEDw0OCwo"
            }
        ],
    };
    // Give back our module object
    return fateratorModule;
}(FATERATOR || {}));