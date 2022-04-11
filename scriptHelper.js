// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let missionTarget = document.getElementById('missionTarget');

   missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance} </li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`
  
}

function validateInput(testInput) {
   console.log('###########validate input running#########')
   console.log(typeof testInput.value)
   if(testInput.value === ''){
       return "Empty"
   }else if (isNaN(testInput.value)){
       return "Not a Number"
   }else{
       return "Is a Number"
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if(validateInput(pilot) === 'Empty'){
        alert('Pilot is required input');
        document.querySelector('form[data-testid]').reset();
        event.preventDefault()
        return
    }else if(validateInput(pilot) === 'Is a Number'){
        alert('Pilot only accepts string input');
        document.querySelector('form[data-testid]').reset();
        event.preventDefault()
        return
    }else{
        //DO SOME LOGIC
        document.getElementById('pilotStatus').innerHTML = `Pilot Ready: Pilot Name:: ${pilot.value}`
    }
    if(validateInput(copilot) === 'Empty'){
        alert('Co Pilot is required input');
        document.querySelector('form[data-testid]').reset();
        event.preventDefault()
        return
    }else if(validateInput(copilot) === 'Is a Number'){
        alert('CoPilot only accepts string input');
        document.querySelector('form[data-testid]').reset();
        event.preventDefault()
        return
    }else{
        //DO SOME LOGIC
        document.getElementById('copilotStatus').innerHTML = `Co-pilot Ready: Pilot Name:: ${copilot.value}`

    }

    if(validateInput(fuelLevel) === 'Is a Number' && validateInput(cargoLevel) === 'Is a Number'){
        //DO LOGIC          
        if(fuelLevel.value >= 10000 && cargoLevel.value <= 10000){
            this.document.getElementById('faultyItems').style.visibility = "visible";
            this.document.getElementById('launchStatus').style.color = "green";
            this.document.getElementById('launchStatus').innerHTML = `Shuttle is ready for Launch`;

        }
        
    }

    if(validateInput(fuelLevel) === 'Is a Number'){
                //DO LOGIC          
        if(fuelLevel.value < 10000){
            this.document.getElementById('fuelStatus').innerHTML = `There is not enough fuel for the journey`;
            this.document.getElementById('fuelStatus').style.visibility = "visible";
            this.document.getElementById('launchStatus').innerHTML = `Shuttle Not ready for Launch`;
            this.document.getElementById('launchStatus').style.color = "red";
           
        }
    }else{
        alert('fuel level has to have input and be a number');
        document.querySelector('form[data-testid]').reset();
        event.preventDefault()
    }

    if(validateInput(cargoLevel) === 'Is a Number'){
        //DO LOGIC
        if(cargoLevel.value > 10000){
            this.document.getElementById('cargoStatus').innerHTML = `Cargo Mass is too large for shuttle to take off`;
            this.document.getElementById('faultyItems').style.visibility = "visible";
            this.document.getElementById('launchStatus').innerHTML = `Shuttle Not ready for Launch`;
            this.document.getElementById('launchStatus').style.color = "red";
           
        }
        this.document.getElementById('fuelStatus').style.visibility = "visible"
     }else if(validateInput(cargoLevel) === 'Empty'){
         alert('All fields are required!');
         document.querySelector('form[data-testid]').reset();
         event.preventDefault()
     }else{
        alert('Make sure to enter valid information for each field!');
        document.querySelector('form[data-testid]').reset();
        event.preventDefault()        
     }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        // console.log(response.json())
        return response.json()
        });
    return planetsReturned;
}

function pickPlanet(planets) {
    let planet = planets[Math.floor(Math.random()*planets.length)];
    return planet
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
