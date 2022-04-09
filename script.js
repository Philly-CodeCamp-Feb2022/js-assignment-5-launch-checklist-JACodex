// Write your JavaScript code here!
 //    Set listedPlanetsResponse equal to the value returned by calling myFetch()

// import scriptHelper from './scriptHelper';
window.addEventListener("load", function(event) {
   console.log('in loaded')
//    console.log(document)
   let listedPlanets = ['Mercury', 'Venus', 'Earth', 'Mars'];
   let fuelLevel = 0;
   let cargoMass = 0;
   let form = document.querySelector('form')
   let pilotNameInput = document.querySelector("input[name=pilotName]");
   let coPilotNameInput = document.querySelector("input[name=copilotName]");
   let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
   let cargoMassInput = document.querySelector("input[name=cargoMass]");

   form.addEventListener('submit', function(event){
        console.log(validateInput(fuelLevelInput));
       formSubmission(
            document, listedPlanets, 
            pilotNameInput, coPilotNameInput,
            fuelLevelInput, cargoMassInput)
            event.preventDefault()
   })


   let listedPlanetsResponse =  myFetch();
    console.log('in scriptjs load planet response', listedPlanetsResponse)
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log('results: ', result);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let selectedPlanet = pickPlanet(listedPlanets)
       addDestinationInfo(document, 
        selectedPlanet.name,
        selectedPlanet.diameter,
        selectedPlanet.star,
        selectedPlanet.distance,
        selectedPlanet.moons,
        selectedPlanet.image)
   })


});