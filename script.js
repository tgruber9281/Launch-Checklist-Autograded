// Write your JavaScript code here!

window.addEventListener("load", function () {
  let form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    let pilot = this.document.getElementsByName("pilotName")[0].value;
    let copilot = this.document.getElementsByName("copilotName")[0].value;
    let fuelLevel = this.document.getElementsByName("fuelLevel")[0].value;
    let cargoLevel = this.document.getElementsByName("cargoMass")[0].value;
    let list = this.document.getElementById("faultyItems");

    //validation:
    if (
      !formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)
    ) {
      this.event.preventDefault();
    }
  });

  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse.then(function (result) {
    listedPlanets = result;
    // console.log(listedPlanets);
    let planet = pickPlanet(listedPlanets);
    addDestinationInfo(
      document,
      planet.name,
      planet.diameter,
      planet.star,
      planet.distance,
      planet.moons,
      planet.image
    );
  });
  // .then(function () {
  //   console.log(listedPlanets);
  //   // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
  // });
});
