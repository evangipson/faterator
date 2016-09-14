// We need to augment the FATERATOR module with
// all of our data for our generator!
// The data should all have a guid associated that
// isn't already inside this master list.
var FATERATOR = (function(fateratorModule) {
    // Functions I need inside of this module.
    // ---------------------------------------
    // Returns a number that is random within range
    fateratorModule.randomNum = function(highNum) {
        return Math.floor(Math.random() * parseInt(highNum));
    }
    // Return ONE name that sounds fantasy-y
    fateratorModule.createFantasyName = function() {
        // return three syllables - 75% chance
        /* TODO: Rewrite to accept JSON object 
        if(fateratorModule.randomNum(100) < 75) {
        return fateratorModule.DATA.names.first[fateratorModule.randomNum(fateratorModule["DATA"].names.first.length)] + names_second[fateratorModule.randomNum(names_second.length)] + names_third[fateratorModule.randomNum(names_third.length)];
        }
        // otherwise just return two
        return fateratorModule.names_first[fateratorModule.randomNum(fateratorModule["names_first"].length)] + names_third[fateratorModule.randomNum(names_third.length)]; */
    };
    // Return a full name
    fateratorModule.createFullName = function() {
        return fateratorModule.createFantasyName() + " " + fateratorModule.createFantasyName();
    }
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
    }
    // Our FATERATOR.DATA will contain all of our data!
    fateratorModule.DATA = {
        // ASPECT SEEDS
        // ------------
        "aspects" : {
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
        },
        "names" : {
            // Possessions/Items/Artifacts
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
            // Possessions/Items/Artifacts
            "second" : [
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
            // Possessions/Items/Artifacts
            "third" : [
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
            ]
        }
    };
    return fateratorModule;
}(FATERATOR || {}));
    /* Second and Third syllables(ish)
    fateratorModule.names_second = [
      "r",
      "lo",
      "li",
      "no",
      "ni",
      "na",
      "ya",
      "ta",
      "to",
      "ys",
      "di",
      "da",
      "ka",
      "ki",
      "ku",
      "ri",
      "hsh",
      "xh",
      "xi",
      "z",
      "zi",
      "ze",
      "za"
    ];
    fateratorModule.names_third = [
      "k",
      "m",
      "n",
      "t",
      "tt",
      "l",
      "ae",
      "e",
      "pic",
      "stic",
      "ope",
      "ium",
      "lon"
    ];*/