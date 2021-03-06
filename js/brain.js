// Our variable that holds the entire
// faterator enclosure inside, along with
// the init function
var FATERATOR = (function(fateratorModule) {
  // Pull in the DATA module
  // "Faterator Data"
  var FD = fateratorModule.DATA;
  // We also need a shared variable
  // for setting our hash after character creation
  var charHash = "";
  // Array that contains all valid query strings
  var validQueryStrings = [
    // Character Name
    "chNm",
    // High Aspect
    "hA",
    // High Aspect - Aspect
    "hAa",
    // trouble
    "tr",
    // approaches
    "ap1",
    "ap2",
    "ap3",
    "ap4",
    "ap5",
    "ap6",
    // aspects in the format:
    // a<n>
    "a1",
    "a2",
    "a3",
    // stunts
    "st"
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
    // If we don't have an key in the hash already
    if(location.hash.indexOf(key) === -1) {
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
  }
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
    var savedCharacterName = XORCipher.decode("test", getParameterByName("chNm"));
    // Pull in HTML element for the name
    var nameElement = document.getElementsByClassName("name")[0];
    // If we have a saved character, let's use the query string parameter
    if(savedCharacterName) {
      // The <br /> provides mobile copy/paste functionality
      // on Chrome for Android.
      nameElement.innerHTML += " " + savedCharacterName + "<br />";
    }
    else {
      var fullName = fateratorModule.createFullName();
      // The <br /> provides mobile copy/paste functionality
      // on Chrome for Android.
      nameElement.innerHTML += " " + fullName + "<br />";
      updateHashParam("chNm", XORCipher.encode("test", fullName));
    }
  }
  // Function that will return an array of
  // numbers that represent approaches
  function renderApproaches() {
    // Set up our approaches
    var approaches = [
      "Careful",
      "Clever",
      "Flashy",
      "Forceful",
      "Sneaky",
      "Quick"
    ];
    // Set up variables we'll fill in below
    var bestApproach = {};
    var goodApproaches = [];
    var noviceApproaches = [];
    var worstApproach = {};
    // Pull in any query string for the first approach
    var firstApproach = getParameterByName("ap1");
    // Assumption: If you have 1 approach, you'll have them all.
    if(firstApproach) {
      // Get our other approaches and put them
      // into an array
      var savedApproaches = [
        firstApproach,
        getParameterByName("ap2"),
        getParameterByName("ap3"),
        getParameterByName("ap4"),
        getParameterByName("ap5"),
        getParameterByName("ap6"),
      ];
      // Set up the data objects that are expected
      // by the for loop below - gonna hard code this
      // because loop logic would be weird between the
      // bestApproach, goodApproaches, etc. arrays/objects.
      bestApproach = {
        "boost": 3,
        "approach": XORCipher.decode("test", savedApproaches[0])
      };
      goodApproaches[0] = {
        "boost": 2,
        "approach": XORCipher.decode("test", savedApproaches[1])
      };
      goodApproaches[1] = {
        "boost": 2,
        "approach": XORCipher.decode("test", savedApproaches[2])
      };
      noviceApproaches[0] = {
        "boost": 1,
        "approach": XORCipher.decode("test", savedApproaches[3])
      };
      noviceApproaches[1] = {
        "boost": 1,
        "approach": XORCipher.decode("test", savedApproaches[4])
      };
      worstApproach = {
        "boost": 0,
        "approach": XORCipher.decode("test", savedApproaches[5])
      };
    }
    else {
      // Pick one to be our "best" approach, and actually
      // remove it from the array.
      var approachIndex = fateratorModule.randomNum(approaches.length);
      bestApproach = {
        "boost": 3,
        "approach": approaches.splice([fateratorModule.randomNum(approaches.length)], 1)[0]
      };
      approachIndex = fateratorModule.randomNum(approaches.length);
      goodApproaches[0] = {
        "boost": 2,
        "approach": approaches.splice([fateratorModule.randomNum(approaches.length)], 1)[0]
      };
      approachIndex = fateratorModule.randomNum(approaches.length);
      goodApproaches[1] = {
        "boost": 2,
        "approach": approaches.splice([fateratorModule.randomNum(approaches.length)], 1)[0]
      };
      approachIndex = fateratorModule.randomNum(approaches.length);
      noviceApproaches[0] = {
        "boost": 1,
        "approach": approaches.splice([fateratorModule.randomNum(approaches.length)], 1)[0]
      };
      approachIndex = fateratorModule.randomNum(approaches.length);
      noviceApproaches[1] = {
        "boost": 1,
        "approach": approaches.splice([fateratorModule.randomNum(approaches.length)], 1)[0]
      };
      approachIndex = fateratorModule.randomNum(approaches.length);
      worstApproach = {
        "boost": 0,
        // I can count on this being the last element in the array since
        // we've iterated on it 5 times and there are 6 elements.
        "approach": approaches[0]
      };
    }
    // Now that our bestApproach, goodApproaches, etc.
    // are instantiated, create the new approaches array
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
      // The <br /> provides mobile copy/paste functionality
      // on Chrome for Android.
      tempListItem.innerHTML = approaches[i].approach + ": +" + approaches[i].boost + "<br />";
      nameListElement.appendChild(tempListItem);
      // If we dont't have the firstApproach query string,
      // let's update the hash parameter so we remember!
      if(!firstApproach) {
        // Update the hash with our approaches
        updateHashParam("ap"+(i+1), XORCipher.encode("test", approaches[i].approach));
      }
    }
    approachesDiv.appendChild(nameListElement);
  }
  // Create one stunt, and return it and
  // the associated boost, approach, and
  // description
  function createStunt() {
    // Equal 1/6th chance for each stunt
    // to be returned
    if(fateratorModule.randomNum(100) < 15) {
      return FD.stunts.quickStunts[fateratorModule.randomNum(FD.stunts.quickStunts.length)];
    }
    else if(fateratorModule.randomNum(100) < 15) {
      return FD.stunts.flashyStunts[fateratorModule.randomNum(FD.stunts.flashyStunts.length)];
    }
    else if(fateratorModule.randomNum(100) < 15) {
      return FD.stunts.forcefulStunts[fateratorModule.randomNum(FD.stunts.forcefulStunts.length)];
    }
    else if(fateratorModule.randomNum(100) < 15) {
      return FD.stunts.carefulStunts[fateratorModule.randomNum(FD.stunts.carefulStunts.length)];
    }
    else if(fateratorModule.randomNum(100) < 15) {
      return FD.stunts.cleverStunts[fateratorModule.randomNum(FD.stunts.cleverStunts.length)];
    }
    else {
      return FD.stunts.sneakyStunts[fateratorModule.randomNum(FD.stunts.sneakyStunts.length)];
    }
  }
  // Function that will render out a stunt
  // chosen by createStunt()
  function renderStunt() {
    // Pull in any query string for stunt
    var savedCharacterStunt = getParameterByName("st");
    // Get the HTML Element
    var stuntElement = document.getElementsByClassName("stunts")[0];
    // We need a <p> to put the stunt into
    var newParagraphElement = document.createElement("p");
    // If we have a saved character, let's use the query string parameter
    if(savedCharacterStunt) {
      // Create a text node for the stunt information.
      // The <br /> provides mobile copy/paste functionality
      // on Chrome for Android.
      newParagraphElement.innerHTML = findValueByGuid(FD.stunts,savedCharacterStunt) + " - " + findStuntDescByGuid(savedCharacterStunt) + "<br />";
      stuntElement.appendChild(newParagraphElement);
    }
    else {
      // Otherwise, let's create a new stunt and update the hash
      var newStunt = createStunt();
      // Create a text node for the stunt information.
      // The <br /> provides mobile copy/paste functionality
      // on Chrome for Android.
      newParagraphElement.innerHTML = newStunt.value + " - " + newStunt.description + "<br />";
      stuntElement.appendChild(newParagraphElement);
      // Update the hash
      updateHashParam("st", newStunt.guid);
    }
  }
  // Function that will return ONE trouble object
  // containing a value and a guid.
  function createTrouble() {
    // 75% chance that the trouble is a
    // quirk based trouble
    if(fateratorModule.randomNum(100) < 75) {
      return FD.troubles.personalQuirks[fateratorModule.randomNum(FD.troubles.personalQuirks.length)];
    }
    // Otherwise, give us a mechanic-based trouble
    else {
      return FD.troubles.personalMechanics[fateratorModule.randomNum(FD.troubles.personalMechanics.length)];
    }
  }
  // This function will draw out the trouble
  // created by createTrouble() into HTML elements
  function renderTrouble() {
    // Pull in any query string trouble
    var savedCharacterTrouble = getParameterByName("tr");
    // Pull in HTML element for the name
    var troubleElement = document.getElementsByClassName("trouble")[0];
    // If we have a saved character, let's use the query string parameter
    if(savedCharacterTrouble) {
      // The <br /> provides mobile copy/paste functionality
      // on Chrome for Android.
      troubleElement.innerHTML += " " + findValueByGuid(FD.troubles,savedCharacterTrouble) + "<br />";
    }
    // Otherwise just create a new trouble and update the hash
    else {
      var trouble = createTrouble();
      // The <br /> provides mobile copy/paste functionality
      // on Chrome for Android.
      troubleElement.innerHTML += " " + trouble.value + "<br />";
      updateHashParam("tr", trouble.guid);
    }
  }
  /**
   * Will render out an aspect as a list item,
   * then attach that to a provided parent element,
   * usually a <ul>.
   * @param {HTML Element} unorderedListItem
   * @param {Aspect} aspect
   */
  function renderAspectAsListItem(unorderedListItem, aspect) {
      var tempListItem = document.createElement("li");
      // The <br /> provides mobile copy/paste functionality
      // on Chrome for Android.
      tempListItem.innerHTML = aspect + "<br />";
      unorderedListItem.appendChild(tempListItem);
      // Update the player aspect guid array to contain
      // this guid
      //console.log("updating playerAspectGuids with " + aspect + " array: " + fateratorModule.playerAspectGuids);
      fateratorModule.playerAspectGuids.push(aspect);
  }
  // Function to render out the remaining aspects
  function renderAspects() {
    // First let's define the number of aspects we want
    var numberOfAspects = 3;
    // Create other variables we'll need later.
    var aspectDiv = document.getElementsByClassName("aspects")[0];
    var nameListElement = document.createElement("ul");
    var tempAspect = {};
    // Attempt to pull in the first aspect
    var firstAspect = getParameterByName("a1");
    if(firstAspect) {
      // Decrease number of aspects because we found
      // one provided on the query string
      numberOfAspects -= 1;
      // Set the temporary aspect we're going to pass to
      // the renderAspectAsListItem function.
      tempAspect = findValueByGuid(FD.aspects, firstAspect);
      renderAspectAsListItem(nameListElement, tempAspect);
    }
    // Attempt to pull in the second aspect
    var secondAspect = getParameterByName("a2");
    // If we want more than 1 aspect
    if(numberOfAspects > 0 && secondAspect) {
      // Decrease number of aspects because we found
      // one provided on the query string
      numberOfAspects -= 1;
      // Set the temporary aspect we're going to pass to
      // the renderAspectAsListItem function.
      tempAspect = findValueByGuid(FD.aspects, secondAspect);
      renderAspectAsListItem(nameListElement, tempAspect);
    }
    // Attempt to pull in the third aspect
    var thirdAspect = getParameterByName("a3");
    // If we want more than 2 aspects 
    if(numberOfAspects > 0 && thirdAspect) {
      // Decrease number of aspects because we found
      // one provided on the query string
      numberOfAspects -= 1;
      // Set the temporary aspect we're going to pass to
      // the renderAspectAsListItem function.
      tempAspect = findValueByGuid(FD.aspects, thirdAspect);
      renderAspectAsListItem(nameListElement, tempAspect);
    }
    // Just leave the function if we don't have any aspects
    // left to render
    if(numberOfAspects <= 0) {
      // Attach our <ul> to the parent <div> now that it's
      // all filled up.
      aspectDiv.appendChild(nameListElement);
      return;
    }
    // Otherwise, let's create some fresh ones!
    for(var i = 0; i < numberOfAspects; i++) {
      // Set the temporary aspect we're going to pass to
      // the renderAspectAsListItem function.
      tempAspect = fateratorModule.createAspect();
      renderAspectAsListItem(nameListElement, tempAspect.value);
      updateHashParam("a"+(i+1), tempAspect.guid);
    }
    // Attach our <ul> to the parent <div> now that it's
    // all filled up.
    aspectDiv.appendChild(nameListElement);
  }
  // This function will locate a stunt's' description
  // given a guid
  function findStuntDescByGuid(guid) {
    // Storage for our return aspect
    var retAspect = false;
    var e = {};
    // Find our item via guid by first
    // searching through all aspects for
    // the guid carried in
    for(var dataObject in FD.stunts) {
      if(FD.stunts.hasOwnProperty(dataObject)) {
        for(var i = 0; i < FD.stunts[dataObject].length; i++) {
          e = FD.stunts[dataObject][i];
          if(e.guid === guid) {
            retAspect = e;
          }
          if(retAspect.guid === guid) {
            return retAspect.description;
          }
        }
      }
    }
    // If we haven't hit anything yet
    // we are safe to return fasle
    return false;
  }
  // This function will locate an item's value
  // given an object and guid - returns false if no
  // match found
  function findValueByGuid(dataObj, guid) {
    // Storage for our return aspect
    var retAspect = false;
    var e = {};
    // Find our item via guid by first
    // searching through all aspects for
    // the guid carried in
    for(var dataObject in dataObj) {
      if(dataObj.hasOwnProperty(dataObject)) {
        for(var i = 0; i < dataObj[dataObject].length; i++) {
          e = dataObj[dataObject][i];
          if(e.guid === guid) {
            retAspect = e;
          }
          if(retAspect.guid === guid) {
            return retAspect.value;
          }
        }
      }
    }
    // If we haven't hit anything yet
    // we are safe to return fasle
    return false;
  }
  // Render out the high aspect we've
  // created for the character
  function renderHighAspect() {
    // Pull in high aspect query strings
    var savedHighAspect = getParameterByName("hA");
    var savedHighAspectAspect = getParameterByName("hAa");
    // And also pull in the high aspect HTML element itself
    var aspectDiv = document.getElementsByClassName("high-aspect")[0];
    // Do we have valid hash data?
    if(savedHighAspect) {
      // Find our target high aspect via guid
      var targetTitle = FD.aspects.highAspectTitles.find(function(e) {
        return e.guid === savedHighAspect;
      });
      // I am assuming savedHighAspectAspect will be there, Because
      // each high aspect has an associated aspect, as defined in data.js,
      // Also update the HTML element with the value of the guid.
      // The <br /> provides mobile copy/paste functionality
      // on Chrome for Android.
      aspectDiv.innerHTML += " " + targetTitle.value + ", " + findValueByGuid(FD.aspects,savedHighAspectAspect + "<br />");
      // Update the player aspect guid array to contain
      // this guid
      fateratorModule.playerAspectGuids.push(savedHighAspectAspect);
    }
    else {
      // We need an index for our high aspect
      var highAspectIndex = fateratorModule.randomNum(FD.aspects.highAspectTitles.length);
      // Also we're going to use a new aspect
      var newAspect = fateratorModule.createAspect();
      // The <br /> provides mobile copy/paste functionality
      // on Chrome for Android.
      aspectDiv.innerHTML += " " + FD.aspects.highAspectTitles[highAspectIndex].value + ", " + newAspect.value + "<br />";
      // Update the hash params so reloads work
      updateHashParam("hA", FD.aspects.highAspectTitles[highAspectIndex].guid);
      updateHashParam("hAa", newAspect.guid);
      // Update the player aspect guid array to contain
      // this guid
      fateratorModule.playerAspectGuids.push(newAspect.guid);
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