// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    if (someValue > 42 )
        return someValue - 42;
    
    else (someValue < 42)
        return 42 - someValue;
    
}

function distanceFromHqInFeet(someValue) {
    if (someValue > 42 )
        return (someValue - 42)*264;

    else (someValue < 42)
        return (42 - someValue)*264;
    

}
function distanceTravelledInFeet(start, destination) {
    if (start > destination) 
        return (start - destination)*264;
    
    if (start < destination) 
        return (destination - start)*264;
    
}

function calculatesFarePrice(start, destination) {
    let distance = Math.abs(start - destination)*264;

    if (distance <= 400)
        return 0;

    else if (distance >= 401 && distance <= 2000)
        return (distance - 400)*0.02;
    
    else if (distance >= 2001 && distance <= 2500)
        return 25;
    
    else (distance >= 2501)
        return 'cannot travel that far';
    

  }