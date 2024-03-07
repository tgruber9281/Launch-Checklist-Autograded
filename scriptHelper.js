// Write your helper functions here!

require("cross-fetch/polyfill");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  // Here is the HTML formatting for our mission target div.
  /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

function validateInput(testInput) {
  if (testInput === "") {
    return "Empty";
  } else {
    if (isNaN(testInput)) {
      return "Not a Number";
    } else {
      return "Is a Number";
    }
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel, event) {
  //preventDefault and alert if invalid
  if (
    validateInput(pilot) === "Empty" ||
    validateInput(copilot) === "Empty" ||
    validateInput(fuelLevel) === "Empty" ||
    validateInput(cargoLevel) === "Empty"
  ) {
    alert("All fields are required!");
    event.preventDefault();
  } else if (validateInput(pilot) === "Is a Number") {
    alert("Please enter Pilot's name.");
    event.preventDefault();
  } else if (validateInput(copilot) === "Is a Number") {
    alert("Please enter Copilot's name.");
    event.preventDefault();
  } else if (validateInput(fuelLevel) === "Not a Number") {
    alert("Please enter a number for the current Fuel Level");
    event.preventDefault();
  } else if (validateInput(cargoLevel) === "Not a Number") {
    alert("Please enter a number for the current Cargo Mass");
    event.preventDefault();
  }
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch().then(function (response) {});

  return planetsReturned;
}

function pickPlanet(planets) {}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
