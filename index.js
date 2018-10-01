// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map( driver => driver.toLowerCase() );
}

function nameToAttributes(drivers){
  var firstName = drivers.split(' ');
  var lastName = drivers.split(' ');
  return drivers.map( driver => firstName + lastName );
}