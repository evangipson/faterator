// Our variable that holds the entire
// faterator enclosure inside, along with
// the init function
var FATERATOR = (function(fateratorModule) {
  // Pull in the DATA module
  // "Faterator Data"
  FD = fateratorModule.DATA;
  // We also need a shared variable
  // for setting our hash after character creation
  var charHash = "";
  // Array that contains all valid query strings
  var validQueryStrings = [
    // Character Name
    "chNm",
    // High Aspect
    "hA"
  ];
  // "Public" Functions (Functions that data.js needs)
  // -------------------------------------------------
  // Init function to handle all the
  // initialization required to return
  // the module
  fateratorModule.init = function() {
    // Render all of our data out to HTML
    renderName();
    renderHighAspect();
    renderTrouble();
    renderApproaches();
    renderAspects();
    renderStunt();
    // Let's apply the character hash!
    applyHash();
  };
  // Functions
  // ---------
  // Will return a url parameter given the
  // name of the parameter used; also takes
  // an optional url but will look at
  // window.location.hash
  function getParameterByName(name, url) {
    if (!url) url = window.location.hash;
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
  function updateQueryString(key, value, url) {
    if (!url) url = window.location.href;
    var re = new RegExp("([?&])" + key + "=.*?(&|#|$)(.*)", "gi"),
        hash;
    if (re.test(url)) {
      if (typeof value !== 'undefined' && value !== null)
        return url.replace(re, '$1' + key + "=" + value + '$2$3');
      else {
        hash = url.split('#');
        url = hash[0].replace(re, '$1$3').replace(/(&|\?)$/, '');
        if (typeof hash[1] !== 'undefined' && hash[1] !== null) 
          url += '#' + hash[1];
        return url;
      }
    }
    else {
      if (typeof value !== 'undefined' && value !== null) {
        var separator = url.indexOf('?') !== -1 ? '&' : '?';
        hash = url.split('#');
        url = hash[0] + separator + key + '=' + value;
        if (typeof hash[1] !== 'undefined' && hash[1] !== null) 
          url += '#' + hash[1];
        return url;
      }
      else
        return url;
    }
  }
  // Function that will update the window.location.hash
  // and takes in a key and value to set those.
  // It's not very defensively coded so don't abuse it :)
  // NOTE: Please call AFTER sanitising with updateQueryString
  function updateHashParam(key, value) {
    // Sanitize character hash to make sure it's valid
    // and only update the hash if it's a valid key.
    for (var validQueryString = 0; validQueryString < validQueryStrings.length; validQueryString++) {
      // Set the URL of the browser to the updated query string
      // to the "query" part of the URL returned by UpdateQueryString()
      if(key == validQueryStrings[validQueryString]) {
        charHash += "&" + updateQueryString(key, value, location.hash.replace("#","")).split('?')[1];
      }
    }
  }
  // Function to sanitize (get rid of unwanted elements)
  // the query string
  /* function sanitizeQS() {
    var charHashElements = charHash.split("&");
    var counter = 0;
    // For every element split by the &
    for(var charHashElement = 0; charHashElement < charHashElements.length; charHashElement++) {
      for(var validQueryString = 0; validQueryString < validQueryStrings.length; validQueryString++) {
        // reset our counter
        counter = 0;
        // Increment our counter every time we DON'T hit a valid query string
        if(charHashElements[charHashElement].indexOf(validQueryStrings[validQueryString]) === -1) {
          counter++;
        }
      }
      // If we've not hit ANY valid Query strings...
      if(counter === validQueryStrings.length) {
        charHashElements.splice(charHashElement, 1);
      }
    }
    charHash = charHashElements.join("&");
  } */
  // Function to be called from init
  // NOTE: Please don't call this function elsewhere.
  function applyHash() {
    // sanitizeQS();
    // Now set it to character hash.
    if(charHash !== "") {
      location.hash = "?" + charHash;
    }
  }
  // Function that sets the HTML elements
  // using our createFantasyName function
  function renderName() {
    // Pull in any query string variables we have
    var savedCharacterName = getParameterByName("chNm");
    // Pull in HTML element for the name
    var nameElement = document.getElementsByClassName("name")[0];
    // If we have a saved character, let's use the query string parameter
    if(savedCharacterName) {
      nameElement.innerHTML += " " + savedCharacterName;
    }
    else {
      var fullName = fateratorModule.createFullName();
      nameElement.innerHTML += " " + fullName;
    }
    // If we don't have a chNM already, update the param
    if(location.hash.indexOf("chNm") === -1) {
      updateHashParam("chNm", fullName);
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
    /* 
    
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
      /*var queryStringApproaches = [];
      for(var i = 0; i < 6; i++) {
        queryStringApproaches.push({
          "boost": savedApproachIndex[i].substr(i+1,1),
          "approach": approachs[parseInt(savedApproachIndex.substr(i,1))]
        });
      }
    }
    // Otherwise we should just render out a generated one.
    else {

      */
      // Pick one to be our "best" approach, and actually
      // remove it from the array.
      var approachIndex = fateratorModule.randomNum(approaches.length);
      var bestApproach = {
        "boost": 3,
        "approach": approaches.splice([fateratorModule.randomNum(approaches.length)], 1)
      };
      var goodApproaches = [];
      approachIndex = fateratorModule.randomNum(approaches.length);
      goodApproaches[0] = {
        "boost": 2,
        "approach": approaches.splice([fateratorModule.randomNum(approaches.length)], 1)
      };
      approachIndex = fateratorModule.randomNum(approaches.length);
      goodApproaches[1] = {
        "boost": 2,
        "approach": approaches.splice([fateratorModule.randomNum(approaches.length)], 1)
      }
      var noviceApproaches = [];
      approachIndex = fateratorModule.randomNum(approaches.length);
      noviceApproaches[0] = {
        "boost": 1,
        "approach": approaches.splice([fateratorModule.randomNum(approaches.length)], 1)
      };
      approachIndex = fateratorModule.randomNum(approaches.length);
      noviceApproaches[1] = {
        "boost": 1,
        "approach": approaches.splice([fateratorModule.randomNum(approaches.length)], 1)
      }
      approachIndex = fateratorModule.randomNum(approaches.length);
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
    // } (end else that is commented out)
    // Update the HTML elements
    var approachesDiv = document.getElementsByClassName("approaches")[0];
    var nameListElement = document.createElement("ul");
    var tempListItem = {};
    for(var i = 0; i < approaches.length; i++) {
      tempListItem = document.createElement("li");
      tempListItem.appendChild(document.createTextNode(approaches[i].approach + ": +" + approaches[i].boost));
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
    if(fateratorModule.randomNum(100) < 15) {
      return quickStunts[fateratorModule.randomNum(quickStunts.length)];
    }
    else if(fateratorModule.randomNum(100) < 15) {
      return flashyStunts[fateratorModule.randomNum(flashyStunts.length)];
    }
    else if(fateratorModule.randomNum(100) < 15) {
      return forcefulStunts[fateratorModule.randomNum(forcefulStunts.length)];
    }
    else if(fateratorModule.randomNum(100) < 15) {
      return carefulStunts[fateratorModule.randomNum(carefulStunts.length)];
    }
    else if(fateratorModule.randomNum(100) < 15) {
      return cleverStunts[fateratorModule.randomNum(cleverStunts.length)];
    }
    else {
      return sneakyStunts[fateratorModule.randomNum(sneakyStunts.length)];
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
      "Compelled by their " + fateratorModule.createTreasure(),
      "Has a " + fateratorModule.createTreasure() + " stuck on their body",
    ];
    // 75% chance that the trouble is a
    // quirk based trouble
    if(fateratorModule.randomNum(100) < 75) {
      return personalQuirks[fateratorModule.randomNum(personalQuirks.length)];
    }
    // Otherwise, give us a mechanic-based trouble
    else {
      return personalMechanics[fateratorModule.randomNum(personalMechanics.length)];
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
    // We'll return this.
    var returnAspect;
    // Variables for this are defined within
    // Decide which array to return an element from
    if(fateratorModule.randomNum(100) < 25) {
      // We're using the items array, so 
      // let's import that from our DATARATOR
      var beliefs = FD.aspects.beliefs;
      returnAspect = beliefs.splice(fateratorModule.randomNum(beliefs.length), 1)[0];
      return returnAspect.value;
    }
    else if(fateratorModule.randomNum(100) < 25) {
      // We're using the items array, so 
      // let's import that from our DATARATOR
      var items = FD.aspects.items;
      returnAspect = items.splice(fateratorModule.randomNum(items.length), 1)[0];
      return returnAspect.value;
    }
    else if(fateratorModule.randomNum(100) < 25) {
      // We're using the items array, so 
      // let's import that from our DATARATOR
      var relationships = FD.aspects.relationships;
      returnAspect = relationships.splice(fateratorModule.randomNum(relationships.length), 1)[0];
      return returnAspect.value;
    }
    else {
      // We're using the items array, so 
      // let's import that from our DATARATOR
      var titles = FD.aspects.titles;
      returnAspect = titles.splice(fateratorModule.randomNum(titles.length), 1)[0];
      return returnAspect.value;
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
    /* 


    // Pull in any query string variables we have
    var savedCharacterName = getParameterByName("chNm");
    // Pull in HTML element for the name
    var nameElement = document.getElementsByClassName("name")[0];
    // If we have a saved character, let's use the query string parameter
    if(savedCharacterName) {
      nameElement.innerHTML += " " + savedCharacterName;
    }
    else {
      var fullName = fateratorModule.createFullName();
      nameElement.innerHTML += " " + fullName;
    }

    */
    // Pull in high aspect query string
    var savedHighAspect = getParameterByName("hA");
    var aspectDiv = document.getElementsByClassName("high-aspect")[0];
    if(savedHighAspect) {
      // find by guid??
      var targetTitle = FD.aspects.highAspectTitles.find(function(e) {
        return e.guid === savedHighAspect;
      });
      // Update the HTML element with the value of the guid
      aspectDiv.innerHTML += " " + targetTitle.value + ", " + createAspect();
      // If we don't have an "hA" in the hash already
      if(location.hash.indexOf("hA") === -1) {
        // Update our hash param so reloads work
        updateHashParam("hA", targetTitle.guid);
      }
    }
    else {
      // We need an index for our high aspect
      var highAspectIndex = fateratorModule.randomNum(FD.aspects.highAspectTitles.length);
      aspectDiv.innerHTML += " " + FD.aspects.highAspectTitles[highAspectIndex].value + ", " + createAspect();
      // If we don't have an "hA" in the hash already
      if(location.hash.indexOf("hA") !== -1) {
        // Update the hash param so reloads work
        updateHashParam("hA", FD.aspects.highAspectTitles[highAspectIndex].guid);
      }
    }
  }
  // Give back the module which has the
  // init function inside
  return fateratorModule;
}(FATERATOR)); // Augmented Function Expression

// Wait until the document is ready, then
// load our init function that we have due
// to our FATERATOR IIFE above.
document.onready = FATERATOR.init();