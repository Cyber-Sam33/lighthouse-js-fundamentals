const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
]

//good stations at least 20 capacity
//scools or community centres only

function chooseStations(stations) {
  const goodStations = [];

  for (const station of stations){
    const capacity = station[1];
    
    if (capacity >= 20){
    
      const venue = station[2];

      if (venue === 'school' || venue === 'community centre'){
        goodStations.push(station[0]);
          }
        }
    
      }
      return goodStations;
  }
  

  console.log(chooseStations(stations));
