// We need to augment the FATERATOR module with
// all of our data for our generator!
// The data should all have a guid associated that
// isn't already inside this master list.
var FATERATOR = (function(fateratorModule) {
    // Defining our carrier for the data of Faterator
    fateratorModule.DATA = {
        // The types of data we have
        "names": {},
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
        // List of a bunch of treasure-y adjectives
        var adjective = [
        "Black",
        "Obsidian",
        "Emerald",
        "Malachite",
        "Jade",
        "Tiger's Eye",
        "Onyx",
        "Ruby",
        "Sapphire",
        "Diamond",
        "Plutonium",
        "Xenon",
        "Neon",
        "Radon",
        "Nitrogen",
        "Hydrogen",
        "Einsteinium",
        "Oxygen",
        "Water",
        "Earth",
        "Air",
        "Lightning",
        ];
        // List of a bunch of base treasures
        var treasure = [
        "Ring",
        "Gem",
        "Stone",
        "Necklace",
        "Amulet",
        "Sword",
        "Greataxe",
        "Greatsword",
        "Rapier",
        "Blaster Pistol",
        "Raygun",
        "Laser Rifle",
        "Plasma Rifle",
        "Cube",
        "Sphere",
        "Orb",
        "Broach",
        "Circlet",
        "Coin",
        "Sculpture",
        "Crown"
        ];
        return adjective[fateratorModule.randomNum(adjective.length)] + " " + treasure[fateratorModule.randomNum(treasure.length)];
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