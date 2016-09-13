// Our variable that holds the entire
// faterator enclosure inside, along with
// the init function
var FATERATOR = (function(fateratorModule) {
  // Pull in any query string variables we have
  var savedCharacterName = getParameterByName("chNm");
  var savedCharacterApproaches = getParameterByName("chAp");
  // "Public" Functions (Functions that data.js needs)
  // -------------------------------------------------
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
  // Return ONE name that sounds fantasy-y
  fateratorModule.createFantasyName = function() {
    // return three syllables - 75% chance
    if(randomNum(100) < 75) {
      return fateratorModule["DATA"].names.first[randomNum(fateratorModule["DATA"].names.first.length)] + names_second[randomNum(names_second.length)] + names_third[randomNum(names_third.length)];
    }
    // otherwise just return two
    return fateratorModule.names_first[randomNum(fateratorModule["names_first"].length)] + names_third[randomNum(names_third.length)];
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
    return adjective[randomNum(adjective.length)] + " " + treasure[randomNum(treasure.length)];
  }
  // Functions
  // ---------
  // Will return a url parameter given the
  // name of the parameter used; also takes
  // an optional url but will look at
  // window.location.href
  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
  // Thanks http://stackoverflow.com/questions/5999118/add-or-update-query-string-parameter
  // for this function!
  // If no URL is supplied, it will be grabbed from window.location
  function updateQueryStringParameter(uri, key, value) {
    var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    var separator = uri.indexOf('?') !== -1 ? "&" : "?";
    if (uri.match(re)) {
      return uri.replace(re, '$1' + key + "=" + value + '$2');
    }
    else {
      return uri + separator + key + "=" + value;
    }
  }
  // Returns a number that is random within range
  function randomNum(highNum) {
    return Math.floor(Math.random() * parseInt(highNum));
  }
  // Function that sets the HTML elements
  // using our createFantasyName function
  function renderName() {
    var nameElement = document.getElementsByClassName("name")[0];
    if(savedCharacterName) {
      nameElement.innerHTML += " " + savedCharacterName;
    }
    else {
      var fullName = fateratorModule.createFullName();
      nameElement.innerHTML += " " + fullName;
      updateQueryStringParamater("chNm", fullName);
    }
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
    // If we have a saved character in our URL...
    if(savedCharacterApproaches) {
      // Gather up our query string variables
      // and break them into approahces
      savedApproachIndex = [
        savedCharacterApproaches.substr(0,2),
        savedCharacterApproaches.substr(2,2),
        savedCharacterApproaches.substr(4,2),
        savedCharacterApproaches.substr(6,2),
        savedCharacterApproaches.substr(8,2),
        savedCharacterApproaches.substr(10,2)
      ];
      // Set our approaches based on our
      // query string indexes
      var queryStringApproaches = [];
      for(var i = 0; i < 6; i++) {
        queryStringApproaches.push({
          "boost": savedApproachIndex[i].substr(i+1,1),
          "approach": approachs[parseInt(savedApproachIndex.substr(i,1))]
        });
      }
    }
    // Otherwise we should just render out a generated one.
    else {
      /*
      // Pick one to be our "best" approach, and actually
      // remove it from the array.
      var approachIndex = randomNum(approaches.length);
      // Update the query string
      var queryStringApproach = approachIndex.toString() + "3";
      var bestApproach = {
        "boost": 3,
        "approach": approaches.splice([randomNum(approaches.length)], 1)
      };
      var goodApproaches;
      approachIndex = randomNum(approaches.length);
      // Update the query string
      queryStringApproach += approachIndex.toString() + "2";
      goodApproaches[0] = {
        "boost": 2,
        "approach": approaches.splice([randomNum(approaches.length)], 1)
      };
      approachIndex = randomNum(approaches.length);
      // Update the query string
      queryStringApproach += approachIndex.toString() + "2";
      goodApproaches[1] = {
        "boost": 2,
        "approach": approaches.splice([randomNum(approaches.length)], 1)
      }
      var noviceApproaches;
      approachIndex = randomNum(approaches.length);
      // Update the query string
      queryStringApproach += approachIndex.toString() + "1";
      noviceApproaches[0] = {
        "boost": 1,
        "approach": approaches.splice([randomNum(approaches.length)], 1)
      };
      approachIndex = randomNum(approaches.length);
      noviceApproaches[1] = {
        "boost": 1,
        "approach": approaches.splice([randomNum(approaches.length)], 1)
      }
      approachIndex = randomNum(approaches.length);
      // Update the query string
      queryStringApproach += approachIndex.toString() + "0";
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
      */
      // Update the query string with our variable
      updateQueryStringParameter("chAp", queryStringApproach);
    }
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
  // Function that will return ONE trouble
  function createTrouble() {
    var personalQuirks = [
      "Greedy",
      "Nosy",
      "Awkward",
      "Superstitious",
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
  // Give back the module which has the
  // init function inside
  return fateratorModule;
}(FATERATOR || {})); // Augmented Immediately Invoked Function Expression

// Wait until the document is ready, then
// load our init function that we have due
// to our FATERATOR IIFE above.
document.onready = FATERATOR.init();