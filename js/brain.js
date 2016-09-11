// Our variable that holds the entire
// faterator enclosure inside, along with
// the init function
var FATERATOR = (function() {
  // Module that we will return
  var fateratorModule = {};
  // Shared variables
  // ----------------
  // Beliefs
  var beliefs = [
    "The only good " + createFantasyName() + " is a dead one",
    "Hates " + createFullName(),
    "Hates the " + createFantasyName() + " family",
    "Never trust a " + createFantasyName(),
    "Sworn to avenge their Father",
    "Sworn to avenge their Mother",
    "Sworn to avenge their Family"
  ];
  // Possessions/Items/Artifacts
  var items = [
    "Owner of the " + createFantasyName() + " amulet",
    "Owner of the " + createFantasyName() + " ring",
    "Owner of the " + createFantasyName() + " artifact",
    "Pilot of The " + createFantasyName() + " ship",
    "Wielder of " + createTreasure()
  ];
  // Relationships with NPCs/Groups
  var relationships = [
    "Sibling of " + createFullName(),
    "Child of " + createFullName(),
    "Parent of " + createFullName(),
    "Enemy of the " + createFantasyName(),
    "Friend of the " + createFantasyName(),
    "Raised in " + createFantasyName() + " royalty",
  ];
  // Titles and Traits
  var titles = [
    "Army General",
    "Street Waif",
    "Of Noble Blood",
    "Amnesiac",
    "Sharp Eyed",
    "Sharpshooter",
    "Government Official",
    "Dungeon Hunter",
    "Trouble Seeker",
    "Theif",
    ];
  // Returns a number that is random within range
  function randomNum(highNum) {
    return Math.floor(Math.random() * parseInt(highNum));
  }
  // Return ONE name that sounds fantasy-y
  function createFantasyName() {
    // First syllables(ish)
    var names_first = [
      "Ga",
      "Xu",
      "Yi",
      "Fu",
      "Fo",
      "Va",
      "Vi",
      "Hi",
      "He",
      "Mi",
      "My"
    ];
    // Second and Third syllables(ish)
    var names_second = [
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
    var names_third = [
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
    ];
    // return three syllables - 75% chance
    if(randomNum(100) < 75) {
      return names_first[randomNum(names_first.length)] + names_second[randomNum(names_second.length)] + names_third[randomNum(names_third.length)];
    }
    // otherwise just return two
    return names_first[randomNum(names_first.length)] + names_third[randomNum(names_third.length)];
  }
  // Return a full name
  function createFullName() {
    return createFantasyName() + " " + createFantasyName();
  }
  // Function that sets the HTML elements
  // using our createFantasyName function
  function renderName() {
    var nameElement = document.getElementsByClassName("name")[0];
    nameElement.innerHTML += " " + createFullName();
  }
  // Function that will return an array of
  // numbers that represent approaches
  function renderApproaches() {
    var approaches = [
      "Careful",
      "Clever",
      "Flashy",
      "Forceful",
      "Sneaky",
      "Quick"
    ];
    // Pick one to be our "best" approach, and actually
    // remove it from the array.
    var bestApproach = {
      "boost": 3,
      "approach": approaches.splice([randomNum(approaches.length)], 1)
    };
    var goodApproaches = [
      {
        "boost": 2,
        "approach": approaches.splice([randomNum(approaches.length)], 1)
      },
      {
        "boost": 2,
        "approach": approaches.splice([randomNum(approaches.length)], 1)
      }
    ];
    var noviceApproaches = [
      {
        "boost": 1,
        "approach": approaches.splice([randomNum(approaches.length)], 1)
      },
      {
        "boost": 1,
        "approach": approaches.splice([randomNum(approaches.length)], 1)
      }
    ];
    var worstApproach = {
      "boost": 0,
      // I can count on this being the last element in the array since
      // we've iterated on it 5 times and there are 6 elements.
      "approach": approaches[0]
    };
    // Create the new approaches array
    approaches = [
      bestApproach,
      goodApproaches[0],
      goodApproaches[1],
      noviceApproaches[0],
      noviceApproaches[1],
      worstApproach
    ];
    // Update the HTML elements
    var approachesDiv = document.getElementsByClassName("approaches")[0];
    var nameListElement = document.createElement("ul");
    var tempListItem = {};
    for(var i = 0; i < approaches.length; i++) {
      tempListItem = document.createElement("li");
      tempListItem.appendChild(document.createTextNode(approaches[i].approach + ": +" + approaches[i].boost));
      console.log(approaches[i].approach + ": +" + approaches[i].boost);
      nameListElement.appendChild(tempListItem);
    }
    approachesDiv.appendChild(nameListElement);
  }
  // Create one stunt, and return it and
  // the associated boost, approach, and
  // description
  function createStunt() {
    // Set up all of our stunts, which each
    // have a name and description.
    var quickStunts = [{
      "name": "Deft Hands",
      "description": "Because of my Deft Hands, I'm able to add 2 to my quick roll while I attempt to steal or disarm."
    }];
    var flashyStunts = [{
      "name": "Acrobat",
      "description": "Because I'm an acrobat, I can add 2 to my flashy roll when I need to get around."
    }];
    var forcefulStunts = [{
      "name": "Super Strength",
      "description": "Because of my super strength, I'm able to add 2 to my strength roll when I move something or fight."
    }];
    var carefulStunts = [{
      "name": "Eagle Eye",
      "description": "Because I have eagle eye, I can add 2 to my careful roll when I try and notice something or create an advantage."
    }];
    var cleverStunts = [{
      "name": "White Lie",
      "description": "Because I can white lie, I can add 2 to my clever roll while I'm in social interactions when I establish facts."
    }];
    var sneakyStunts = [{
      "name": "Soft-Footed",
      "description": "Because I'm soft-footed, I can add 2 to my sneaky roll while I'm trying to bypass NPCs."
    }];
    // Equal 1/6th chance for each stunt
    // to be returned
    if(randomNum(100) < 15) {
      return quickStunts[randomNum(quickStunts.length)];
    }
    else if(randomNum(100) < 15) {
      return flashyStunts[randomNum(flashyStunts.length)];
    }
    else if(randomNum(100) < 15) {
      return forcefulStunts[randomNum(forcefulStunts.length)];
    }
    else if(randomNum(100) < 15) {
      return carefulStunts[randomNum(carefulStunts.length)];
    }
    else if(randomNum(100) < 15) {
      return cleverStunts[randomNum(cleverStunts.length)];
    }
    else {
      return sneakyStunts[randomNum(sneakyStunts.length)];
    }
  }
  // Function that will render out a stunt
  // chosen by createStunt()
  function renderStunt() {
    var stuntElement = document.getElementsByClassName("stunts")[0];
    var newParagraphElement = document.createElement("p")
    var newStunt = createStunt();
    var stuntContent = document.createTextNode(newStunt.name + " - " + newStunt.description);
    newParagraphElement.appendChild(stuntContent);
    stuntElement.appendChild(newParagraphElement);
  }
  // Function that will create ONE mythical
  // or cool-sounding treasure
  function createTreasure() {
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
    return adjective[randomNum(adjective.length)] + " " + treasure[randomNum(treasure.length)];
  }
  // Function that will return ONE trouble
  function createTrouble() {
    var personalQuirks = [
      "Greedy",
      "Nosy",
      "Awkward",
      "Supersticious",
      "Suspicious",
      "Reckless"
    ];
    var personalMechanics = [
      "Compelled by their " + createTreasure(),
      "Has a " + createTreasure() + " stuck on their body",
    ];
    // 75% chance that the trouble is a
    // quirk based trouble
    if(randomNum(100) < 75) {
      return personalQuirks[randomNum(personalQuirks.length)];
    }
    // Otherwise, give us a mechanic-based trouble
    else {
      return personalMechanics[randomNum(personalMechanics.length)];
    }
  }
  // This function will draw out the trouble
  // created by createTrouble() into HTML elements
  function renderTrouble() {
    var troubleDiv = document.getElementsByClassName("trouble")[0];
    troubleDiv.innerHTML += " " + createTrouble();
  }
  // Function that will create a generic
  // aspect and return it.
  function createAspect() {
    // Variables for this are defined within
    // Decide which array to return an element from
    if(randomNum(100) < 25) {
      return beliefs.splice(randomNum(beliefs.length), 1);
    }
    else if(randomNum(100) < 25) {
      return items.splice(randomNum(items.length), 1);
    }
    else if(randomNum(100) < 25) {
      return relationships.splice(randomNum(relationships.length), 1);
    }
    else {
      return titles.splice(randomNum(titles.length), 1);
    }
  }
  // Function to render out the remaining aspects
  function renderAspects() {
    var numberOfAspects = 3;
    var aspectDiv = document.getElementsByClassName("aspects")[0];
    var nameListElement = document.createElement("ul");
    var tempListItem = {};
    for(var i = 0; i < numberOfAspects; i++) {
      tempListItem = document.createElement("li");
      tempListItem.appendChild(document.createTextNode(createAspect()));
      nameListElement.appendChild(tempListItem);
    }
    aspectDiv.appendChild(nameListElement);
  }
  // Render out the high aspect we've
  // created for the character
  function renderHighAspect() {
    var jobs = [
      "Treasure Hunter",
      "Smuggler",
      "Trader",
      "Biochemist",
      "Engineer",
      "Ship Mechanic",
      "Shophand",
      "Lightsmith",
      "Laser Operator",
      "Pirate",
      "Bounty Hunter"
    ];
    var aspectDiv = document.getElementsByClassName("high-aspect")[0];
    aspectDiv.innerHTML += " " + jobs[randomNum(jobs.length)] + ", " + createAspect();
  }
  // Init function to handle all the
  // initialization required to return
  // the module
  fateratorModule.init = function() {
    renderName();
    renderHighAspect();
    renderTrouble();
    renderApproaches();
    renderAspects();
    renderStunt();
  };
  // Give back the module which has the
  // init function inside
  return fateratorModule;
})(); // Immediately Invoked Function Expression

// Wait until the document is ready, then
// load our init function that we have due
// to our FATERATOR IIFE above.
document.onready = FATERATOR.init();