// Code your solution in this file!

function distanceFromHqInBlocks(someValue){
  let hqStreet = 42;
  return Math.abs(someValue-hqStreet);
};

// You can also write the function using the if statement as shown below 
// function distanceFromHqInBlocks(location) {
//   if (location>42) {
//       return location-42;
//   } else {
//       return 42-location;
//   }
// }
 function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264 ;
};

function distanceTravelledInFeet(start,destination) {
  return Math.abs(destination-start)*264;
};

function calculatesFarePrice(start, destination){
  let dist= distanceTravelledInFeet(start, destination);
  if (dist < 400){
    return 0;
  }
  else if (dist >=400 && dist< 2000)
    {return (dist-400)*0.02;}
  else if (dist >= 2000 && dist<2500)
    {return 25;}
  else
  return 'cannot travel that far';
  
}
